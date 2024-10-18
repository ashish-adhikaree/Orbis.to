import { Clock, Star, Users } from "lucide-react";
import SectionWrapper from "../../SectionWrapper";

const Features = () => {
    const features = [
        {
            icon: <Star />,
            title: "Expertise in Diverse Technologies",
            desc: "Our team is proficient in a wide range of technologies, ensuring that we can deliver the best solutions tailored to your specific needs, no matter the complexity.",
        },
        {
            icon: <Clock />,
            title: "Agile Development Approach",
            desc: "We employ an agile development methodology, allowing for flexibility and rapid iterations, ensuring your project stays on track and adapts to changes efficiently.",
        },
        {
            icon: <Users />,
            title: "Client-Centric Focus",
            desc: "Our commitment to understanding your business and collaborating closely with you guarantees that we create solutions that truly align with your goals.",
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
