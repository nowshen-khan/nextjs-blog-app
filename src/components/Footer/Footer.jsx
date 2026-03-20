import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/profile", label: "Profile" },
];

const images = [
	{ src: "/1.png", alt: "Learnwish Facebook" },
	{ src: "/2.png", alt: "Learnwish instragram" },
	{ src: "/3.png", alt: "Learnwish X" },
	{ src: "/4.png", alt: "Learnwish Youtube" },
];

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<div>
					<p>©2024 Learnwish. All rights reserved.</p>
				</div>
				{/* <div className={styles.links}>
					{links.map(({ href, label }) => (
						<Link key={`${href}${label}`} href={href} rel="noopener noreferrer">
							{label}
						</Link>
					))}
				</div> */}
				<div className={styles.social}>
					{images.map(({ src, alt }) => (
						<Image
							key={src}
							src={src}
							width={15}
							height={15}
							className={styles.icon}
							alt={alt}
						/>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
