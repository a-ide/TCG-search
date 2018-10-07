import puppeteer from 'puppeteer'
import delay from 'delay'

const getJSON = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  })

  const page = await browser.newPage()
  await page.setViewport({
    width: 1200,
    height: 800
  })

  await page.goto('https://tokyocatguardian.org/cats_date/')

  await delay(1000)

  const list = await page.evaluate(() => 
    Array.from(document.querySelectorAll('.clearfix.container > div > .page > div > article:nth-child(8) > .row-eq-height > .catsitem')).map(item => {
      let images = new Object();
      let status = new Object();
      
      // 画像URLを取得
      const imageItem = item.getElementsByTagName('img')
      Array.from(imageItem).map(image => {
        const imgSrc = image.getAttribute("src")
        
        if ((/yellow_car_icon/).test(imgSrc)) {
          images.yellowCar = true
        } else {
          // 置換部分、要検証
          images.thumb = imgSrc.replace(/\d+300x225/g, '')
        }
      })
      
      // テキストを取得
      const texts = item.getElementsByTagName('p')
      Array.from(texts).map((item, i) => {
        Array.from(item.childNodes).map(value => {
          // console.log(value)
          if (value.textContent.trim() !== '') {
            let text = value.textContent.trim()
    
            // No を抽出
            if ((/^No./).test(text)) {
              status.num = text.substr(3);
            }
            
            // 年齢を取得
            if ((/^\(推定/).test(text)) {
              let age = text.replace(/[^0-9]/g, '')
              if (age.length === 1) {
                age = `${age}歳`
              } else {
                const ageStart = age.substr(0, 1)
                const ageEnd = age.substr(1, 1)
                age = `${ageStart}〜${ageEnd}ヶ月`
              }
              status.age = age
            }
            
            // 性別を取得
            if ((/♂|♀/).test(text)) {
              status.sex = text === '♂' ? 'M' : 'F'
            }
            
            // デビューの有無
            status.debut = true
            if ((/^★近日デビュー$/).test(text)) {
              status.debut = false
            }
          }
        })
      })
      
      // 各猫の情報をオブジェクト化
      return { 
        url: item.querySelector('a').href,
        images: images,
        status: status
      }
    })
  )
  const json = JSON.stringify(list)
  await browser.close()
  return json
}
export default getJSON
