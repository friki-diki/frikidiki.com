import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../assets/images/logo.webp'
import logoRotating from '../../assets/images/logo-rotating.gif'
import map from '../../assets/images/map.png'
import favicon from '../../assets/images/favicon.png'
import partyDancing from '../../assets/images/party-dancing.gif'
import { FC, useEffect, useRef } from 'react'

const PartyDancing: FC<{className?: string}> = ({className}) => {
	return <div className={`max-w-[38px] ${className ?? ''}`}>
		<Image src={partyDancing}/>
	</div>
}

const Home: NextPage = () => {
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			audioRef.current?.play()
		})
		document.addEventListener('click', () => {
			audioRef.current?.play()
		})
	}, [])

	return (
		<div className=''>
			<div className="text-center text-[#773F0A]">
				<Head>
					<title>Friki Diki</title>
					<meta name="description" content="Visit Friki Diki at Burning Man in 2022!" />
					<link rel="icon" href={favicon.src} />
				</Head>

				<audio ref={audioRef} src="/coral-buddies.mp3" autoPlay loop/>

				<div className="mt-32 bg-[#FFF8EC] [border-image:url('../assets/images/bamboo-border-fixed-smaller.png')_25_repeat] border-y-[20px] [border-image-outset:5px_!important]">
					<div className="max-w-4xl mx-auto p-4 flex justify-center items-center">
						<div className="w-16 flex-none mr-12"><Image src={logoRotating}/></div>
						<h1 className="text-6xl">Friki Diki Home Page</h1>
						<div className="w-16 flex-none ml-12"><Image src={logoRotating}/></div>
					</div>
				</div>

				<div className="max-w-4xl mx-auto mt-8 mb-32 p-4 bg-[#FFF8EC] [border-image:url('../assets/images/bamboo-border-fixed-smaller.png')_25_repeat] border-[20px] [border-image-outset:5px_!important]">
					<h2 className="text-5xl">Friki Diki is coming to the playa 2022!</h2>
					<h3 className="text-2xl mt-2">Come for tropical drinks and fun at 7:15 &amp; Dali!</h3>
					<div className="max-w-[420px] mx-auto mt-6">
						<Image src={map}/>
					</div>
					<hr className="mt-12 [border-image:url('../assets/images/bamboo-border-fixed-smaller.png')_25_repeat] border-t-[10px]"/>
					<hr className="mt-1 border-2 border-[#773F0A]"/>
					<h3 className="text-3xl my-3 flex justify-center items-center">
						<div className="flex-grow"><PartyDancing/></div>
						<div className="flex-grow"><PartyDancing/></div>
						<div className="flex-grow"><PartyDancing/></div>
						<div className="flex-grow"><PartyDancing/></div>
						<div className="px-2">!!Black light night on Wednesday!!</div>
						<div className="flex-grow"><PartyDancing/></div>
						<div className="flex-grow"><PartyDancing/></div>
						<div className="flex-grow"><PartyDancing/></div>
						<div className="flex-grow"><PartyDancing/></div>
					</h3>
					<hr className="border-2 border-[#773F0A]"/>
					<hr className="mt-1 [border-image:url('../assets/images/bamboo-border-fixed-smaller.png')_25_repeat] border-t-[10px]"/>
				</div>
			</div>
		</div>
	)
}

export default Home
