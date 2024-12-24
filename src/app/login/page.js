// src/app/login/page.js
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
	const handleLogin = async () => {
		await signIn("credentials", {
			email: "test@test.com",
			password: "password",
		});
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={handleLogin}>Login with Test Account</button>
		</div>
	);
}
