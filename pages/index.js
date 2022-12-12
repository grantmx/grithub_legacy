import Style from 'styles/home.module.scss';

import Image from 'next/image';
import { Helmet } from 'react-helmet';
import { NextSeo } from 'next-seo';
import { StructuredJSON } from '../components/StructuredJSON';
import MainNav from '../components/navigation/MainNav';
import FooterNav from '../components/navigation/FooterNav';

import afriLabs from "public/assets/partners/cropped-AfriLabs-Logo_AfriLabs-Logo-Horizontal-1-1536x438.png" 
import georgeBusiness from 'public//assets/partners/georgebusinesschamberlogo.png'
import hero from "public/assets/hero.jpg" 
import clsx from 'clsx';
import ribbon from 'styles/ribbon.module.scss'
import home from 'styles/home.module.scss';

export default function Home(){
	return(
		<>
			<NextSeo 
				title="Garden Route Innovation and Technology Hub"
				description="Your future starts here! Garden Route Innovation and Technology in the Western Cape Lab is here to incubate innovation and entrepreneurship in the digital economy"
				canonical="https://grithub.org.za/"
			/>

			<main className="container-fluid d-flex p-0 flex-column">
				<section className={Style.heroWrapper}>
					<Image 
						className={Style.heroImg} 
						src={hero}
						alt="See your future ahead of you" 
					/>

					<div className={Style.hero}>
						<MainNav />

						<div className="col-9 col-md-7 ps-md-5 ps-3 ms-md-2 ms-xl-0 mt-md-5">
							<p className={Style.heroHashTag}>#GRITHub</p>
							<p className={Style.heroText}>Catalyzing innovation, entrepreneurship and the new workforce in the digital economy.</p>
							<a href="#about" className={"btn-outline-dark btn btn-lg"} type="button" title="learn about the digital economy">Learn more</a>
						</div>

						<div className={Style.heroPartners}>
							<small className="text-white w-100 mb-0">
								Our strategic partners and stakeholders
							</small>

							<div className="col-12 d-flex justify-content-start align-items-center">
								<div className="col-2 me-5">
									<a href="https://afrilabs.com" target="_blank" className="d-block" rel="noopener">
										<Image 
											src={afriLabs}
											alt="AfriLabs" 
											className={clsx(Style.partnerLogo, Style.whiteLogo)}
										/>
									</a>
								</div>
								<div className="col-2 me-5">
									<a href="https://georgechamber.co.za/" target="_blank" className="d-block" rel="noopener">
										<Image 
											src={georgeBusiness}
											alt="George Business Chamber." 
											className={Style.partnerLogo}
										/>
									</a>
								</div>
								<div className="col-2">
									<a href="https://sevengage.com" target="_blank" className="d-block" rel="noopener">
										<Image 
											src="/assets/partners/sevengage-logo.svg" 
											width={250} 
											height={75} 
											alt="Sevengage, Inc." 
											className={Style.partnerLogo}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>




				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-5 flex-column" id="about">
					<h1 className="fw-bold display-4 mb-4 text-center">Garden Route Innovation &amp; Technology Hub</h1>
					<div className="text-center col-xl-12 col-12">
						<p className="fs-2">Identifying untapped potential and refocusing it using the power of digital technology. </p>
						<p className='lead'>We provide workforce training, apprenticeships, tools, and mentorship opportunities to youth, small businesses and stakeholders in the Garden Route area...and all it takes is GRIT and determination. </p>
						{/* <p>Our duty is to empower community members and small businesses to actively participate in the local supply chain through collaborations with academia, business and government partners using modern technology and innovation.</p> */}
					</div>
				</section>


				
				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-0 mb-5 flex-column">
					<div className="col-12 d-flex flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/workshop-thumb.jpg" width={500} height={333} className={Style.cardTopImg} alt="Workshops and Programs" />
								<div className="card-body d-flex flex-column">
									<h3 className="card-title fs-4 fw-bold">Real Workforce Training</h3>
									<p className="card-text">Programing and Industry workshops using the latest real-world knowledge from industry experts. <a href="/programs" className="text-decoration-underline" title="more about programs">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/incubator-thumb.jpg" width={500} height={333} className={Style.cardTopImg} alt="Entrepreneurship Incubation" />
								<div className="card-body d-flex flex-column">
									<h3 className="card-title fs-4 fw-bold">Entrepreneurship Incubation</h3>
									<p className="card-text">Tailored workshops, networking, online learning and hands-on mentorship for accelerating business growth. <a href="#incubator" className="text-decoration-underline" title="more about incubation">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/office-space-thumb.jpg" width={500} height={333} className={Style.cardTopImg} alt="About our coworking spaces"/>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title fs-4 fw-bold">Coworking</h3>
									<p className="card-text">Modern, sleek and creative spaces fostering collaboration and productivity so that you can work without distraction. <a href="#coworking" className="text-decoration-underline" title="more about coworking">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-4 justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold">We strive for wholistic change at every level of the economy.</h3>
							<p className="lead">Our core values of: Collaboration, Equality, Responsibility, Entrepreneurial Ethic, Innovation and a Giving Spirit not only bind us, but guide us.</p>
						</div>

					</div>
				</section>



				<section className='bg-light py-2'>
					<h2 className="fw-bold display-5 mt-5 mb-0 text-center">
						Up Coming Workforce Training Courses
					</h2>

					<p className="lead text-center mt-2">
						<a href="/programs" target="_blank" rel="noopener" title="learn more about our programs">View All Workforce Trainings and Programs &rsaquo;</a>
					</p>

					<div className="col-12 d-flex justify-content-between flex-wrap mb-5">
						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100 align-items-center">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__purple}`}><span>Workforce</span></div>
								<Image src="/assets/html.png" width={150} height={150} className={home.cardTopOverflow} alt="html" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Websites for Beginners</h3>
									<p className="card-text"><strong>NO CODING EXPERIENCE REQUIRED.</strong> By the end of this course, you will be able to describe how the world wide web works and have a basic understanding of the internet. You would have designed and built your own multi-page website, select a hosting service, and publish your hand-made website for the world to see.</p>
									<p className="d-grid">
										<a href="http://grithub-za-1.hubspotpagebuilder.com/websites-for-beginners" target="_blank" className="btn btn-success btn-lg">
											Register Now &nbsp;&rsaquo;
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100 align-items-center">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__purple}`}><span>Workforce</span></div>
								<Image src="/assets/278-2783353_mobile-mobile-phone-icon-red-png.png" width={150} height={150} className={home.cardTopOverflow} alt="mobile"  />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Mobile Web (Beginner)</h3>
									<p className="card-text"><strong>NO CODING EXPERIENCE REQUIRED.</strong> Apply the concept of mobile friendliness to a website; learn ways to modify an existing website in to a mobile optimized one. You will also learn responsive design and designing for a mobile user.</p>
									<div className="alert alert-secondary text-center" role="alert">
										Registration Opens January 2032
									</div>
									{/* <p>
										<a href="" className="btn btn-primary btn-lg">
											Register
										</a>
									</p> */}
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100 align-items-center">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__purple}`}><span>Workforce</span></div>
								<Image src="/assets/js.png" width={150} height={150} className={home.cardTopOverflow} alt="javascript" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">JavaScript (Beginner)</h3>
									
									<p className="card-text">Learn the history of JavaScript; how to write proper functional JavaScript syntax and Object Oriented Programming concepts; You should be able to iterate data and show the results in the browser and have completed a JavaScript application.</p>
									<div className="alert alert-secondary text-center" role="alert">
									Registration Opens February 2032
									</div>

									{/* <p>
										<a href="" className="btn btn-primary btn-lg disabled">
											Register
										</a>
										
									</p> */}
								</div>
							</div>
						</div>
					</div>
				</section>






				<section className="container-fluid d-flex justify-content-center align-items-center py-5 flex-column bg-info" id="incubator">
					<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Small Business &amp; Entrepreneur Incubator</h2>
					<div className="text-center col-xl-9 col-12 mb-5">
						<p className="lead text-white ">
							Our Incubator is custom designed for Small to Medium Enterprises to help grow digital skills, refine or create an online business model through masterclasses, workshops, events and direct coaching. 
							<br />
							<br/>
							<a className="text-white border-bottom text-decoration-none" href="/whitepapers/BusinessIncubators-TheMissingLinktoSmallBusinessSurvival.pdf" target="_blank" rel="noopener" title="white paper on small business survival">White Paper: Business Incubators: The Missing Link to Small Business Survival &rsaquo;</a>
						</p>
					</div>

					<div className="col-12  d-flex justify-content-between flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100 align-items-center">
								<Image src="/assets/power.svg" width={150} height={150} className={Style.cardTopOverflow} alt="SME Coaching" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">SME Digital Transformation &amp; Coaching</h3>
									<p className="card-text">The Small to Medium Enterprises in South Africa are the backbone of its economy. SMEs have the ability to quickly adapt to new innovative tools and competencies to propel sector growth. Our goal is to coach and provide tools and information platforms to increase productivity and innovation.</p>
									<a className="text-decoration-underline" href="/whitepapers/eBook-SMB-of-the-Future-FINAL-2019-07-29.pdf" target="_blank" rel="noopener" title="whitepaper on digital transformation">White Paper: 7 Trends Driving SMEs’ Digital Transformation &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100 align-items-center">
								<Image src="/assets/worker.svg" width={150} height={150} className={Style.cardTopOverflow} alt="Digital Skills"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Digital Skills &amp; Apprenticeships</h3>
									<p className="card-text">Our Apprenticeships and Skills training will fill the immediate needs of employers in an ever increasing digital economy.  From CompTIA A+ and Mac Circuitry Certifications, to various scripting Languages, Cloud Computing, Data Analytics and OS Certifications we will thoroughly equip the next digital workforce.</p>
									<a className="text-decoration-underline" href="/whitepapers/skills_boost_western_cape_-_summary_report.pdf" target="_blank" rel="noopener" title="whitepaper on digital skills jobs">White Paper: Western Cape Digital Skills Shared Agenda for Action &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100 align-items-center">
								<Image src="/assets/3d-printer.svg" width={150} height={150} className={Style.cardTopOverflow} alt="FabLab Innovation"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">FabLab Innovation Centre</h3>
									<p className="card-text">Disruptive Technologies like "Additive Manufacturing" or 3D Printing, paired with the sharp removal of its price barrier, allows young entrepreneurs to enter previously closed markets. Our <a className="text-decoration-underline" href="https://fabfoundation.org/" target="_blank" rel="noopener">Digital Fabrication Lab (FabLab)</a> will assist in product development, rapid tooling and prototyping as well as learning new business models.</p>
									<a className="text-decoration-underline" href="/whitepapers/1-s2.0-S0040162520313093-main.pdf" target="_blank" rel="noopener" title="whitepaper on 3d printing">White Paper: The Effect of 3D Printing Technologies on Entrepreneurship &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-3  justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold text-white">...And more bespoke programs to meet your industry needs</h3>
							<p className="lead text-white">Our programs, conferences and talks from world renown industry professionals will help drive you and your company to the next level.</p>
						</div>

					</div>
				</section>




				
				<section className="container-fluid d-flex justify-content-between align-items-center p-5 flex-column bg-secondary bg-gradient" id="coworking">
					<div className="col-12 d-flex align-items-center flex-column">
						<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Coworking Office &amp; Event Spaces</h2>
						<div className="col-md-9 col-12 mb-5">
							<p className="lead text-white text-center">Fully furnished and modern coworking and meeting spaces to inspire creativity and promote cluster collaboration.  Our spaces will provide a productive and secure work environment giving you the opportunity to network with like minded people. </p>
							<p className="lead text-white text-center">
								<a className="text-white border-bottom text-decoration-none" href="/whitepapers/Harnessing_the_Potential_of_Coworking.pdf" target="_blank" rel="noopener" title="white the power of coworking">White Paper: Harnessing the Power of Coworking &rsaquo;</a>
								&nbsp; &nbsp; &nbsp; 
								<a className="text-white border-bottom text-decoration-none" href="/whitepapers/The-Future-of-Coworking-White-Paper-OpenWork-Agency-May-29-2020.pdf" target="_blank" rel="noopener" title="white paper on coworking future">White Paper: COVID-19 and The Future of Coworking &rsaquo;</a>
							</p>
						</div>

						<div className="col-12 d-flex flex-wrap">
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column align-items-center">
								<Image src="/assets/wifi_tethering.svg" width={50} height={50} className={Style.whiteIcon} alt="wifi"/>
								<p className="lead text-white pt-3 text-center">Fast Fiber. Audio, Video and Podcasting Equipment. Charging Stations.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column align-items-center">
								<Image src="/assets/presentation.svg" width={50} height={50} className={Style.whiteIcon} alt="conference rooms"/>
								<p className="lead text-white pt-3 text-center">Modern Conference Room, Meeting &amp; Board Room and Focus Room.</p>
							</div>
							{/* <div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/build.svg" width={50} height={50} className={Style.whiteIcon} alt="fablabs"/>
								<p className="lead text-white pt-3">FabLabs Network. 3D Printer. Laser Cutter. Vinyl cutter. 3D scanner. Thermoforming machine. CNC Milling Machine.</p>
							</div> */}
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column align-items-center">
								<Image src="/assets/airport_shuttle.svg" width={50} height={50} className={Style.whiteIcon} alt="safe"/>
								<p className="lead text-white pt-3 text-center">Accessible to public transport. Safe metro area where all patrons will feel comfortable and inspire creativity.</p>
							</div>
							{/* <div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/child_friendly.svg" width={50} height={50} className={Style.whiteIcon} alt="daycare"/>
								<p className="lead text-white pt-3">Child Daycare &amp; Digital Playroom and youth services for business minded families who need support.</p>
							</div> */}
							{/* <div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/laptop_mac.svg" width={50} height={50} className={Style.whiteIcon} alt="mac repair"/>
								<p className="lead text-white pt-3">Free Apprenticeship procured PC &amp; Mac repair and IT service. Client just has to pay for parts.</p>
							</div> */}
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column align-items-center">
								<Image src="/assets/fingerprint.svg" width={50} height={50} className={Style.whiteIcon} alt="secure"/>
								<p className="lead text-white pt-3 text-center">Security and controlled access. Cleaning and maintenance services. Contingency for electricity failure.</p>
							</div>
							{/* <div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/local_cafe.svg" width={50} height={50} className={Style.whiteIcon} alt="office facilities"/>
								<p className="lead text-white pt-3">Copying, printing and scanning facilities. Reception &amp; Mail Services.</p>
							</div> */}
						</div>
					</div>
				</section>
			</main>

			<FooterNav />


			<Helmet>
				<script type="application/ld+json">
					{StructuredJSON()}
				</script>
			</Helmet>
		</>
	)
}

