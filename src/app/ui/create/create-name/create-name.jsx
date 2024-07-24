"use client"

import style from './style.module.css';
import { poppins } from '../../fonts';

export default function CreateName({handleOnChange, name, handleCreate, loading}) {
    return (
        <div className={style.form}>
            <input onChange={handleOnChange} name="creator_name" className={poppins.className} placeholder="Tu nombre de creador"></input>
            <button disabled={!name || !!loading} onClick={handleCreate} className={poppins.className}>
                {loading ? <img src='/loading_b.gif' /> : 'Continuar'}
            </button>
        </div>
    )
}