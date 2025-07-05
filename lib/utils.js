import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function imageToBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => {
			const result = reader.result;
			if (typeof result === "string") {
				resolve(result);
			} else {
				reject(new Error("Failed to convert image to Base64 string."));
			}
		};

		reader.onerror = (error) => {
			reject(error);
		};

		reader.readAsDataURL(file); // 🔥 This converts to base64
	});
}
