import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Pronto para dar vida à sua visão?</h2>
                <p className="mt-3 text-gray-600">
                    Vamos colaborar para transformar suas ideias em soluções inovadoras que impulsionam o sucesso. Quer
                    você tenha um projeto em mente ou precise de orientação, nossa equipe está aqui para ajudar.
                </p>
                <NavLink
                    href="mailto:info@orbis.to"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Entre em contato
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
);

export default FooterCTA;
