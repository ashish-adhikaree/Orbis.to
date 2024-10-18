import { Cloudy, Code, Globe, Layout, Lightbulb, Smartphone } from "lucide-react";
import SectionWrapper from "../../SectionWrapper";

const ToolKit = () => {
    const features = [
        {
            icon: Code,
            title: "Desenvolvimento de software personalizado",
            desc: "Soluções personalizadas projetadas para atender às necessidades específicas do seu negócio, garantindo eficiência e eficácia em cada aplicação.",
        },
        {
            icon: Globe,
            title: "Desenvolvimento Web",
            desc: "Crie sites impressionantes e responsivos que envolvam os usuários e aprimorem sua presença online, usando as mais recentes tecnologias e práticas de design.",
        },
        {
            icon: Smartphone,
            title: "Desenvolvimento de aplicativos móveis",
            desc: "Desenvolva aplicativos móveis intuitivos e fáceis de usar para iOS e Android, ajudando você a alcançar seus clientes a qualquer hora e em qualquer lugar.",
        },
        {
            icon: Cloudy,
            title: "Soluções em cloud",
            desc: "Aproveite serviços de cloud escalonáveis para melhorar o desempenho, a flexibilidade e a segurança, permitindo que sua empresa se adapte às demandas em constante mudança.",
        },
        {
            icon: Layout,
            title: "Design de UI/UX",
            desc: "Concentre-se na criação de experiências de usuário integradas e envolventes com interfaces intuitivas que aumentam a satisfação do cliente e geram conversões.",
        },
        {
            icon: Lightbulb,
            title: "Consultoria Técnica",
            desc: "Beneficie-se de orientação especializada sobre estratégia e implementação de tecnologia, garantindo que seus projetos estejam alinhados com as melhores práticas do setor e tendências futuras.",
        },
    ];

    return (
        <SectionWrapper>
            <div id="services" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Nossos serviços</h2>
                    <p>
                        We empower your business with tailored tech solutions, including custom software, web and mobile
                        apps, cloud services, and user-centric design.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                    <item.icon />
                                </div>
                                <div>
                                    <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                                    <p className="mt-3">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ToolKit;
