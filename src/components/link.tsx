import { FiGithub, FiLinkedin } from "react-icons/fi";

interface LinkProps {
    linkedin?: boolean;
    github?: boolean;
}

const links = [
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dalio-s-yamada/",
        icon: FiLinkedin,
    },
    {
        id: "github",
        label: "GitHub",
        href: "https://github.com/DalioSY",
        icon: FiGithub,
    },
] as const;

export function Link({ linkedin, github }: LinkProps) {
    const activeLinks = { linkedin, github };

    return (
        <>
            {links.map(({ id, label, href, icon: Icon }) =>
                activeLinks[id] ? (
                    <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-xl bg-background px-5 py-2 transition-all hover:bg-primary-gradient hover:text-white active:scale-90"
                    >
                        <Icon />
                        {label}
                    </a>
                ) : null
            )}
        </>
    );
}