import "babel-polyfill";
import path from "path";
import getJSON from "./modules/backend/getJSON";
import sort from "./modules/backend/sort";
import updateJSON from "./modules/backend/updateJSON";
import downloadImg from "./modules/backend/downloadImg";
import getCurrentTime from "./modules/backend/getCurrentTime";

(async () => {
  try {
    // 最新の猫リストを取得し、年齢順にソートする
    const latestChildJSON = await getJSON(
      ".clearfix.container > div > .page > div > article:nth-child(8) > .row-eq-height > .catsitem"
    );
    const latestAduletJSON = await getJSON(
      ".clearfix.container > div > .page > div > article:nth-child(11) > .row-eq-height > .catsitem"
    );
    const latestJSON = await latestChildJSON.concat(latestAduletJSON);
    const sortedJSON = await sort(latestJSON);
    const currentDate = getCurrentTime();
    const obj = {
      lastUpdated: currentDate,
      list: sortedJSON
    };

    // catList.json を更新
    await updateJSON(
      JSON.stringify(obj),
      path.join(__dirname, "./data/catList.json")
    );

    // 猫の画像をダウンロード
    await downloadImg(path.join(__dirname, "./data/catList.json"));
  } catch (error) {
    console.log(error);
  }
})();
