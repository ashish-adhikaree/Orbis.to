import { Clock, Star, Users } from "lucide-react";
import SectionWrapper from "../../SectionWrapper";

const Features = () => {
    const features = [
        {
            icon: <Star />,
            title: "Expertise em diversas tecnologias",
            desc: "Nossa equipe é proficiente em uma ampla gama de tecnologias, garantindo que possamos entregar as melhores soluções adaptadas às suas necessidades específicas, independentemente da complexidade.",
        },
        {
            icon: <Clock />,
            title: "Abordagem de Desenvolvimento Ágil",
            desc: "Empregamos uma metodologia de desenvolvimento ágil, permitindo flexibilidade e iterações rápidas, garantindo que seu projeto permaneça no caminho certo e se adapte às mudanças de forma eficiente.",
        },
        {
            icon: <Users />,
            title: "Foco Centrado no Cliente",
            desc: "Nosso compromisso em compreender o seu negócio e colaborar estreitamente com você garante que criamos soluções que realmente se alinham aos seus objetivos.",
        },
    ];

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <li key={idx} className="space-y-3">
                            <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                            <p>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default Features;
