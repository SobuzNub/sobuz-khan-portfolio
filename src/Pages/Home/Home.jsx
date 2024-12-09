import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer";
import MySkills from "../MySkills/MySkills";
import Projects from "../Projects";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;