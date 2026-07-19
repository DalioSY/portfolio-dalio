import { FiGithub, FiLinkedin } from "react-icons/fi";

interface LinkProps {
    linkedin?: boolean;
    github?: boolean;
}

export function Link({ linkedin, github }: LinkProps) {
    return (
        <>
            {linkedin && (
                <a
                    className='flex items-center gap-4  bg-background px-5 rounded-full hover:bg-primary-gradient hover:text-white active:scale-90'
                    href='https://www.linkedin.com/in/dalio-s-yamada/'
                >
                    <FiLinkedin />
                    Linkedin
                </a>
            )}
            {github && (
                <a
                    className='flex items-center gap-4 bg-background px-5 rounded-full hover:bg-primary-gradient hover:text-white active:scale-90'
                    href='https://github.com/DalioSY'
                >
                    <FiGithub />
                    GitHub
                </a>
            )}
        </>
    )
}