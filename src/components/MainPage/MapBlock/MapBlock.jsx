import React from 'react';
import s from './MapBlock.module.css'

function MapBlock(props) {
    return (
        <div className={s.blockWrapper}>
            <iframe className={s.map} src="https://coronavirus-monitor.info/widget/" scrolling="no">
                Ваш браузер не поддерживает данную карту
            </iframe>

        </div>
    )
}

export default MapBlock;