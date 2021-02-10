import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return(
		<>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />	
				<meta name="description" content="Your future starts here! Garden Route Innovation and Technology in the Western Cape Lab is here to incubate innovation and entrepreneurship in the digital economy" />
			</Head>
			<Component {...pageProps} />
		</>
	)		
}
