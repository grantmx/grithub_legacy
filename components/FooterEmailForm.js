import React from 'react';
import footer from '../styles/footer.module.scss'
import Image from 'next/image';

const google_sheets = {
    sheet_id: "1asxPJJqadsvxuhV_QY5qb5SIZ9YVw7EfOIe-Cco00yg",
    api_key: "AIzaSyCUJ97V-rQ3ceohBQW-7dXrNoGkFmAc1SU",
    client_id: "34343091455-dns7fp8n870k2ggni3mh9giou3672tgu.apps.googleusercontent.com",
    url: "https://www.gogleapis.com/auth/spreadsheets"
};

//  client secret: JA8cLZsGR6ok3U-zPiiYA7ef

export default function FooterEmailForm(){
    return(
        <form className="form-floating w-100 position-relative">
            <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                <label htmlFor="email">Your Email</label>
            </div>
            <button type="submit" className={footer.submitBtn}>
                <Image src="/assets/chevron-right2.svg" width={20} height={60} alt="Submit"/>
            </button>
        </form>
    )
}