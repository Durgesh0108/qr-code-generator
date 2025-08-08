"use client";

import { useState } from "react";
import { useQRCode } from "next-qrcode";

export default function QRCodeGenerator() {
	const [showQR, setShowQR] = useState(false);

	// Contact form state for all fields
	const [prefix, setPrefix] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [organization, setOrganization] = useState("");
	const [title, setTitle] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [mobilePhone, setMobilePhone] = useState("");
	const [fax, setFax] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [region, setRegion] = useState("");
	const [postcode, setPostcode] = useState("");
	const [country, setCountry] = useState("");
	const [website, setWebsite] = useState("");

	// This holds the generated QR code text (vCard string)
	const [qrText, setQrText] = useState("");

	const { Canvas } = useQRCode();

	const handleContactSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Build vCard 3.0 format string with all fields
		const vCard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;${prefix};
FN:${prefix} ${firstName} ${lastName}
ORG:${organization}
TITLE:${title}
EMAIL;TYPE=INTERNET:${email}
TEL;TYPE=WORK,VOICE:${phone}
TEL;TYPE=CELL,VOICE:${mobilePhone}
TEL;TYPE=FAX,VOICE:${fax}
ADR;TYPE=WORK:;;${street};${city};${region};${postcode};${country}
URL:${website}
END:VCARD`;

		setQrText(vCard);
		setShowQR(true);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
			<h1 className="text-2xl mb-4">Contact Save QR Code Generator</h1>

			<form
				onSubmit={handleContactSubmit}
				className="flex flex-col items-center space-y-3 w-full max-w-md"
			>
				<input
					type="text"
					placeholder="Prefix (e.g. Mr., Mrs., Dr.)"
					value={prefix}
					onChange={(e) => setPrefix(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					required
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					required
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="Organization"
					value={organization}
					onChange={(e) => setOrganization(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="email"
					required
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="tel"
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="tel"
					placeholder="Mobile Phone"
					value={mobilePhone}
					onChange={(e) => setMobilePhone(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="tel"
					placeholder="Fax"
					value={fax}
					onChange={(e) => setFax(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="Street"
					value={street}
					onChange={(e) => setStreet(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="City"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="Region"
					value={region}
					onChange={(e) => setRegion(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="Postcode"
					value={postcode}
					onChange={(e) => setPostcode(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="text"
					placeholder="Country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<input
					type="url"
					placeholder="Website / URL / Social"
					value={website}
					onChange={(e) => setWebsite(e.target.value)}
					className="border px-2 py-1 rounded w-full"
				/>

				<button
					type="submit"
					className="bg-green-600 text-white py-2 px-6 rounded mt-4"
				>
					Generate Contact QR Code
				</button>
			</form>

			{/* QR Code Display */}
			{showQR && qrText && (
				<div className="mt-6">
					<Canvas
						text={qrText}
						options={{
							width: 250,
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
