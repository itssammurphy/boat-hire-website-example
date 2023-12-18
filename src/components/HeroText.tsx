import { motion } from "framer-motion"
import { animationStart, revealAnimation } from "../utils/animation"

const HeroText = () => {
    return (
        <motion.div
            layout
            initial={{height: 0}}
            animate={{height: "unset"}}
            transition={{delay: animationStart, duration: 1}}
            className="flex flex-col items-center text-center"
        >
            <motion.div
                variants={revealAnimation} 
                initial="hiddenVariant" 
                animate="revealedVariant" 
                transition={{delay: animationStart + 1, duration: 0.5}} 
                className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
            >
                <span>delivering the world's</span>
                <span>premier boat hire service</span>
            </motion.div>
            <motion.span
                variants={revealAnimation}
                initial="hiddenVariant"
                animate="revealedVariant"
                transition={{delay: animationStart + 1.5, duration: 0.75}}
                className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-18px leading-tight"
            >
                Enim id qui sit esse aute ex.
            </motion.span>
        </motion.div>
    )
}

export default HeroText