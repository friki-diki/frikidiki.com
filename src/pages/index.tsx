import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import logoRotating from '../../assets/images/logo-rotating.gif'
import map from '../../assets/images/map2023.png'
import favicon from '../../assets/images/favicon.png'
import alley from '../../assets/images/alley.jpg'
import partyDancing from '../../assets/images/party-dancing.gif'
import { FC, useEffect, useRef } from 'react'
import coconut from '../../assets/images/coconut.png'

const PartyDancing: FC<{className?: string}> = ({className}) => {
	return <div className={`max-w-[38px] ${className ?? ''}`}>
		<Image alt='' src={partyDancing}/>
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
					<meta name="description" content="Visit Friki Diki at Burning Man in 2023!" />
					<link rel="icon" href={favicon.src} />
				</Head>

				<audio ref={audioRef} src="/coral-buddies.mp3" autoPlay loop/>

				<div className="mt-32 bg-[#FFF8EC] [border-image:url('../assets/images/bamboo-border-fixed-smaller.png')_25_repeat] border-y-[20px] [border-image-outset:5px_!important]">
					<div className="max-w-4xl mx-auto p-4 flex justify-center items-center">
						<div className="w-16 flex-none mr-12"><Image alt='' src={logoRotating}/></div>
						<h1 className="text-6xl">Friki Diki Home Page</h1>
						<div className="w-16 flex-none ml-12"><Image alt='' src={logoRotating}/></div>
					</div>
				</div>

				<div className="relative max-w-4xl mx-auto mt-8 mb-32 p-4 bg-[#FFF8EC] [border-image:url('../assets/images/bamboo-border-fixed-smaller.png')_25_repeat] border-[20px] [border-image-outset:5px_!important]">
					
					<Image alt='' className="h-[40px] w-auto absolute left-[-53px] top-[-35px]" src={coconut}/>
					<Image alt='' className="h-[40px] w-auto absolute right-[-34px] top-[-35px]" src={coconut}/>
					<Image alt='' className="h-[40px] w-auto absolute left-[-53px] bottom-[-35px]" src={coconut}/>
					<Image alt='' className="h-[40px] w-auto absolute right-[-34px] bottom-[-35px]" src={coconut}/>
					
					<h2 className="text-5xl">Friki Diki is coming to the playa 2023!</h2>
					<h3 className="text-2xl mt-2">Come for tropical drinks and fun at 7:45 &amp; Dingbat!</h3>
					<div className="max-w-[420px] mx-auto mt-6 border-[#773F0A] border-4">
						<Image alt="Map to Friki Diki located in Golden Guy Alley at 7:45 & Dingbat" src={map}/>
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
					<div className="mt-12">
						<Image alt='' src={alley}/>
					</div>
					<div className="mt-12"></div>
					<a className="text-neutral-900 underline text-xl" href="https://www.facebook.com/groups/goldenguyalley/" target="_blank" rel="noreferrer">Golden Guy Facebook Page</a>
					<div className="mt-12"></div>
				</div>
			</div>
		</div>
	)
}

export default Home
