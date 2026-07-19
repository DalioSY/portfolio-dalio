import ContactForm from "@/components/contactForm";
import { Link } from "@/components/link";

export default function ContatoPage() {
    return (
        <section className=' grid grid-cols-3 p-5 m-5 bg-background rounded-xl'>
            <div className='col-span-3 sm:col-span-2 space-y-4'>
                <h1 className=' text-xl sm:text-2xl '>Vamos conversar!</h1>
                <p>Tem alguma ideia, projeto ou oportunidade? Será um prazer conhecer o que você tem em mente.</p>
                <p>Estou sempre aberto a novos desafios, oportunidades de trabalho, colaborações e conversas sobre tecnologia e desenvolvimento de software. Se você acredita que posso contribuir com seu projeto ou simplesmente deseja trocar experiências, entre em contato através do formulário.</p>
                <p>Você também pode me encontrar nas minhas redes profissionais:</p>
                <ul className=' flex flex-col gap-2'>
                    <li className=' flex flex-row'><Link linkedin />: acompanhe minha trajetória profissional e conecte-se comigo.</li>
                    <li className=' flex flex-row'><Link github />: explore meus projetos, contribuições e repositórios. </li>
                </ul>
                <p>Responderei à sua mensagem o mais breve possível. Ficarei feliz em conversar com você!</p>
            </div>
            <div className='col-span-3 sm:col-span-1'>
                <ContactForm />
            </div>
        </section>
    );
}