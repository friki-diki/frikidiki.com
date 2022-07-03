import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../assets/images/logo.webp'
import favicon from '../../assets/images/favicon.png'

const Home: NextPage = () => {
	return (
		<div className=''>
			<div style={{textAlign: 'center', color: '#4d0c79'}}>
				<Head>
					<title>Friki Diki</title>
					<meta name="description" content="Visit Friki Diki at Burning Man in 2022!" />
					<link rel="icon" href={favicon.src} />
				</Head>

				<div style={{maxWidth: '512px', margin: 'auto'}}>
					<Image src={logo} alt="Friki Diki"/>
					<h1 style={{fontSize: '34px'}}>Visit Friki Diki on the playa 2022!</h1>
					<p style={{fontSize: '20px'}}>Find us in Golden Guy alley @ D & 7:15</p>
					<p style={{fontSize: '20px'}}>Tiki-themed drinks and fun!</p>
				</div>
			</div>
		</div>
	)
}

export default Home
