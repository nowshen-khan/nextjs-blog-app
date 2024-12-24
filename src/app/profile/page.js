// src/app/profile/page.js
"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
	const { data: session } = useSession();

	if (!session) return <div>Loading...</div>;

	return (
		<div>
			<h1>Welcome, {session.user.name}</h1>
			<p>Email: {session.user.email}</p>
			<button onClick={() => signOut()}>Logout</button>
		</div>
	);
}
