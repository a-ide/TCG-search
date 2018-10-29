import fs from "fs";

const updateJSON = (latestFile, currentFile) =>
  new Promise((resolve, reject) => {
    fs.writeFile(currentFile, latestFile, error => {
      if (error) {
        return reject(error);
      }
      console.log("rewrite successed");
      return resolve();
    });
  });

export default updateJSON;
