import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const LanguageSwitch = () => {
    const{lang,toggleLang}=useContext(AppContext)
  return (
    <>
      <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">
        {lang === "en" ? "Hello" : "வணக்கம்"}
      </h1>

      <button
        onClick={toggleLang}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg"
      >
        Switch Language
      </button>
    </div></>
  )
}

export default LanguageSwitch
