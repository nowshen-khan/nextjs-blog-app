import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
	return (
		<div className="container py-5">
			<div className="row align-items-center">
				<div className="col-md-6 text-center text-md-start">
					<h1 className={styles.title}>Welcome to LearnWish</h1>
					<p className={styles.description}>
						Embark on a journey of continuous learning with LearnWishBD. Whether
						you are a student, professional, or someone with a curious mind, our
						blog is here to support and accompany you on your educational
						voyage. Let&#39;s learn together.
					</p>
					<Button url="/Login" text="Login" />
				</div>
				<div className="col-md-6 text-center">
					<Image
						src="/hero-banner.svg"
						alt="LearnWish"
						className="img-fluid"
						width={500}
						height={500}
						layout="responsive"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
}
