import NavLink from "../NavLink";

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Transforming Ideas into Innovative Software Solutions
                </h1>
                <p className="max-w-xl mx-auto">
                    At Orbis, we specialize in turning your unique ideas into powerful, custom software solutions that
                    drive innovation and growth for your business.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="mailto:info@orbis.social"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Contact us
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
