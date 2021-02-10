import Head from 'next/head'
import Image from 'next/image';
import { Helmet } from 'react-helmet';
import { StructuredJSON } from '../components/StructuredJSON';
import home from '../styles/home.module.scss';
import ribbon from '../styles/ribbon.module.scss'

export default function Home(){
	return(
		<>
			<Head>
				<title>Garden Route Innovation and Technology Hub</title>
			</Head>

			<main className="container-fluid d-flex p-0 flex-column">
				<section className={home.heroWrapper}>
					<Image 
						className={home.heroImg} 
						objectFit="cover" 
						src="/assets/hero.jpg" 
						layout="fill" 
						alt="See your future ahead of you" 
					/>

					<div className={home.hero}>
						<nav className="navbar navbar-light w-100 container-fluid px-5">
							<div className="col-12 d-flex justify-content-between flex-nowrap">
								<a className="navbar-brand" href="#" title="home">
									<Image src="/assets/grithub-logo-horz-dark.svg" width={400} height={125} alt="GRITHub Logo" />
								</a>
								<div className={home.navbarNav}>
									<a className="nav-link fs-5 me-3 text-dark" href="#about">
										<Image src="/assets/people.svg" width={20} height={20} className="d-lg-none" alt="About US" />
										About
									</a>
									<a className="nav-link fs-5 me-3 text-dark" href="#incubator">
										<Image src="/assets/sun.svg" width={20} height={20} className="d-lg-none" alt="Business Incubation" />
										Incubation
									</a>
									<a className="nav-link fs-5 me-3 text-dark" href="#programs-workshops">
										<Image src="/assets/event_seat.svg" width={20} height={20} className="d-lg-none" alt="Events at GRITHub" />
										Programs
									</a>
									<a className="nav-link fs-5 me-3 text-dark" href="#coworking">
										<Image src="/assets/activity.svg" width={20} height={20} className="d-lg-none" alt="GRITHub Coworking" />
										Coworking
									</a>
									<a className="nav-link fs-5 text-dark" href="#contact">
										<Image src="/assets/mail_outline.svg" width={20} height={20} className="d-lg-none" alt="Find GRITHub" />
										Contact
									</a>
								</div>
							</div>
						</nav>

						<div className="col-9 col-md-7 ps-md-5 ps-3 ms-md-2 ms-xl-0 mt-md-5">
							<p className={home.heroHashTag}>#GRITHub</p>
							<p className={home.heroText}>Catalyzing innovation and entrepreneurship in the digital economy.</p>
							<a href="#about" className={home.heroBtn} type="button" title="learn about the digital economy">Learn more</a>
						</div>

						<div className={home.heroPartners}>
							<p className="lead text-white w-100 mb-0">In strategic partnership with:</p>

							<div className="col-12 d-flex justify-content-start align-items-center">
								<div className="col-2 me-5">
									<a href="https://sevengage.com" target="_blank" className="d-block" rel="noopener">
										<Image src="/assets/partners/sevengage-logo.svg" width={250} height={75} alt="Sevengage, Inc." />
									</a>
								</div>
								<div className="col-2">
									<a href="https://suff.org.za" target="_blank" className="d-block" rel="noopener">
										<Image src="/assets/partners/suff-logo.png" width={200} height={60} alt="SUFF" />
									</a>
								</div>
								<div className="col-2">
									<a href="https://ycafes.co.za" target="_blank" className="d-block" rel="noopener">
										<svg width="175" height="60" viewBox="0 0 424 158">
											<image width="424" height="158" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAACeCAYAAABn5p7EAAACcUlEQVR4nO3VMQHAIBDAwKfKAP+eio0MdxYyZJ19/wGAmE8QAIoMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAJIMCoAkgwIgyaAASDIoAHpm5gEjHwL+9V/PhgAAAABJRU5ErkJggg=="/>
											<image id="Vector_Smart_Object_copy" data-name="Vector Smart Object copy" x="6" y="4" width="150" height="150" xlinkHref="data:img/png;base64,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"/>
											<image id="CAFE" x="183" y="19" width="217" height="120" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAB4CAYAAAB//lc9AAAOFElEQVR4nO2d7W3juhKGFSsNeEtI/h4D18jqVuCUkJTgLSEpIS4hLiEpIVvBcQxdQOdvXMK6AiMXzBkF8miGHxKpD2oeIMBuIkuyzVczfEkOE1tOp9P6dDp9Vn6eqZeeTqcHdNwDccz8dDp9oOPKH/K8TYFrvTPXemly2tPpdAPv84k57ye8vwfq/Xt4T9w1V57Of6W5xhU6dqU5NuTPG3PvuP196o4P8fl8fn4m1Z+Z5UlvkiTBjf/AHH6F/v+ED0jT9JgkyS/m9UrMa5v7skRd/4Y4VHcPNUCs6gv8kyTJO5xXJ6ArOKYU4rvn9yWMBCuRJUlCPSF/M8fiBk2KMU1T9fpX5hyqYc7bfoTwZOca9gbEbnMeJZY/IJqm9/X1oIIId9fwHMIIsRUZjk5KJHv8OxAGFlntuAqPzO/nGnG4wEWaQ5qmG9N5IBX6MEQsV9Rn+aLSFx8PEmH42IrMVjg1MepElqbpQSO0B5z/uwDRguujGNNE6Eu9Me/JB+re3iEVFyLGKDLH6EQ1aq7vVrJljpm3jCC1vmB5PUhVWUBg3OtLygfEbZqmF/gH/maKlkrAb2MWmvosqffP/ajPiznVweU8aZpy5xkcNpGMepJzwqHSH22Dhn4R1xjXTRogiIS6b921yteuDQLbg7CuVcrJCRb+9lgRHNf/m0P6GCpiCj1jIzIqOtlGsqONuZCm6VYjRlNEOQMiLxcBN5Cicq+lXNQqSjQ/TZEQA/2/a817/OqnuZxTGA82IqOiEycyHHVcGiPXN1s5unFr5p5tzA6dwH7ZmCUc6mEDKQ7ryoYYUxP6p0kk21PRiUnrdM7iGeBWco3YKppBysUdy4m4fO2aGU9LIIJtbe7BgnvN5/IgjmN82IjMatyLaaAm0wOzYfouV5YDuVwkUJ1zbkzO9Np9mwiGMQzE+xq6EAbEt8i46SjErd4xx1Gp1ovLtClogFzE0Q5QQyTlGqjWsod0lDMetBGwCRC1ucgoKWNkfIkMGq+TwdACbXSDtIxKp0xPee7+tWYHwPX5fruaHA5wIpvLjJC4KCOZl4mlltg0Wl00q0UczcCzjWU/17z/UAIro5mtgSSMmFnHX+qGmo6Fgejhkk6xZofFEMKNZj6iL7ODgxNxlw89ITBfIisHTYlZC1gQ5Kh8kiQ/idukzunSv+FMkHV1SQcYIuR0LktHkHvAWI3xtYSNZOIyxoPJXWwzZ9HVWTwD+lFcqvfA/LuK7TIWzvCwHn5oge4aMgMkEi65t+E47tVqjIxDWedMpFpB32zFNMatTVoKcBGj1UPCBvUgOZ1O3JFXHQl9KqwYtzw4ukjmMu6FG/rRwtGzhZ2lz7iNumEACk5koVNFE5IuRoJOZC7LVmqzQnx9PDCITBkEd8yDwHoxpoG+RSZEgkskI6MTdNDxU9d3mkP1r5rOTxSETnERmc81ZE4YFndWsa7ZUYGLWH0bDxJJI4EUGZgKttHJaTV0C7jFnSWvDWdn9CYywxqy4MbLxHBaXGpYeHrt8tHNqDmLSZJ8EMdycxupgWCqBFurOXmGxZ1JizmGtmZOCHSTAERkkTDrMC3yMR+PbXgt3Ew2QncwIMyJjFxOVKFPAUoa60iXIhsqe03DCb3spOmcydApLvtw6WAWTHTYVqvywSDTH2g0nc8hhMF+NpIZXh46xe1zFkx0zDQFRn0z5D4G9xmsfJW+JuCi5NFigamL09sETvzST2zATE2iJdwTnBKQzgwspcf8YlwZ74sffQGNmmtAIWrZX+kqG1ucQlcnxEc04+4t2NKfmKmliwO177uAa9yrAAVuuMpUR5vlNTAvM8hDAeaKcn2yrrKeqKD6ZC5zFmvHOkzMHRSaFdkJLBb1YoLA7iJcOuYyJYwT47ppimsoRLQV06MZlMgGMWexJ3QzRp7bRDTYFeZN029yLdiz1biML65FYWG44kUTxWS6WkOsIplmc4nQcxY7Bd6nTmhPsFGEU6SAKPihEdiB6d+yGIoOzaH8t9XYJLyfd0OEFdOjIdR6MtvoFHzOYh+otNFQWGgF/bQ99FH21HSuStQzFShSYrlv0ojhXlfMQH9Z/ru8z1d8DbjHlcGV3A/ZtBoDZyJzjE4xmR5nwGLRxCCQ73EuzcJLEwcQWOPPLU3Te0MaWt7nU4P7dI6wQh2cLrpEpyCroYcC9I9uA0ZnFV1++jCKoPy3b+ev3FhD0sSWYJG5RKfaUpjY3CfYFujac6e/jF73Pj8vdb6GS30oyo01RGAewCKrLdTUiAynldF+IdAn+dGymvAeBuqvLWZ0NAKGIdrcp3r9tSx89Qs2PqoiO0Cj4J62j6g0d9Tz2ipLbTZgj68MGxUeKmNZnY0xofssy49zpRq+71GEFY6Lz89eCvgIwmTocha+IEwSEZkgBEZEJgiBEZEJQmBEZIIQGBGZIARGRCYIgRGRCUJgRGSCEBgRmSAERkQmCIERkQlCYERkghAYEZkgBEZEJgiBEZEJQmAuQp0+L7K7Ss2QtWHHkX2lEMx+udhJzXVhFNgsevYqsrzIbOr42fIKghvNsvi8yG6gSGiVzXKxG2TdwrzIhrYs/rHt9z3E90QVN3UiL7IVRCofO2lWUee7y4vsCeqJbJeL3dCrYVGfwbplAR5h5DTuk6mndl5kqqjmWwCBYZTQ/kCkHCR5kc2ZLYfmeZGF3rFTGDCNIlleZM+WW72WT/DDcrFjy6BBNCyrKT1oNj14ggb7a4D9tjvNfd/ZbIk0ANTnOob7dCHoe7LpkzmJDPocLxoToyxH9rpc7KzrMIJgStFs4Dorpky2uvZbXmRD6+vgh86xIrqVek/LxU62g50g1iIDt5DbvG4PHXwvRTuhMe5BcGuIbljYDyDG+777anAf1bqG5WZ+1fT2TvZcniZWfTLoC1ECO0I4/ulLYBgV6peL3TVTgvpry5+8yHxtSN4UHMV+E4JaQ79NmBhGkYHAqLRNNaTrrnJ4uM4PYt/ig0tq6hsQDjZ+XuGhU42w1HHCBNCKDFI1SmAqNbztOk1T11PXrRgqR4+bLDQFGx7HSlTHDyAR2QRh+2TQz3gm/tR6wLAtcP2hDFLjVLEqrFfULxMDZIKQkQxSIKoP1rvAhgRheCRVkYGYcHor0WxicOniE+HmbUVgNWqGB9E/xIaQGCAToyayyjSpKspc6LvvMyg4w4O4RzFAJg4VySijQ/YNrlMzPCiRgTmEfy8imxBnIgM3EfcxNtJRJ6kZHhq3FbuMK+jPCRMARzJqapD0wxCM4cEOxldmsFSRaDYRvkWGJumWbEawvKQP8MNobxHtxQCZKNVIRj1ZY5uR3RoHwwOzFQNkmnyJjGk4Y1gk2QeU4WF8GIkBMl3KSLYi1kJJnQ0anCq+OjyMsMjEAJkAVZFVOYaaVT9mmH6r9ecE6+bwYLWsmo6cUmQ4bZEoRoM/p0ODFdq1ScNigMTNDL5g/CXLuBiC67c2OBV+jRggkTNjyrdJJKuzJh5GziJjDBBJGSNmRtXrkBkeJNTCzKbuKxbnjRgg8UKJrLdVxkOFMTwajyGKATItRGR2+DA8MGKATAQRmQGPhgcG98vEAIkUaqmLzPI4hzI8Wo8hwuJOMUAmwCXRgERk51CGh69o/4rOfyM1QLzzDBWvg/C/f/5bPe31f/76u9Y2KJEJQNsZHibUrJq8yI7oO1j3WIEraIMkuO6znF9XyCaAenAUCzHdTAyQyLlENdsFgDE8QixgxeW8y+vKMiM/DGLDCSwyEdy/BDE8MCpdyovsN5p5s+5JZDHu6tI7VLooIvuX2qTpgP0HLF6ZARIRM2JcrO/NG3ontOFBgMvGJWLnx4OIjIYyPIKlUTAHUgyQSBGRIZhtabvop1AzQCSaRQAlsmTi/QGqYQdfJS5l4+KFFBmzxmwqUPXtu5qBQS2BmfJ3EQWXqgERsw4mGcmgQeN0WRW7MQ+GhONOFtGOm9LCx1/iVJ+eQ0zPxAAZOaXIcDo0n1qawhgeQ0AMkJFT7rS5JXZzmVqaQjXkH30UeM2L7AVF1TvZk2C8fEUyaEhYUFOr1e6yS0toxACJiOq0KsqmnkSawhgevRV3ZWqAiJ0/UrDI8JP7YSLRLEQNj7bIDJBI+BYZpEY475+jZRjR0eMMDxNUEVQxQEYInoWPt/dJIJrFPG5GNdzeRSa7wMTDmciYaKbockl61wzJ8MCIARIBtfVky8VuQ3S61ZdLbdg+aoZmeGDEAIkDrsbHPfE7lTbG1j8bouGBEQNk5JAigwmxj8SfnvIiG0TnOy8y1dg+8yL7yIvMeXnOgA0PjBggI4etVgVpI5U6Pfcd0eD6L/BfJbC3BubMIA0PjOwCM360JeGWi909M7VKRbSXrtMWdT2YcoT7h8cG5cWHbHhgsPivxAAZDzZ1Fzmhqf7Mu0rbuni3cJ13oh+lUttbF4EM3fDAiAEybowiU413udjdMo1QNVQV0d5CPVnVedX5IT2sCWO52P1sEIFwFBui4YHB0Wxqc0tHi3UFYUgdKTMkgfVnSmjvvvpr6jzqfOq8zPq2R7gn1/OG2qUlNNQ9St9sBFy63KIyQ/Ii28PgNOXo3VTG1PaV6KfdpAFSwfJ8a0MxnwMU4WwaeUZheGBUtM6LDG9QsZYlMMPnoukdQsTqeoD6EVzPxijLH4lYGR59bfDgBKTkb+g1t00fOERZhdFXEO65VATFY+MNJ1RjXy52F5BChnTljiCuCw8CG5XhgREDZJy03tUFxPYDXEifqYsS7706d1txVcD9xe0IDA8MjrrrJoPxQnc0Thd1wJdePmFvLJ62m0o0HPJ4lSCcYdzVJUmS/wOTdlHetbjt3AAAAABJRU5ErkJggg=="/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-5 flex-column" id="about">
					<h1 className="fw-bold display-4 mb-4 text-center">Garden Route Innovation &amp; Technology Hub</h1>
					<div className="text-center col-xl-9 col-12">
						<p className="lead">We are a Non-Profit Company with a mission to be a catalyst for providing training, programming and mentoring services in the Western Cape's Garden Route/Klien Karoo district business ecosystem.</p>
						<p className="lead">Our duty is to empower community members and small businesses to actively participate in the local supply chain through collaborations with academia, business and government partners using modern technology and innovation.</p>
					</div>
				</section>


				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-0 mb-5 flex-column">
					<h2 className="fw-bold display-6 mt-5 mb-4 text-center w-100">What We Do</h2>

					<div className="col-12 d-flex flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/workshop-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="Workshops and Programs" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Programs &amp; Workshops</h3>
									<p className="card-text">Fueling a wholly inclusive economy empowering the Garden Route to meet the demands of the digital age. <a href="#programs-workshops">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/incubator-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="Entrepreneurship Incubation" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">SME and Entrepreneurship Incubation</h3>
									<p className="card-text">Tailored workshops, networking, online learning and hands-on mentorship for accelerating business growth. <a href="#incubator">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/office-space-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="About our coworking spaces"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Coworking Spaces</h3>
									<p className="card-text">Modern, sleek and creative spaces fostering collaboration and productivity so that you can work without distraction. <a href="#coworking">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-4 justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold">We strive for wholistic change at every level of the economy.</h3>
							<p className="lead">Our core values of: Collaboration, Equality, Responsibility, Entrepreneurial Ethic, Innovation and a Giving Spirit not only bind us, but guide us.</p>
						</div>

					</div>
				</section>


				<section className="container-fluid d-flex justify-content-center align-items-center py-5 flex-column bg-info" id="incubator">
					<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Small Business &amp; Entrepreneur Incubator</h2>
					<div className="text-center col-xl-9 col-12 mb-5">
						<p className="lead text-white ">Our Incubator is custom designed for Small to Medium Enterprises to help grow digital skills, refine or create an online business model through masterclasses, workshops, events and direct coaching.</p>
					</div>

					<div className="col-12  d-flex justify-content-between flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/power.svg" width={150} height={150} className={home.cardTopOverflow} alt="SME Coaching" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">SME Digital Transformation &amp; Coaching</h3>
									<p className="card-text">The Small to Medium Enterprises in South Africa are the backbone of its economy. SMEs have the ability to quickly adapt to new innovative tools and competencies to propel sector growth. Our goal is to coach and provide tools and information platforms to increase productivity and innovation.</p>
									<a href="/papers/eBook-SMB-of-the-Future-FINAL-2019-07-29.pdf" target="_blank" rel="noopener" title="whitepaper on digital transformation">White Paper: 7 Trends Driving SMEs’ Digital Transformation &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/worker.svg" width={150} height={150} className={home.cardTopOverflow} alt="Digital Skills"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Digital Skills &amp; Apprenticeships</h3>
									<p className="card-text">Our Apprenticeships and Skills training will fill the immediate needs of employers in an ever increasing digital economy.  From CompTIA A+ and Mac Circuitry Certifications, to various scripting Languages, Cloud Computing, Data Analytics and OS Certifications we will thoroughly equip the next digital workforce.</p>
									<a href="/papers/skills_boost_western_cape_-_summary_report.pdf" target="_blank" rel="noopener" title="whitepaper on digital skills jobs">White Paper: Western Cape Digital Skills Shared Agenda for Action &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/3d-printer.svg" width={150} height={150} className={home.cardTopOverflow} alt="FabLab Innovation"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">FabLab Innovation Centre</h3>
									<p className="card-text">Disruptive Technologies like "Additive Manufacturing" or 3D Printing, paired with the sharp removal of its price barrier, allows young entrepreneurs to enter previously closed markets. Our <a href="https://fabfoundation.org/" target="_blank" rel="noopener">FabLab</a> will assist in product development, rapid tooling and prototyping as well as learning new business models.</p>
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
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Science, Technology, Engineering and Mathematics (STEM)</h3>
									<p className="card-text">We are a partner in science, technology and industrial learning to supplement the inadequate number of teachers skilled to educate in these areas.  We will promote STEM careers, and teach short courses as well as create fun STEM based science events.</p>
									<a href="/papers/1-s2.0-S2468227619307616-main.pdf" target="_blank" rel="noopener" title="whitepaper on stem in africa">White Paper: Engineering education, development and growth in Africa &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__green}`}><span>STEM</span></div>
								<Image src="/assets/lego.svg" width={150} height={150} className={home.cardTopOverflow} alt="LEGO STEM"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">LEGO&reg; STEM Learning</h3>
									<p className="card-text">The LEGO&reg; Foundation released a report stating that STEM learning through play holistically enhances a learner's social, emotional, physical and creative skills. Through <a href="https://education.lego.com/en-us/customer-stories" target="_blank" rel="noreferrer" title="more about LEGO stem">LEGO&reg; STEM</a> our goal is to eliminate the idea of "Hard" math and science through fun and curious play using LEGO&reg; STEM Toys in Grade R-12 schools.</p>
									<a href="/papers/le_learning_through_play_whitepaper_digital_pdf.pdf" target="_blank" rel="noopener" className="card-link" title="whitepaper on lego education">White Paper: LEGO&reg; Education - The unrealized potential of learning through play at school &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
							<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__purple}`}><span>Workshop</span></div>
							<Image src="/assets/programmer.svg" width={150} height={150} className={home.cardTopOverflow} alt="Hackathons"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Code &amp; Enterprise Hackathons</h3>
									<p className="card-text">Hackathons help break through the barriers of a stale "business as usual" culture into creative disruption and intense innovation. Our 1-3 day Hackathon events will not only solve technical problems, and deliver new innovative software and hardware, but will accelerate organizational digitization strategies and improve customer processes.</p>
									<a href="/papers/Demystifying_the_hackathon.pdf" target="_blank" rel="noopener" title="whitepaper on hackathons">White Paper: Demystifying The Hackathon &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/healthcare.svg" width={150} height={150} className={home.cardTopOverflow} alt="Public Health"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Public Health Technology</h3>
									<p className="card-text">Our aim is to significantly incorporate modern technology into South Africa's health sector. We will produce tools, software and data analytics to improve and enhance awareness of access to public healthcare which will ultimately improve the health outcomes in the Garden Route community.</p>
									<a href="/papers/Materilie345_digital_health_africa.pdf" target="_blank" rel="noopener" title="whitepaper on digital health ecosystem">White Paper: Digital Health Ecosystem for African Countries &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/game-pad.svg" width={150} height={150} className={home.cardTopOverflow} alt="Roblox Proggrams"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Roblox&reg; Game Engineering</h3>
									<p className="card-text">Gamification is a powerful vehicle for learning. Our goal is to have introductory workshops and courses on development and design using the popular <a href="https://education.roblox.com/en-us/" target="_blank" rel="noreferrer" title="Roblox education">Roblox&reg;</a> platform amongst others. We will use our Gaming Center to teach students of all ages computer science, digital citizenship, entrepreneurship, competition and fair play.</p>
									<a href="/papers/1-s2.0-S1071581920300987-main.pdf" target="_blank" title="whitepaper on gamification" rel="noopener">White Paper: The Effect of Challenge-Based Gamification on Learning &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/tractor.svg" width={150} height={150} className={home.cardTopOverflow} alt="Agricultural Technology"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Agricultural Technology</h3>
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
							<p className="lead text-white text-center">Fully furnished and modern coworking and meeting spaces to inspire creativity and promote cluster collaboration.  Our spaces will provide a productive and secure work environment giving you the opportunity to network with like minded people.</p>
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
						
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center" onClick={() =>{ window.location.href = "https://wa.me/270630705752"; }}>
							<Image src="/assets/whatsapp.svg" width={25} height={25} alt="whatsapp us"/>
							<small className="ms-2">+27 (063) 070 5752</small>
						</button>
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center" onClick={() =>{ window.location.href = "tel:270762822192"; }}>
							<Image src="/assets/phone.svg" width={25} height={25} alt="call us"/>
							<small className="ms-2">+27 (076) 282 2192</small>
						</button>
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center" onClick={() =>{ window.location.href = "mailto:info@grithub.org.za"; }}>
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


			<Helmet>
				<script type="application/ld+json">
					{StructuredJSON()}
				</script>
			</Helmet>
		</>
	)
}


