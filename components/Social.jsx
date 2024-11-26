import Link from 'next/link';

import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiCode } from 'react-icons/fi';

const socials = [
    { icon: <FiGithub />, href: 'https://github.com/whizkidefos' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/efosaigbinehi/' },
    { icon: <FiTwitter />, href: 'https://x.com/whizkidefos' },
    { icon: <FiFacebook />, href: 'https://www.facebook.com/whizkidefos' },
    { icon: <FiCode />, href: 'https://www.codecademy.com/profiles/whizkidefos' },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link key={index} href={social.href} className={iconStyles} target="_blank">
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}

export default Social;