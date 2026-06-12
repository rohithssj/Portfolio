import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const Email = () => {

    const [copy, isCopy] = useState(false)
    const email = "rohithssj23@gmail.com"

    const clipBoard = () => {
        navigator.clipboard.writeText(email)
        isCopy(true)

        setTimeout(() => {
            isCopy(false)
        }, 2000)
    }

    return (
        <motion.button
        whileHover={{y:-5}}
        whileTap={{scale : 1.05}}
            onClick={clipBoard}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
            <AnimatePresence mode="wait">
                {copy ? (<motion.p className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1, ease: "easeInOut" 
                    }}
                   
                >
                    <img src="assets/copy.svg" className="w-5" alt="" />
                    Email Has Copied!
                </motion.p>
                ) : (
                    <motion.p className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        
                    >
                        <img src="assets/copy.svg" className="w-5" alt="copy" />
                        Copy Email Address
                    </motion.p>)}
            </AnimatePresence>
        </motion.button>
    )
}

export default Email