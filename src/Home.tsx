import BoatVideo from "./components/BoatVideo";
import CenteredSection from "./components/CenteredSection";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";
import HeroText from "./components/HeroText";
import MapImages from "./components/MapImages";
import TwoColSection from "./components/TwoColSection";
import { motion } from "framer-motion";
import { animationStart } from "./utils/animation";

const Home = () => {
    return <>
        <HeroText />
        <MapImages />
        <BoatVideo />
        <motion.main
            initial={{visibility: "hidden", display: "none"}}
            animate={{visibility: "visible" , display: "flex"}}
            transition={{delay: animationStart + 1, duration: 1}}
        >
            <CenteredSection title="Eu officia consequat" subtitle="Elit ut tempor quis veniam culpa proident ipsum sunt.">
                <ContentContainer>
                    <p>Non culpa ad est ipsum sunt culpa aute aliqua occaecat incididunt et. Voluptate aliquip adipisicing sunt magna quis deserunt voluptate nostrud deserunt enim mollit velit eu. Incididunt duis proident excepteur cillum incididunt officia excepteur commodo. Incididunt in nisi ex aliquip nostrud occaecat cupidatat duis cupidatat aute duis enim aute.
                    <br /><br />
                    Mollit sint adipisicing anim do amet non minim pariatur consequat minim. Esse labore nulla laborum aute occaecat pariatur ad proident. Minim sint consectetur amet amet enim ipsum proident sunt consectetur ex velit occaecat cupidatat laborum. Reprehenderit incididunt mollit irure et consectetur elit exercitation ex magna sunt. Quis consectetur consequat ad exercitation labore sunt consectetur sit. In laboris aute magna ipsum labore ullamco sit. Quis cillum reprehenderit amet velit sint cupidatat elit anim magna voluptate.</p>
                </ContentContainer>
            </CenteredSection>
            <TwoColSection title="Reprehenderit consequat minim quis" subtitle="Sunt sit veniam culpa sunt ex" image="src/assets/boat1.jpg">
                <p>Amet et est irure mollit ad ut fugiat quis esse. In dolor incididunt sunt cillum ad laboris reprehenderit ad sit enim ullamco tempor veniam officia. Pariatur non adipisicing enim elit et tempor nisi occaecat cupidatat sint do non aliquip. Exercitation exercitation eiusmod consequat commodo voluptate ea tempor. Do consequat ad excepteur exercitation cillum. Culpa sunt dolore id irure mollit aliquip ut laborum elit dolore sint.
                <br /><br />
                Est ullamco minim occaecat fugiat nostrud aliqua laborum qui et consequat consequat magna aute. Aute incididunt non non fugiat irure magna culpa irure sint proident aliquip veniam. Dolor commodo quis proident officia elit deserunt. Anim fugiat deserunt non in adipisicing veniam ullamco. Laborum ipsum labore ex do. Nostrud quis est consequat ea id cupidatat tempor.</p>
            </TwoColSection>
        </motion.main>
        <Footer />
    </>
}

export default Home;