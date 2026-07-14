const timeline = [
    {
        time: "11/2023",
        title: "Início dos estudos",
        description:
            "Comecei a estudar desenvolvimento web utilizando HTML, CSS e JavaScript.",
    },
    {
        time: "02/2024",
        title: "Primeiros Projetos",
        description:
            "Desenvolvi aplicações utilizando React, Next.js e TypeScript.",
    },
    {
        time: "06/2024",
        title: "Portfólio Profissional",
        description:
            "Criação do meu portfólio moderno com foco em performance, responsividade e animações.",
    },
    {
        time: "09/2024",
        title: "Primeira oportunidade de emprego",
        description:
            "Ingressei na Guapipapeis como desenvolvedor, participando da criação de um formulário de cadastro para clientes. Foi minha primeira experiência profissional na área de desenvolvimento de software.",
    },
    {
        time: "11/2024",
        title: "Transição para a Cubevis",
        description:
            "Deixei a Guapipapeis e iniciei uma nova etapa na startup de tecnologia Cubevis. Atuei no desenvolvimento de Landing Pages, projetos de controle de acesso, soluções para logística, aplicações web e aplicativos mobile, ampliando minha experiência em diferentes áreas do desenvolvimento.",
    },
];

export default function LinhaTempo() {
    return (
        <section className='flex flex-col bg-background p-5 m-5 rounded-xl'>
            <div className="max-w-5xl mx-auto">
                <div className="relative">
                    <div className="absolute left-5 top-0 h-full w-1 bg-gray-300 rounded-full" />

                    <div className="space-y-14">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative flex items-start gap-6">
                                <div className="w-fit relative z-10 flex h-10 py-1 px-4 items-center justify-center rounded-full bg-cyan-500 text-white font-bold shadow-lg">
                                    {index + 1}
                                </div>

                                <div className="flex-1 rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-md hover:shadow-xl transition duration-300">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="text-muted-foreground mt-2">
                                            {item.time}
                                        </p>
                                    </div>
                                    <p className="text-muted-foreground mt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}