import image from '../../assets/IMG_20240503_232900_758.jpg'

const Banner = () => {
    return (
        <div className='p-10 '>
            <div className="mt-28 md:flex gap-6 justify-center ">
                {/* my information */}
                <div className="text-black md:w-[840px] ml-8 mt-36 font-semibold">
                    <h3>Welcome To My Place</h3>
                    <div className="mt-2">
                        <h3><span className="md:text-4xl font-semibold">Hi, I’m</span> <span className="text-red-800 font-bold text-5xl">Md SOBUZ KHAN</span> <br /> <span className="text-4xl font-semibold">A Dedicated Front-End Developer_|</span></h3>
                    </div>
                    <div className="mt-2 text-black-400">
                        <p>Feel comfortable learning and exploring coding and technology. <br />
                            And because of the passion and love for coding and technology, choosing this <br /> sector as a career.</p>
                    </div>
                </div>

                {/* my profile */}
                <div className='md:w-[640px] bg-none'>
                    <img className='bg-none rounded-lg' src={image} alt="" />
                </div>

            </div>
            <div className="divider bg-black h-1 mt-16 container mx-auto"></div>
        </div>
    );
};

export default Banner;

