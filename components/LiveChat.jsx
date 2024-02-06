import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import randomSentence from "random-sentence"
import Image from "next/image"

export default function LiveChat() {
    const date = new Date();
    const [toggle, setToggle] = useState(false)
    const [messages, setMessages] = useState([{ user: false, text: "Hello", time: date.getHours() + ":" + date.getMinutes() }])
    const newMessage = useRef()
    const lastMsg = useRef()

    const handleSubmit = e => {
        e.preventDefault();
        if (newMessage.current.value) {
            setMessages([...messages, { user: true, text: newMessage.current.value, time: date.getHours() + ":" + date.getMinutes() }])
            newMessage.current.value = ""
            lastMsg.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    useEffect(() => {
        if (messages[messages.length - 1].user)
            setTimeout(() => {
                setMessages([...messages, { user: false, text: '...' }])
                lastMsg.current.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => {
                    setMessages([...messages.slice(0, messages.length), { user: false, text: randomSentence({ min: 3, max: 10 }), time: `${ date.getHours() }:${ date.getMinutes() } ` }])
                    lastMsg.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }, Math.random() * 2000);
            }, 200);
    }, [messages])

    return (
        <div className='fixed z-[100] bottom-[30px] flex flex-col items-end gap-[20px] right-[30px]'>
            <motion.div transition={ { duration: 0.2 } } className="overflow-hidden relative bg-[#fbfbfb] rounded-[10px] shadow-[0_0_10px_#d7d7d7]" animate={ toggle ? { width: 400, height: 500 } : { width: 0, height: 0 } }>
                <ul className="p-[10px] pb-[50px] overflow-y-scroll scrollbar-hide max-h-[450px] gap-[40px] flex flex-col">
                    { messages.map((e, i) => <li className={ `max-w-[70%] text-[16px] p-[10px] px-[15px] rounded-[20px] relative w-max tracking-[1px] shadow-[0_0_3px_#cbcbcb] ${ e.user ? "bg-[#31c03f] before:right-[5px] float-right self-end text-white rounded-br-[2px]" : "bg-white rounded-bl-[2px]" }` } key={ i }>{ e.text }
                        <span className={ `absolute bottom-[-25px] text-[gray] text-[13px] ${ e.user ? "right-[5px]" : "left-[5px]" }` }>{ e.time }</span>
                    </li>) }
                    <li className="text-transparent mt-[5px]" ref={ lastMsg }>s</li>
                </ul>
                <form onSubmit={ handleSubmit } className="absolute flex bg-[#fbfbfb] p-[3px] shadow-[-3px_0_3px_gray] w-full bottom-0 left-0 ">
                    <input ref={ newMessage } className="w-full bg-transparent outline-none p-[10px]" placeholder="Write a message" type="text" />
                    <button className="w-[50px] h-[50px] bg-[#31c03f] rounded-full p-[10px]">
                        <Image width={ 50 } height={ 50 } alt="Send" src="/send.png" className="w-full object-contain" />
                    </button>
                </form>
            </motion.div>
            <button onClick={ () => setToggle(!toggle) } className='w-[70px] p-[15px] shadow-sm h-[70px] bg-[#31c03f] rounded-full relative'>
                <Image width={ 40 } height={ 40 } alt="Chat" className={ `w-full object-contain transition-opacity ${ toggle ? "opacity-0" : "opacity-1" }` } src="/chat.png" />
                <Image width={ 50 } height={ 50 } alt="close" className={ `w-[50px] object-contain transition-opacity absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2 ${ toggle ? "opacity-1" : "opacity-0" }` } src="/close-white.png" />
            </button>
        </div>
    )
}
