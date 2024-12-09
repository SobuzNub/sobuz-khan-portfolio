import { Link } from 'react-router-dom';
import img from '../../assets/IMG_20240503_232900_758.jpg'
import Loader from '../Animate/Loader';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className='md:flex justify-evenly'>
            {/* my info */}
            <div className=" md:mt-24 md:w-[840px] ml-6">
                <h3 className="md:text-2xl text-black ml-6 font-bold">About Me</h3>
                <div className="divider bg-red-700 h-1 md:w-[400px] ml-6"></div>
                <div className='text-black ml-6'>
                    <p>I am a junior front-end developer. Strong passion, love and self-improvement for technology and coding so far Fontend has learned - ReactJS, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS also mobile responsive, all device responsive and various packages, frameworks, libraries. Also learned and learning for backend - MongoDB, NodeJS, Express.js, JWT, and Firebase. Besides practice and work, I am constantly learning new things and love learning new technologies. I like taking on new challenges. My next target is to become a very good full-stack developer.</p>
                </div>
                <div className='mt-8'>
                    <div className='flex text-2xl gap-4 px-6'>
                        <Link to='https://github.com/SobuzNub'><FaGithub /></Link>
                        <Link to='https://www.linkedin.com/in/md-saidujjaman-sobuj/'><FaLinkedin /></Link>
                        <Link to='https://www.instagram.com/sobuz_nub/?igsh=MWhkcjdmNDZreWtqdA%3D%3D&utm_source=ig_contact_invite#'><FaInstagram /></Link>
                        <Link to='https://www.facebook.com/profile.php?id=100008408419014'><FaFacebook /></Link>
                    </div>
                </div>
            </div>

            {/* my profile */}
            <div className=' rounded-lg'>
                {/* <Loader></Loader> */}
            </div>
        </div>
    );
};

export default AboutMe;