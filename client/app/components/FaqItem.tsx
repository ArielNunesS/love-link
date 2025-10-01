"use client"

import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

interface FAQItemProps {
    key: number,
    question: string,
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full border-gray-700/50 border-b last:border-b-0 transition-all duration-300">

      <button
        className="flex justify-between items-center w-full py-4 text-left cursor-pointer hover:bg-white/5 rounded-4xl px-4 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
    <div className="flex flex-row w-full mx-auto justify-between">
        <p className="text-lg font-semibold text-white px-5 max-m:text-base max-p:text-sm max-m:px-2">{question}</p>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp className="flex mx-7 text-rose-500 transition-transform" size={25} />
        ) : (
          <MdOutlineKeyboardArrowDown className="flex mx-7 text-rose-500 transition-transform" size={25} />
        )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pb-4 px-4">
          <p className="text-left px-5 text-sm text-white/60 leading-relaxed pr-10">{answer}</p>
        </div>
      </div>
    </div>
  )
}