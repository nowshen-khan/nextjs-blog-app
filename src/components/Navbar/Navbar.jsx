"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/profile", label: "Profile" },
];

const Navbar = () => {
	const session = useSession();
	return (
		<nav className={styles.container}>
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
				<DarkModeToggle />
				{links.map((link) => (
					<Link key={link.href} href={link.href} className={styles.link}>
						{link.label}
					</Link>
				))}
				{session.status === "authenticated" && (
					<button className={styles.logout} onClick={signOut}>
						Logout
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
