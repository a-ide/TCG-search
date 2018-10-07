import 'babel-polyfill'
import path from 'path'
import getJSON from './modules/getJSON'
import updateJSON from './modules/updateJSON'

(async () => {
  try {
    // 最新の猫リストを取得
    const latestJSON = await getJSON();
    // catList.json を更新
    updateJSON(latestJSON, path.join(__dirname, './data/catList.json'))

    // const beforeJSON = await readJSON('./data/catList.json')
  } catch (error) {
    console.log(error)
  }
})()
