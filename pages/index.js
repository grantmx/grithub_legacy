import Head from 'next/head'
import Image from 'next/image';
import home from '../styles/home.module.scss';
import ribbon from '../styles/ribbon.module.scss'

export default function Home(){
	return(
		<>
			<Head>
				<title>Garden Route Innovation and Technology Hub</title>
			</Head>

			<main className="container-fluid d-flex p-0 flex-column">
				<div className={home.hero}>
					<nav className="navbar navbar-light w-100 container-xxl">
						<div className="container-fluid d-flex justify-content-between flex-nowrap">
							<a className="navbar-brand" href="#" title="home">
								<Image src="/assets/grithub-logo-horz-dark.svg" width={400} height={125} alt="GRITHub Logo" />
							</a>
							<div className={home.navbarNav}>
								<a className="nav-link fs-5 me-5 text-dark" href="#about">
									<Image src="/assets/people.svg" width={20} height={20} className="d-lg-none" alt="About US" />
									About
								</a>
								<a className="nav-link fs-5 me-5 text-dark" href="#incubator">
									<Image src="/assets/sun.svg" width={20} height={20} className="d-lg-none" alt="Business Incubation" />
									Incubation
								</a>
								<a className="nav-link fs-5 me-5 text-dark" href="#programs-workshops">
									<Image src="/assets/event_seat.svg" width={20} height={20} className="d-lg-none" alt="Events at GRITHub" />
									Programs
								</a>
								<a className="nav-link fs-5 me-5 text-dark" href="#coworking">
									<Image src="/assets/activity.svg" width={20} height={20} className="d-lg-none" alt="GRITHub Coworking" />
									Coworking
								</a>
								<a className="nav-link fs-5 me-5 text-dark" href="#contact">
									<Image src="/assets/mail_outline.svg" width={20} height={20} className="d-lg-none" alt="Find GRITHub" />
									Contact
								</a>
							</div>
						</div>
					</nav>

					<div className="col-md-7 col-8 ps-5 ">
						<p className={home.heroText}>Catalyzing innovation and entrepreneurship in the digital economy</p>
						<a href="#about" className={home.heroBtn} type="button" title="learn about the digital economy">Learn more</a>
					</div>
				</div>



				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-5 flex-column" id="about">
					<h1 className="fw-bold display-4 mb-4 text-center">Garden Route Innovation &amp; Technology Hub</h1>
					<div className="text-center col-xl-9 col-12">
						<p className="lead">We are a Non-Profit Company with a mission to be a catalyst providing training, programming and mentoring services in the Western Cape's Garden Route/Klien Karoo district business ecosystem.</p>
						<p className="lead">Our duty is to empower schools, community members and small businesses to participate in the local supply chain through collaborative growth between the academic community, business, society and government using modern technology, innovation and STEM.</p>
					</div>
				</section>


				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-0 mb-5 flex-column">
					<h2 className="fw-bold display-6 mt-5 mb-4 text-center w-100">What We Do</h2>

					<div className="col-12 d-flex flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/workshop-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="Workshops and Programs" />
								<div className="card-body">
									<h3 className="card-title">Programs &amp; Workshops</h3>
									<p className="card-text">Fueling a wholly inclusive economy empowering the Garden Route to meet the demands of the digital age. <a href="#programs-workshops">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/incubator-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="Entrepreneurship Incubation" />
								<div className="card-body">
									<h3 className="card-title">SME and Entrepreneurship Incubation</h3>
									<p className="card-text">Tailored workshops, networking, online learning and hands-on mentorship for accelerating business growth. <a href="#incubator">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/office-space-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="About our coworking spaces"/>
								<div className="card-body">
									<h3 className="card-title">Coworking Spaces</h3>
									<p className="card-text">Modern, sleek and creative spaces fostering collaboration and productivity taking your business higher. <a href="#coworking">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-4 justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold">We strive for wholistic change at every level of South Africa.</h3>
							<p className="lead">Our core values of Collaboration, Equality, Responsibility, Entrepreneurial Ethic, Innovation and a Giving Spirit bind us and guide us.</p>
						</div>

					</div>
				</section>


				<section className="container-fluid d-flex justify-content-center align-items-center py-5 flex-column bg-info" id="incubator">
					<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Small Business &amp; Entrepreneur Incubator</h2>
					<div className="text-center col-xl-9 col-12 mb-5">
						<p className="lead text-white ">Our Incubator is custom designed for the Small to Medium Enterprises to help them digitally grow their skills, refine or create a digital business model through Masterclasses, worships, events and direct coaching.</p>
					</div>

					<div className="col-12  d-flex justify-content-between flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/power.svg" width={150} height={150} className={home.cardTopOverflow} alt="SME Coaching" />
								<div className="card-body">
									<h3 className="card-title fw-bold">SME Digital Transformation &amp; Coaching</h3>
									<p className="card-text">The Small to Medium Enterprises in South Africa are the backbone of it's economy. SMEs have the ability to quickly adapt to new innovative tools and competencies to propel sector growth. Our goal is to coach and provide tools, information platforms to increase productivity and innovation.</p>
									<a href="/papers/eBook-SMB-of-the-Future-FINAL-2019-07-29.pdf" target="_blank" rel="noopener" title="whitepaper on digital transformation">White Paper: 7 Trends Driving SMEs’ Digital Transformation &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/worker.svg" width={150} height={150} className={home.cardTopOverflow} alt="Digital Skills"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">Digital Skills &amp; Apprenticeships</h3>
									<p className="card-text">Our Apprenticeships and Skills training will fill the immediate needs of employers in an ever increasing digital economy.  From CompTIA A+ and Mac Circuitry Certifications to various scripting Languages, Cloud Computing, Data Analytics and OS Certifications we will thoroughly equip the next digital workforce.</p>
									<a href="/papers/skills_boost_western_cape_-_summary_report.pdf" target="_blank" rel="noopener" title="whitepaper on digital skills jobs">White Paper: Western Cape Digital Skills Shared Agenda for Action &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/3d-printer.svg" width={150} height={150} className={home.cardTopOverflow} alt="FabLab Innovation"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">FabLab Innovation Centre</h3>
									<p className="card-text">Disruptive Technologies like "Additive Manufacturing" or 3D Printing paired with the sharp removal of it's price barrier allows young entrepreneurs to enter previously closed markets. Our <a href="https://fabfoundation.org/" target="_blank" rel="noopener">FabLab</a> will assist in product development, rapid tooling and prototyping as well as learning new business models.</p>
									<a href="/papers/1-s2.0-S0040162520313093-main.pdf" target="_blank" rel="noopener" title="whitepaper on 3d printing">White Paper: The Effect of 3D Printing Technologies on Entrepreneurship &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-3  justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold text-white">...And more bespoke programs to meet your industry needs</h3>
							<p className="lead text-white">Our programs, conferences and talks from world renown industry professionals will help drive you and your company to the next level.</p>
						</div>

					</div>
				</section>




				<section className="container-fluid d-flex justify-content-center align-items-center py-5 flex-column bg-light" id="programs-workshops">
					<h2 className="fw-bold display-5 mt-5 mb-0 text-center">Programs, Workshops &amp; STEM</h2>
					<div className="text-center col-md-9 col-12 p-md-5 p-3">
						<p className="lead">The Garden Route needs new tools and information to build and navigate the future.  Our Programs and Workshops are meant to get us ahead of the challenges and trends of an ever changing economic environment.</p>
					</div>

					<div className="col-12 d-flex justify-content-between flex-wrap">

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__green}`}><span>STEM</span></div>
								<Image src="/assets/atom.svg" width={150} height={150} className={home.cardTopOverflow} alt="STEM"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">Science, Technology, Engineering and Mathematics (STEM)</h3>
									<p className="card-text">We are a partner in science, technology and industrial learning to supplement the inadequate number of teachers skilled to educate in these areas.  We will promote STEM carriers, and teach short courses as well as create fun STEM based science events.</p>
									<a href="/papers/1-s2.0-S2468227619307616-main.pdf" target="_blank" rel="noopener" title="whitepaper on stem in africa">White Paper: Engineering education, development and growth in Africa &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__green}`}><span>STEM</span></div>
								<Image src="/assets/lego.svg" width={150} height={150} className={home.cardTopOverflow} alt="LEGO STEM"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">LEGO&reg; STEM Learning</h3>
									<p className="card-text">The LEGO&reg; Foundation released a report stating that STEM learning through play holistically enhances a learners social, emotional, physical and creative skills. Through <a href="https://education.lego.com/en-us/customer-stories" target="_blank">LEGO&reg; STEM</a> our goal is to eliminate the idea of "Hard" math and science through fun and curious play using LEGO&reg; STEM Toys in Grade R-12 schools.</p>
									<a href="/papers/le_learning_through_play_whitepaper_digital_pdf.pdf" target="_blank" rel="noopener" className="card-link" title="whitepaper on lego education">White Paper: LEGO&reg; Education - The unrealized potential of learning through play at school &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
							<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__purple}`}><span>Workshop</span></div>
							<Image src="/assets/programmer.svg" width={150} height={150} className={home.cardTopOverflow} alt="Hackathons"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">Code &amp; Enterprise Hackathons</h3>
									<p className="card-text">Hackathons help break through the barriers of a stale "business as usual" culture into creative disruption and intense innovation. Our 1-3 day Hackathon events will not only solve technical problems, and deliver new innovative software and hardware, but will accelerate organizational digitization strategies and customer processes.</p>
									<a href="/papers/Demystifying_the_hackathon.pdf" target="_blank" rel="noopener" title="whitepaper on hackathons">White Paper: Demystifying The Hackathon &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/healthcare.svg" width={150} height={150} className={home.cardTopOverflow} alt="Public Health"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">Public Health Technology</h3>
									<p className="card-text">Our aim is to significantly contribute to the digitization of health care in South Africa. We will produce tools, software and data analytics to improve and enhance awareness of access to public healthcare which will ultimately improve the health outcomes of the Garden Route community.</p>
									<a href="/papers/Materilie345_digital_health_africa.pdf" target="_blank" rel="noopener" title="whitepaper on digital health ecosystem">White Paper: Digital Health Ecosystem for African Countries &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/game-pad.svg" width={150} height={150} className={home.cardTopOverflow} alt="Roblox Proggrams"/>
								<div className="card-body">
									<h3 className="card-title fw-bold">Roblox&reg; Game Engineering</h3>
									<p className="card-text">Gamification is a powerful vehicle for learning. Our goal is to have introductory workshops and courses on development and design using the popular <a href="https://education.roblox.com/en-us/" target="_blank">Roblox&reg;</a> platform amongst others. We will use our Gaming Center to teach students of all ages computer science, digital citizenship, entrepreneurship, competition and fair play.</p>
									<a href="/papers/1-s2.0-S1071581920300987-main.pdf" target="_blank" title="whitepaper on gamification" rel="noopener">White Paper: The Effect of Challenge-Based Gamification on Learning &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/tractor.svg" width={150} height={150} className={home.cardTopOverflow} alt="Agricultural Technology"/>
								<div className="card-body">
									<h3 className="card-title">Agricultural Technology</h3>
									<p className="card-text">Agriculture 4.0 uses operational technology such as robots, Internet of Things (IoT) and GPS. This technology allows farms to be more profitable, efficient, safer, and more environmentally friendly. Through AgriTech we aim to innovate and assist in modernizing the Garden Route's farms, thereby broadening their supply chain and viability.</p>
									<a href="/papers/1-s2.0-S2211912419301804-main.pdf" target="_blank" rel="noopener" title="whitepaper on agricultural technology">White Paper: The Game-Changing Technologies of Agriculture 4.0 &rsaquo;</a>
								</div>
							</div>
						</div>

					</div>
				</section>

				<section className="container-fluid d-flex justify-content-between align-items-center pt-5 flex-column bg-secondary bg-gradient" id="coworking">
					<div className="col-12 d-flex align-items-center flex-column">
						<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Coworking Office &amp; Event Spaces</h2>
						<div className="col-md-9 col-12 mb-5">
							<p className="lead text-white text-center">Fully furnished and modern coworking and meeting spaces to inspire creativity, promote cluster collaboration.  Our spaces will meet all of your needs ensuring your and your business' productivity.</p>
						</div>

						<div className="col-12 d-flex flex-wrap">
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/wifi_tethering.svg" width={50} height={50} className={home.whiteIcon} alt="wifi"/>
								<p className="lead text-white pt-3">Fast ultra 1,000 Mbps Fiber. Audio, Video and Podcasting Equipment. Charging Stations.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/presentation.svg" width={50} height={50} className={home.whiteIcon} alt="conference rooms"/>
								<p className="lead text-white pt-3">Modern Conference Rooms, Meeting &amp; Board Rooms and Focus Rooms. Café area with open tables and booths for collaboration.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/build.svg" width={50} height={50} className={home.whiteIcon} alt="fablabs"/>
								<p className="lead text-white pt-3">FabLabs Network. 3D Printer. Laser Cutter. Vinyl cutter. 3D scanner. Thermoforming machine. CNC Milling Machine.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/airport_shuttle.svg" width={50} height={50} className={home.whiteIcon} alt="safe"/>
								<p className="lead text-white pt-3">Accessible to public transport. Safe metro area where all patrons will feel comfortable and inspire creativity.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/child_friendly.svg" width={50} height={50} className={home.whiteIcon} alt="daycare"/>
								<p className="lead text-white pt-3">Child Daycare &amp; Digital Playroom and youth services for business minded families who need support.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/laptop_mac.svg" width={50} height={50} className={home.whiteIcon} alt="mac repair"/>
								<p className="lead text-white pt-3">Free Apprenticeship procured PC &amp; Mac repair and IT service. Client just has to pay for parts.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/fingerprint.svg" width={50} height={50} className={home.whiteIcon} alt="secure"/>
								<p className="lead text-white pt-3">Security and controlled access. Cleaning and maintenance services. Contingency for electricity failure.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/local_cafe.svg" width={50} height={50} className={home.whiteIcon} alt="office facilities"/>
								<p className="lead text-white pt-3">Full Cafe and eatery. Copying, faxing, printing and scanning facilities. Reception &amp; Mail Services.</p>
							</div>
						</div>
					</div>
					<div className="col-12 d-flex justify-content-center">
						<Image src="/assets/4890818.png" width={1500} height={495} alt="office space"/>
					</div>
				</section>
			</main>


			<footer className="col-12 d-flex flex-wrap justify-content-center" id="contact">
					
				<div className="col-12 col-md-7 d-flex flex-wrap">

					<div className="col-md-6 col-12 d-flex p-4 flex-column justify-content-start">
						<Image src="/assets/grithub-logo-horz-dark.svg" width={300} height={100} alt="GRITHub Logo"/>
						<small className="mt-2 text-muted">Garden Route Innovation &amp; Technology Hub (GRITHub) is a Non-Profit company catalyzing innovation and technology in the digital economy.</small>
					</div>

					<div className="col-md-6 col-12 p-4 d-flex justify-content-center align-items-center flex-column">
						<h4 className="fw-bold">Find Us</h4>
						
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center">
							<Image src="/assets/whatsapp.svg" width={25} height={25} alt="whatsapp us"/>
							<small className="ms-2">+27 (063) 070 5752</small>
						</button>
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center">
							<Image src="/assets/phone.svg" width={25} height={25} alt="call us"/>
							<small className="ms-2">+27 (076) 282 2192</small>
						</button>
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center">
							<Image src="/assets/mail_outline.svg" width={25} height={25} alt="email us"/>
							<small className="ms-2">info@grithub.org.za</small>
						</button>
					</div>
				</div>

				<div className="col-md-3 col-12 p-4 d-flex justify-content-center flex-column align-item-center">
					<h4 className="fw-bold">Join Us</h4>
					<small className="mb-3 text-muted">Be the first to know when we launch and get specialized updates on programing.</small>
					<form className="form-floating w-100">
						<div className="form-floating">
							<input type="email" className="form-control" id="email" placeholder="name@example.com" />
							<label htmlFor="email">Your Email</label>
						</div>
					</form>
				</div>
				
				

				<div className="col-12 p-2 border-top mt-2 text-center">
					<small className="text-muted" style={{fontSize: "11px"}}>
						Attributions: &nbsp;
						<a className="text-muted" target="_blank" href='https://www.freepik.com/photos/city' rel="noreferrer" title="freepak wayhomestudio">Way Home Studio</a>, &nbsp;
						<a className="text-muted" href='https://www.freepik.com/vectors/abstract' rel="noreferrer" title="freepak starline">Starline</a>, &nbsp;
						<a className="text-muted" href='https://www.freepik.com/vectors/office' rel="noreferrer" title="freepak piki">Piki Super Star</a>, &nbsp;
						<a className="text-muted" href="https://www.freepik.com/photos" title="Freepik" rel="noreferrer" title="freepak photos">Freepik Photos</a>, &nbsp;
						<a className="text-muted" href="https://www.flaticon.com/" title="Flaticon" rel="noreferrer" title="freepik icons">Freepik Icons</a>
					</small>
				</div>
			</footer>
		</>
	)
}


