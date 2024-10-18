import Image from "next/image";
import fapesp from "../../../public/logos/fapesp-img.jpg";
import fluminense from "../../../public/logos/fluminense.svg";
import macae from "../../../public/logos/logo-padrao.png";
import startupBrazil from "../../../public/logos/startupbrazil.webp";
import Link from "next/link";

const logos = [
    {
        src: fapesp,
        alt: "Fapesp",
        websiteUrl: "https://fapesp.br",
    },
    {
        src: fluminense,
        alt: "Fluminense",
        websiteUrl: "https://www.fluminense.com.br/site/",
    },
    {
        src: startupBrazil,
        alt: "Startup Brazil",
        websiteUrl: "https://www.startupbrasil.org.br",
    },
    {
        src: macae,
        alt: "Macae",
        websiteUrl: "https://macae.rj.gov.br/cidade/conteudo/titulo/capital-nacional-do-petroleo",
    },
];

const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">CONFIADO POR EQUIPES DE TODO O MUNDO</h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {logos.map((item, idx) => (
                        <li key={idx}>
                            <Link href={item.websiteUrl} target="_blank">
                                <Image height={50} src={item.src} alt={item.alt} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default LogoGrid;
