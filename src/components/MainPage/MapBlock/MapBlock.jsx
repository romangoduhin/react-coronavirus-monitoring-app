import React from "react";
import s from "./MapBlock.module.css";

function MapBlock() {
  return (
    <div className={s.blockWrapper}>
      <iframe
        className={s.map}
        src="https://coronavirus-monitor.ru/map"
        scrolling="no"
      >
        Ваш браузер не поддерживает данную карту
      </iframe>
    </div>
  );
}

export default MapBlock;
