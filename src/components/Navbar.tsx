import { animationStart, revealAnimation } from "../utils/animation";
import Boat from "./Boat";
import RightArrow from "./RightArrow";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: animationStart}}
        >
            <motion.div
                variants={revealAnimation}
                initial="hiddenVariant"
                animate="revealedVariant"
                transition={{
                    ease: "easeIn",
                    type: "tween",
                    staggerChildren: 0.15,
                    duration: 0.5,
                    delayChildren: animationStart + 0.5,
                }}
                className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
            >
            <motion.div>
                <Boat />
            </motion.div>
            <div className="flex gap-20px items-center <md:hidden">
                <motion.span variants={revealAnimation} className="cursor-pointer">about</motion.span>
                <motion.span variants={revealAnimation} className="cursor-pointer">courses</motion.span>
                <motion.span variants={revealAnimation} className="cursor-pointer">resources</motion.span>
                <motion.span variants={revealAnimation} className="cursor-pointer">solutions</motion.span>
            </div>
            <motion.div variants={revealAnimation} className="flex gap-5px items-center cursor-pointer">
                <span className="mb-5px">Sign in</span>
                <RightArrow />
            </motion.div>
            
        </motion.div>
        </motion.div>
    )
}

export default Navbar;