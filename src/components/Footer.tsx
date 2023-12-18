import { motion } from "framer-motion";
import { animationStart } from "../utils/animation";

const Footer : React.FC = () => {
    return (
        <motion.footer 
            initial={{visibility: "hidden", display: "none"}}
            animate={{visibility: "visible" , display: "flex"}}
            transition={{delay: animationStart + 1, duration: 1}}
            className="bg-gray-500/50 w-screen p-50px flex flex-row items-stretch justify-center gap-20px"
        >
            <div className="flex-1">
                <h1 className="font-bold text-2vw">BoatHire</h1>
            </div>
            <div className="flex-1">
                <div className="flex flex-row justify-around items-center">
                    <a className="text-black no-underline" href="#">contact us</a>
                    <a className="text-black no-underline" href="#">about</a>
                    <a className="text-black no-underline" href="#">courses</a>
                    <a className="text-black no-underline" href="#">resources</a>
                    <a className="text-black no-underline" href="#">solutions</a>

                </div>
            </div>
        </motion.footer>
    )
}

export default Footer;