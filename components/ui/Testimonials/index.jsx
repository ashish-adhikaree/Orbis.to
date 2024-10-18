import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Lucas Silva",
            title: "Gerente de Projetos",
            quote: "A Orbis transformou nossas ideias em realidade com uma abordagem incrível e resultados impressionantes!",
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Rafael Almeida",
            title: "Analista de Sistemas",
            quote: "A equipe da Orbis tem um profundo conhecimento técnico. Eles realmente entendem nossas necessidades e entregam soluções eficazes.",
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            name: "Mariana Costa",
            title: "Desenvolvedora de Software",
            quote: "Trabalhar com a Orbis foi uma experiência maravilhosa. Eles são dedicados e sempre superam nossas expectativas.",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Ana Beatriz Santos",
            title: "Designer de UX/UI",
            quote: "A Orbis não só entrega software de alta qualidade, mas também se preocupa com a experiência do usuário. É uma parceria valiosa!",
        },
        {
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            name: "Juliana Mendes",
            title: "Gerente de TI",
            quote: "A Orbis é a escolha certa para quem busca inovação e qualidade. O comprometimento deles com o cliente é admirável!",
        },
        {
            avatar: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Fernando Oliveira",
            title: "Especialista em Marketing Digital",
            quote: "A Orbis nos ajudou a impulsionar nossos projetos com tecnologia inovadora. Eles são verdadeiros parceiros no crescimento do nosso negócio.",
        },
    ];

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Veja o que outras pessoas dizem sobre nós
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Ouça o que os especialistas de todo o mundo estão dizendo sobre nós.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <li key={idx} className="bg-white border p-4 rounded-xl">
                                <figure>
                                    <div className="flex items-center gap-x-4">
                                        <img
                                            src={item.avatar}
                                            className="w-14 h-14 object-cover rounded-full"
                                            alt={item.name}
                                        />
                                        <div>
                                            <span className="block text-gray-800 font-semibold">{item.name}</span>
                                            <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className="mt-6 text-gray-700">{item.quote}</p>
                                    </blockquote>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
