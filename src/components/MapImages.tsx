import { motion } from "framer-motion"
import { animationStart } from "../utils/animation"

const MapImages = () => {
    return (
        <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
            <motion.img 
                src="/assets/map1.png"
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    delay: animationStart + 1.5,
                    type: "tween",
                    duration: 0.5,
                }}
            />
            <motion.img
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    delay: animationStart + 1.5,
                    type: "tween",
                    duration: 0.5,
                }}
                src="/assets/map2.png"
            />
        </div>
    )
}

export default MapImages