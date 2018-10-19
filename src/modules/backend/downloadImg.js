import fs            from 'fs'
import path          from 'path'
import request       from 'request'
import { promisify } from 'util'
import readFile      from './readFile'

const downloadImg = async (list) => {
  const data = await readFile(list)

  JSON.parse(data).list.map(async item => {
    if (item.images.thumb === undefined) {
      return
    }

    // ファイル名を取得
    const fileName = item.images.thumb.split('/').pop().split('_')[0].toUpperCase()

    // ファイルを取得
    const res = await promisify(request)({
      method: 'GET',
      uri: item.images.thumb,
      encoding: null,
    })
    
    if (res.statusCode === 200) {
      await promisify(fs.writeFile)(path.join(__dirname, `img/${fileName}.jpg`), res.body, 'binary')
    } else {
      throw new Error(`${res.statusCode}`)
    }
  })
}

export default downloadImg
