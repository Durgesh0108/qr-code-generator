"use client";

import { useState } from "react";
import { useQRCode } from "next-qrcode";

export default function QRCodeGenerator() {
	const [inputUrl, setInputUrl] = useState("");
	const [showQR, setShowQR] = useState(false);
	const { Canvas } = useQRCode();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setShowQR(true);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<h1 className="text-2xl mb-4">QR Code Generator</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center"
			>
				<input
					type="url"
					required
					placeholder="Enter URL (e.g. https://example.com)"
					value={inputUrl}
					onChange={(e) => {
						setInputUrl(e.target.value);
						setShowQR(false);
					}}
					className="border px-2 py-1 rounded w-64 mb-3"
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white py-1 px-4 rounded"
				>
					Generate QR Code
				</button>
			</form>

			{showQR && inputUrl && (
				<div className="mt-6">
					<Canvas
						text={inputUrl}
						options={{
							width: 200,
							margin: 2,
							color: {
								dark: "#1a1a1a",
								light: "#fff",
							},
						}}
					/>
				</div>
			)}
		</div>
	);
}
