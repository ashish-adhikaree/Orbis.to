import NavLink from "../NavLink";

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Transformando Ideias em Soluções de Software Inovadoras
                </h1>
                <p className="max-w-xl mx-auto">
                    Na Orbis, somos especializados em transformar suas ideias únicas em soluções de software
                    personalizadas e poderosas que impulsionam a inovação e o crescimento do seu negócio.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="mailto:info@orbis.to"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Contate-nos
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
