import Link from "next/link";

const Button = ({ text, url }) => {
	return (
		<Link href={url}>
			<button className="btn btn-success mb-5">{text}</button>
		</Link>
	);
};

export default Button;
