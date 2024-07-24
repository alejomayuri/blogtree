"use client"

import style from './style.module.css';
import { useState, useCallback } from 'react';
import { poppins } from '../ui/fonts';
import { usePages } from '../hooks/usePages';
import { useCreatePage } from '../hooks/useCreatePage';
import { createPage } from "../client"
import CreateName from '../ui/create/create-name/create-name';

export default function Create() {
    const pages = usePages()
    const {data, handleOnChange} = useCreatePage()
    const [loading, setLoading] = useState(false)
    const [formToShow, setFormToShow] = useState('NAME')
    // const { data, handleCreate } = useCreatePage()
    console.log("pages", pages)
    console.log("data", data)

    const handleCreate = useCallback(() => {
        setLoading(true)
        createPage(data).then(() => {
            console.log("Page created")
            setLoading(false)
            setFormToShow('URL')
        })
    }, [data]);

    return (
        <div className={style.wrapper}>
            <h1 className={poppins.className}>
                {formToShow === 'NAME' ? 'Dale un nombre a tu página' : 'Escoge tu URL'}
            </h1>
            <p className={poppins.className}>
                {formToShow === 'NAME' ? 'Puedes poner lo que quieras. No te preocupes, podrás cambiarlo siempre que quieras más tarde.'
                : 'Podrás cambiarlo siempre que quieras más tarde.'}
            </p>
            {formToShow === 'URL' && (
                <div className={style.url}>
                    <span className={poppins.className}>pataki.com/</span>
                    <input className={poppins.className} placeholder="tu-url"></input>
                </div>
            )}
            {formToShow === 'NAME' && (
                <CreateName loading={loading} handleOnChange={handleOnChange} name={data.creator_name} handleCreate={handleCreate} />
            )}
        </div>
    )
}