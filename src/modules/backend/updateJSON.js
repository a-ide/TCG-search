import fs from 'fs'

const updateJSON = (latestFile, currentFile) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(currentFile, latestFile, (error) => {
      if (error) {
        return reject(error)
      }
      resolve(console.log('rewrite successed'))
    })
  })
}

export default updateJSON
