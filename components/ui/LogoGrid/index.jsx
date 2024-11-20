import Image from "next/image";
import fapesp from "../../../public/logos/fapesp-img.jpg";
import fluminense from "../../../public/logos/fluminense.svg";
import macae from "../../../public/logos/logo-padrao.png";
import startupBrazil from "../../../public/logos/startupbrazil.webp";
import ortobom from "../../../public/logos/ortobom.jpg";
import clicklabs from "../../../public/logos/clicklabs.jpg";
import easytaxi from "../../../public/logos/easytaxi.jpg";
import eht from "../../../public/logos/eht.jpg";
import faperj from "../../../public/logos/faperj.jpg";
import friendsaround from "../../../public/logos/friendsaround.jpg";
import goingsolo from "../../../public/logos/goingsolo.jpg";
import golgroup from "../../../public/logos/golgroup.jpg";
import ictbid from "../../../public/logos/ictbid.jpg";
import ltv from "../../../public/logos/ltv.jpg";
import medvelox from "../../../public/logos/medvelox.jpg";
import mtcriativo from "../../../public/logos/mtcriativo.jpg";
import startupmacae from "../../../public/logos/startupmacae.jpg";
import orbis from "../../../public/logos/orbis.jpg";
import musicx from "../../../public/logos/musicx.jpg";
import votechat from "../../../public/logos/votechat.jpg";
import techsamurai from "../../../public/logos/techsamurai.jpg";
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
    {
        src: ortobom,
        alt: "Ortobom",
        websiteUrl: "https://www.ortobom.com.br",
    },
    {
        src: easytaxi,
        alt: "Easy Taxi",
        websiteUrl: "https://web.archive.org/web/20130912124928/http://www.easytaxi.com.br/",
    },
    {
        src: medvelox,
        alt: "Medvelox",
        websiteUrl: "https://web.archive.org/web/20220116115642/https://www.medvelox.com/",
    },
    {
        src: friendsaround,
        alt: "Friends Around",
        websiteUrl: "https://web.archive.org/web/20100523132050/http://friendsaround.com/ ",
    },
    {
        src: ictbid,
        alt: "Ictbid",
        websiteUrl: "https://web.archive.org/web/20161001074806/http://www.ictbid.com/",
    },
    {
        src: orbis,
        alt: "Orbis",
        websiteUrl: "https://orbis.social",
    },
    {
        src: faperj,
        alt: "Faperj",
        websiteUrl: "http://faperj.br",
    },
    {
        src: startupmacae,
        alt: "Startup Macae",
        websiteUrl: "https://www.macae.rj.gov.br/semed/conteudo/titulo/startup-macae ",
    },
    {
        src: goingsolo,
        alt: "Going Solo",
        websiteUrl: "https://goingsolo.app",
    },
    {
        src: clicklabs,
        alt: "Clicklabs",
        websiteUrl: "https://clicklabs.co",
    },
    {
        src: eht,
        alt: "EHT",
        websiteUrl: "https://easyhardwaretrading.com",
    },
    {
        src: golgroup,
        alt: "Gol Group",
        websiteUrl: "https://web.archive.org/web/20170507100138/http://www.golgrupo.com.br/Inicial.html",
    },
    {
        src: ltv,
        alt: "LTV SaaS Fund",
        websiteUrl: "https://ltv.fund",
    },
    {
        src: mtcriativo,
        alt: "MT Criativo",
        websiteUrl: "https://www.mtcriativo.mt.gov.br/index.php/mtcriativo/",
    },
    {
        src: musicx,
        alt: "Musicx",
        websiteUrl: "https://web.archive.org/web/20110902084056/http://www.musicx.fm/home/ ",
    },
    {
        src: votechat,
        alt: "Votechat",
        websiteUrl: "https://web.archive.org/web/20140706054023/http://www.votechat.me/",
    },
    {
        src: techsamurai,
        alt: "Tech Samurai",
        websiteUrl: "https://techsamurai.com.br",
    },
];

const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">CONFIADO POR EQUIPES DE TODO O MUNDO</h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-12 flex-wrap items-center justify-center md:gap-x-16">
                    {logos.map((item, idx) => (
                        <li key={idx}>
                            <Link href={item.websiteUrl} target="_blank">
                                <Image
                                    className={`rounded-md ${item.alt == "Macae" ? "bg-gray-500" : ""}`}
                                    height={50}
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default LogoGrid;
