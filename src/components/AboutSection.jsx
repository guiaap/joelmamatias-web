import SectionTag from "./SectionTag.jsx";

export default function AboutSection() {

    return (
        <section id="about">
            <div>
                <article className="flex flex-col gap-2">
                    <SectionTag text="Quem sou eu" color="--primary-brown" />

                    <h2>Sobre mim</h2>

                    <p>Sou formada em Administração de Empresas e pós-graduada em Gestão Estratégica de Pessoas. 
                        Complemento minha atuação com especializações em Segurança do Trabalho, Gestão de Cargos e 
                        Salários, Gestão de Contratos, Programação Neurolinguística (PNL) e Administração de Condomínios.
                    </p>

                    <p>
                        Atuo há mais de 20 anos na área administrativa, com foco de 15+ anos em Departamento Pessoal. 
                        Tenho experiência sólida nos setores de construção civil e eletromecânica, 
                        onde desenvolvi expertise em gestão de pessoas, processos e segurança do trabalho.
                    </p>

                    <p>
                        "Do planejamento à execução — com organização, conformidade e resultados práticos."
                    </p>

                    <p>
                        Também sou Administradora Judicial e Perita registrada no CRA-SC, 
                        o que amplia minha visão técnica e jurídica para apoiar empresas em decisões 
                        seguras e eficientes
                    </p>

                    <ul>
                        <li>Atendimento próximo e humanizado.</li>
                        <li>Processos claros, com rotinas e indicadores.</li>
                        <li>Entregas objetivas e aplicáveis no dia a dia.</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}