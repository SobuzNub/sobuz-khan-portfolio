import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

const MySkills = () => {
    return (
        <div className="my-8">
            <h3 className="text-4xl text-black text-center mt-16 font-bold">My Skills</h3>
            <div className="divider bg-red-700 h-1 container mx-auto"></div>
            <div className="md:flex justify-center gap-28">
                {/* left container */}
                <div className="mt-6 bg-slate-950 p-6 rounded-lg">
                    <h3 className="text-white text-3xl font-bold text-center">Front-End Side</h3>
                    <div className="mt-4">
                        <div className="flex">
                            <TiHtml5 className="text-8xl hover hover:scale-95 transition duration-300 text-orange-500"></TiHtml5>
                            <SiCss3 className="text-7xl mt-5 hover hover:scale-95 transition duration-300 text-blue-500"></SiCss3>
                            <TbBrandJavascript className="text-8xl mt-2 hover hover:scale-95 transition duration-300 text-yellow-500"></TbBrandJavascript>

                        </div>
                        <div className="flex ml-6 justify-center">
                            <GrReactjs className="text-8xl mt-2 hover hover:scale-95 transition duration-300 text-blue-500"></GrReactjs>
                            <RiTailwindCssFill className="text-8xl mt-2 hover hover:scale-95 transition duration-300 text-blue-500"></RiTailwindCssFill>
                        </div>
                    </div>
                </div>
                {/* right container */}
                <div className="mt-6 bg-slate-950 p-6 rounded-lg">
                    <h3 className="text-white text-3xl font-bold text-center">Backend Side</h3>
                    <div className="mt-4">
                        <div className="flex ml-4">
                            <FaNodeJs className="text-7xl mt-4 hover hover:scale-95 transition duration-300 text-green-500"></FaNodeJs>
                            <SiExpress className="text-7xl mt-5 hover hover:scale-95 transition duration-300 ml-4 text-pink-500"></SiExpress>
                            <SiMongodb className="text-8xl mt-2 hover hover:scale-95 transition duration-300 text-green-500"></SiMongodb>

                        </div>
                        <div className="flex -ml-6 justify-center">
                            <SiFirebase className="text-8xl mt-2 hover hover:scale-95 transition duration-300 text-yellow-500"></SiFirebase>
                            <SiJsonwebtokens className="text-8xl mt-2 hover hover:scale-95 transition duration-300 text-red-500"></SiJsonwebtokens>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;