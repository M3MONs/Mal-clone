import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaDiscord } from "react-icons/fa";
import badgeIOS from "assets/img/badge_iOS.png";
import badgeAndroid from "assets/img/badge_googleplay.png";
import ficon1 from "assets/img/ficon1.png";
import ficon2 from "assets/img/ficon2.png";
import ficon3 from "assets/img/ficon3.png";

export const Socials = {
    links: {
        items: [
            {
                atom: (
                    <a href='https://myanimelist.net/' className='f-link home'>
                        Home
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about.php' className='f-link'>
                        About
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/pressroom' className='f-link'>
                        Press Room
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about.php?go=contact' className='f-link'>
                        Support
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/advertising' className='f-link'>
                        Advertising
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/forum/?topicid=515949' className='f-link'>
                        FAQ
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about/terms_of_use' className='f-link'>
                        Terms
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about/privacy_policy' className='f-link'>
                        Privacy
                    </a>
                ),
            },
            {
                atom: (
                    <a href='#/' className='f-link'>
                        Privacy Settings
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about/cookie_policy' className='f-link'>
                        Cookie
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about/notice_at_collection' className='f-link'>
                        Notice at Collection
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/about/sitemap' className='f-link'>
                        Sitemap
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/login.php?from=%2F' className='f-link login'>
                        Login
                    </a>
                ),
            },
            {
                atom: (
                    <a href='https://myanimelist.net/register.php?from=%2F' className='f-link'>
                        Sign Up
                    </a>
                ),
            },
        ],
    },
    media: {
        title: "Follow Us",
        items: [
            { atom: <FaFacebookSquare />, link: "/#" },
            { atom: <FaTwitterSquare />, link: "/#" },
            { atom: <FaInstagramSquare />, link: "/#" },
            { atom: <FaDiscord />, link: "/#" },
        ],
    },
    app: {
        title: "Get the App",
        items: [
            { atom: <img src={badgeIOS} className='badge' alt='ios' />, link: "" },
            { atom: <img src={badgeAndroid} className='badge' alt='google play' />, link: "" },
        ],
    },
    recommended: {
        title: "Recommended",
        items: [
            {
                atom: (
                    <div className='recom'>
                        <img src={ficon1} alt='Tokyo Otaku Mode' />
                        <h4>Tokyo Otaku Mode</h4>
                    </div>
                ),
                link: "http://otakumode.com/fb/5aO",
            },
            {
                atom: (
                    <div className='recom'>
                        <img src={ficon2} alt="'Honey's Anime" />
                        <h4>Honey's Anime</h4>
                    </div>
                ),
                link: "https://honeysanime.com/",
            },
            {
                atom: (
                    <div className='recom'>
                        <img src={ficon3} alt='Manga Store' />
                        <h4>Manga Store</h4>
                    </div>
                ),
                link: "https://myanimelist.net/store?_location=mal_f_m",
            },
        ],
    },
};
