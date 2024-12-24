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

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<div>©2024 Learnwish. All rights reserved.</div>
				<div className={styles.social}>
					<Image
						src="/1.png"
						width={15}
						height={15}
						className={styles.icon}
						alt="Learnwish Facebook"
					/>
					<Image
						src="/2.png"
						width={15}
						height={15}
						className={styles.icon}
						alt="Learnwish instragram"
					/>
					<Image
						src="/3.png"
						width={15}
						height={15}
						className={styles.icon}
						alt="Learnwish X"
					/>
					<Image
						src="/4.png"
						width={15}
						height={15}
						className={styles.icon}
						alt="Learnwish Youtube"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
