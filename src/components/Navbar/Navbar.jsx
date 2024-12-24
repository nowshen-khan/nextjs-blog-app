"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/profile", label: "Profile" },
];

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div>
				<Link href={"/"} className={styles.logo}>
					<Image
						src="/logo.png"
						alt="LearnWish"
						layout="intrinsic"
						width={150}
						height={259}
					/>
				</Link>
			</div>
			<div className={styles.links}>
				{links.map((link) => (
					<Link key={link.href} href={link.href} className={styles.link}>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
