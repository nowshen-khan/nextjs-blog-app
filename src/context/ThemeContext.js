"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState("dark"); // Default "dark"

	// ডিভাইস প্রিফারেন্স ডিটেক্ট করার জন্য useEffect
	useEffect(() => {
		const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

		// ডিভাইস প্রিফারেন্স অনুযায়ী থিম সেট করুন
		setMode(darkModeQuery.matches ? "dark" : "light");

		// প্রিফারেন্স পরিবর্তন হলে থিম আপডেট করার জন্য ইভেন্ট লিসেনার
		const handleChange = (e) => {
			setMode(e.matches ? "dark" : "light");
		};

		darkModeQuery.addEventListener("change", handleChange);

		// Cleanup function
		return () => darkModeQuery.removeEventListener("change", handleChange);
	}, []);

	const toggle = () => {
		setMode((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ toggle, mode }}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	);
};
