import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className="[cursor:url('../assets/images/palm-tree.gif'),auto]">
			<Head />
			<body className="font-serif min-h-screen bg-[#F9E6B5] bg-[url('../assets/images/bg.png')] rendering-pixelated">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}