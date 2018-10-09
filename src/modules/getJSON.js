import puppeteer from 'puppeteer'
import delay from 'delay'

const getJSON = async (target) => {
  const browser = await puppeteer.launch({
    slowMo: 50,
  })

  const page = await browser.newPage()
  await page.setViewport({
    width: 1200,
    height: 800,
  })

  await page.goto('https://tokyocatguardian.org/cats_date/')

  await delay(1000)

  const list = await page.evaluate((target) => {
    return new Promise((resolve, _reject) => {
      resolve(Array.from(document.querySelectorAll(target)).map(item => {
        let images = new Object();
        let status = new Object();
        
        // 画像の情報を取得し、オブジェクトに状態を追加
        const imageItem = item.getElementsByTagName('img')
        Array.from(imageItem).map(image => {
          const imgSrc = image.getAttribute("src")
          
          if ((/yellow_car_icon/).test(imgSrc)) {
            // 譲渡会参加の有無
            images.yellowCar = true
          } else if ((/icn_prof/).test(imgSrc)) {
            // 紹介動画の有無
            images.profVideo = true
          } else if ((/icn_other/).test(imgSrc)) {
            // その他動画の有無
            images.otherVideo = true
          } else {
            // サムネイルを設定
            images.thumb = imgSrc.replace(/\d+300x225/g, '')
          }
        })
        
        // テキストを取得し、、オブジェクトに状態を追加
        const texts = item.getElementsByTagName('p')
        Array.from(texts).map((item, i) => {
          Array.from(item.childNodes).map(value => {
            if (value.textContent.trim() !== '') {
              let text = value.textContent.trim()
      
              // シリアル番号を取得
              if ((/^No./).test(text)) {
                status.num = text.substr(3)
              }
              
              // 年齢を取得
              if ((/^\(推定/).test(text)) {
                let age = text.replace(/[^0-9]/g, '')
                if ((/ヶ月/).test(text)) {
                  const ageStart = age.substr(0, 1)
                  const ageEnd = age.substr(1, 1)
                  age = `${ageStart}〜${ageEnd}ヶ月`
                } else {
                  age = `${age}歳`
                }
                status.age = age
              }
              
              // 性別を取得
              if ((/♂|♀/).test(text)) {
                status.sex = text === '♂' ? 'M' : 'F'
              }

              // シェアハウス入居の状態を取得
              if ((/^シェアハウス入居$/).test(text)) {
                status.shareHouse = true
              }
              
              // デビューの状態を取得
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
          status: status,
        }
      }))
    })
  }, target)
  await browser.close()
  return list
}
export default getJSON
