import 'babel-polyfill'
import path from 'path'
import getJSON from './modules/getJSON'
import updateJSON from './modules/updateJSON'
import downloadImg from './modules/downloadImg'

(async () => {
  try {
    // 最新の猫リストを取得
    const latestChildJSON = await getJSON('.clearfix.container > div > .page > div > article:nth-child(8) > .row-eq-height > .catsitem');
    const latestAduletJSON = await getJSON('.clearfix.container > div > .page > div > article:nth-child(11) > .row-eq-height > .catsitem');
    const latestJSON = await latestChildJSON.concat(latestAduletJSON)

    // catList.json を更新
    await updateJSON(
      JSON.stringify(latestJSON),
      path.join(__dirname, './data/catList.json')
    )

    // 猫の画像をダウンロード
    await downloadImg(path.join(__dirname, './data/catList.json'))
  } catch (error) {
    console.log(error)
  }
})()
