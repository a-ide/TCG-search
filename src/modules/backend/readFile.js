import fs from "fs";

const readFile = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data);
    });
  });

export default readFile;
