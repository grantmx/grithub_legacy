import React from 'react';
import footer from '../styles/footer.module.scss'
import Image from 'next/image';
import { Helmet } from 'react-helmet';

export default function FooterEmailForm(){
    return(
        <>
            <form className="form-floating w-100 position-relative">
                <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="email">Your Email</label>
                </div>
                <button type="submit" className={footer.submitBtn}>
                    <Image src="/assets/chevron-right2.svg" width={20} height={60} alt="Submit"/>
                </button>
            </form>

            <Helmet>
                <script id="mcjs" type="text/javascript" src="/thirdparty/mailchip.js" />
            </Helmet>
        </>
    )
}