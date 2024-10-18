import { Cloudy, Code, Globe, Layout, Lightbulb, Smartphone } from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";

const ToolKit = () => {
    const features = [
        {
            icon: Code,
            title: "Custom Software Development",
            desc: "Tailored solutions designed to meet your specific business needs, ensuring efficiency and effectiveness in every application.",
        },
        {
            icon: Globe,
            title: "Web Development",
            desc: "Create stunning, responsive websites that engage users and enhance your online presence, using the latest technologies and design practices.",
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            desc: "Develop intuitive and user-friendly mobile applications for iOS and Android, helping you reach your customers anytime, anywhere.",
        },
        {
            icon: Cloudy,
            title: "Cloud Solutions",
            desc: "Leverage scalable cloud services to improve performance, flexibility, and security, allowing your business to adapt to changing demands.",
        },
        {
            icon: Layout,
            title: "UI/UX Design",
            desc: "Focus on creating seamless and engaging user experiences with intuitive interfaces that enhance customer satisfaction and drive conversions.",
        },
        {
            icon: Lightbulb,
            title: "Tech Consulting",
            desc: "Benefit from expert guidance on technology strategy and implementation, ensuring your projects align with industry best practices and future trends.",
        },
    ];

    return (
        <SectionWrapper>
            <div id="services" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Our Services</h2>
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
