import Style from '../../styles/page.module.scss'
import MainNav from "../navigation/MainNav";
import { NextSeo } from 'next-seo';
import FooterNav from '../navigation/FooterNav';


function GeneralPage({ title, subTitle, children, image }){
    return(
        <>
            <NextSeo title={title} />

            <main className="container-fluid d-flex p-0 flex-column">
                <section className={Style.heroWrapper} style={{backgroundImage: `url( ${image?.src ?? "/assets/hero.jpg" })`}}>
                    <div className={Style.hero}>
                        <MainNav page />

                        <div className="col-9 col-md-7 ps-md-5 ps-3 ms-md-2 ms-xl-0 top-50 position-absolute">
                            <h1 className={Style.heading}>
                                {title}
                            </h1>

                            {subTitle && (
                                <p className={Style.subHeading}>
                                    {subTitle}
                                </p>
                            )}
                            
                        </div>
                    </div>
                </section>

                {children}
            </main>

            <FooterNav />
        </>
    )
}

export default GeneralPage;