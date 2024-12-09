import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className="my-12">
            <p className="text-4xl text-black text-center mt-16 font-bold my-8">Projects</p>
            <div className="divider bg-black h-1 mt-16 container mx-auto"></div>
            <div className="flex justify-center gap-5 mt-16">
                <div>
                    <div className="card bg-base-100 md:w-[500px] shadow-xl rounded-t-none">
                        <figure>
                            <img className="bg-cover"
                                src="https://i.ibb.co.com/W6xVgFb/2ag.png"
                                alt="Library Management" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl">
                                Library Management
                                <div className="divider bg-black h-1 container mx-auto"></div>
                            </h2>
                            <div className="card-actions justify-center">
                                <div className="badge badge-outline">React JS</div>
                                <div className="badge badge-outline">Tailwind Css</div>
                                <div className="badge badge-outline">JavaScript</div>
                                <div className="badge badge-outline">JWT Token</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">FireBase</div>
                                <div className="badge badge-outline">Tanstack Query</div>
                                <div className="badge badge-outline">Express JS</div>
                                <div className="badge badge-outline">React Router Dom</div>
                            </div>
                            <div className="divider bg-black h-1 container mx-auto"></div>
                            <div className="flex justify-center gap-3">
                                <Link to='https://library-management-fcfc1.web.app/' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Live</Link>
                                <Link to='https://github.com/SobuzNub/assignment-11-client' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Client</Link>
                                <Link to='https://github.com/SobuzNub/assignment-11-library-management-server' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Server</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 md:w-[500px] shadow-xl rounded-t-none">
                        <figure>
                            <img className="bg-cover"
                                src="https://i.ibb.co.com/RYZhC00/c2.png"
                                alt="Coffee Shop" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl">
                                Coffee Shop BD
                                <div className="divider bg-black h-1 container mx-auto"></div>
                            </h2>
                            <div className="card-actions justify-center">
                                <div className="badge badge-outline">React JS</div>
                                <div className="badge badge-outline">Tailwind Css</div>
                                <div className="badge badge-outline">JavaScript</div>
                                <div className="badge badge-outline">JWT Token</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">FireBase</div>
                                <div className="badge badge-outline">Tanstack Query</div>
                                <div className="badge badge-outline">Express JS</div>
                                <div className="badge badge-outline">React Router Dom</div>
                            </div>
                            <div className="divider bg-black h-1 container mx-auto"></div>
                            <div className="flex justify-center gap-3">
                                <Link to='https://coffee-shop-1023e.web.app/' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Live</Link>
                                <Link to='https://github.com/SobuzNub/Coffee-shop-bd' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Client</Link>
                                <Link to='https://github.com/SobuzNub/Coffee-shop-bd-server' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Server</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="card bg-base-100 md:w-[500px] shadow-xl rounded-t-none">
                            <figure>
                                <img className="bg-cover"
                                    src="https://i.ibb.co.com/VjGmLpN/shop2.png"
                                    alt="Shop Nest Quest" />
                            </figure>
                            <div className="card-body text-center">
                                <h2 className="font-bold text-2xl">
                                    Shop Nest Quest
                                    <div className="divider bg-black h-1 container mx-auto"></div>
                                </h2>
                                <div className="card-actions justify-center">
                                    <div className="badge badge-outline">React JS</div>
                                    <div className="badge badge-outline">Tailwind Css</div>
                                    <div className="badge badge-outline">JavaScript</div>
                                    <div className="badge badge-outline">JWT Token</div>
                                    <div className="badge badge-outline">MongoDB</div>
                                    <div className="badge badge-outline">FireBase</div>
                                    <div className="badge badge-outline">Tanstack Query</div>
                                    <div className="badge badge-outline">Express JS</div>
                                    <div className="badge badge-outline">React Router Dom</div>
                                </div>
                                <div className="divider bg-black h-1 container mx-auto"></div>
                                <div className="flex justify-center gap-3">
                                    <Link to='https://shop-nest-quest.web.app/' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Live</Link>
                                    <Link to='https://github.com/SobuzNub/shop-nest-quest-client' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Client</Link>
                                    <Link to='https://github.com/SobuzNub/shop-nest-quest-server' className="btn bg-slate-800 text-white hover:bg-slate-700 rounded-none w-20">Server</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;