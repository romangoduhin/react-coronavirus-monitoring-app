import React from "react";
import s from "./SympthomsBlock.module.css";

function SympthomsBlock() {
  return (
    <div className={s.sympthomsInfo}>
      <h1 className={s.headline}>Симптомы коронавируса </h1>
      <div className={s.discription}>
        Инкубационный период коронавируса Covid-19 может продолжаться более двух
        недель. Более продолжительные сроки инкубационного периода могут быть
        характерны при передаче вируса от животных. Симптомы коронавируса
        Covid-19 схожи с симптомами пневмонии или тяжёлого острого
        респираторного синдрома:
      </div>
      <div className={s.sympthoms}>
        <ul>
          <li>
            Потеря сознания (в результате прогрессирующего разрушения лёгочных
            ткане
          </li>
          <li>Сухой, непродуктивный кашель</li>
          <li>Лихорадка и повышение температуры (38 °С или выше, озноб)</li>
          <li>Затруднения при дыхании</li>
          <li>Боли в области груди</li>
          <li>Головная боль,</li>
          <li>Боль в мышцах</li>
          <li>Общее недомогание</li>
        </ul>
        <h2>Легкая форма коронавируса COVID-19</h2>
        <div>
          Небольшая температура, слабая головная боль, повышенная утомляемость,
          болезненные ощущения в горле, покашливание, ломота в мышцах, легкие
          признаки простуды, бледность, озноб. Редко насморк.
        </div>
        <h2>Как не спутать симптомы коронавируса COVID-19 с ОРВИ</h2>
        <div>
          При ОРВИ и простуде, в отличие о COVID-19, кашель мокрый, а не сухой,
          и всегда есть заложенность носа и насморк. Из схожих симптомов —
          небольшое повышение температуры и головная боль от легкой до
          умеренной.
        </div>
        <h2>Как не спутать симптомы коронавируса COVID-19 с гриппом</h2>
        <div>
          Роспотребнадзор, основываясь на информации ВОЗ, сообщает на своем
          сайте, что симптомы COVID-19 и грипп похожи: "оба вызывают
          респираторное заболевание с широким спектром вариантов — от
          бессимптомного или легкого до тяжелого состояния и смерти". Но при
          гриппе не бывает одышки или других проблем с дыханием, а температура
          почти всегда высокая, в отличие от COVID-19.
        </div>
        <h2>Необычные симптомы коронавируса COVID-19 в Германии</h2>
        <div>
          Немецкий вирусолог Хендрик Стрик, наблюдавший практически всех
          заболевших COVID-19 в Германии, в интервью газете Frankfurter
          Allgemeine Zeitung поделился личным опытом. По мнению специалиста, у
          типичного пациента коронавируса COVID-19 только легкие симптомы.
          Характерны сухой раздражающий кашель и небольшая лихорадка, у 30
          процентов инфицированных отмечалась диарея. Встречались и весьма
          необычные признаки: примерно две трети заболевших говорили о нарушении
          обоняния и вкуса. В течение нескольких дней они отмечали странные
          ощущения. Это говорит о том, что у пациентов из Германии вирус
          SARS-CoV-2 проникал не только в легкие, но и в желудочно-кишечный
          тракт.
        </div>
      </div>
      <h1 className={s.headline}>Эффективные методы защиты</h1>
      <div className={s.video}>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/Rb_gtUYXxqY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
          video
        </iframe>
      </div>
    </div>
  );
}

export default SympthomsBlock;
