import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head />
			<body className="font-serif min-h-screen bg-[#F9E6B5] bg-[url('../assets/images/bg.png')] rendering-pixelated">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}