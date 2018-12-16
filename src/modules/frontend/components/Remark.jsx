import React from "react";

const Remark = props => (
  <div className="l-main__remark">
    <p>
      【最終更新日】
      {props.lastUpdated}
    </p>
    <p>
      【画像掲載元】
      <a
        href="https://tokyocatguardian.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        東京キャットガーディアン
      </a>
    </p>
  </div>
);

export default Remark;
