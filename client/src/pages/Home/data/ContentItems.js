import EventLink from "components/atoms/Links/EventLink/EventLink";
import SeasonSlide from "components/atoms/Sliders/SeasonSlide/SeasonSlide";
import DefaultSlide from "components/atoms/Sliders/DefaultSlide/DefaultSlide";
import TrailerSlide from "components/atoms/Sliders/TrailerSlide/TrailerSlide";
import MiniArticle from "components/molecules/MiniArticle/MiniArticle";
import DiscussionLink from "components/atoms/Links/DiscussionLink/DiscussionLink";
import RecommendationLink from "components/molecules/RecommendationLink/RecommendationLink";

export const LeftWidgets = [
    {
        title: "MALxJapan -More than just anime-",
        linkTitle: "Visit MALxJapan",
        link: "https://mxj.myanimelist.net/",
        slider: false,
        display: "flex",
        Atom: EventLink,
        apiLink: "http://127.0.0.1:3001/events",
    },
    {
        title: "Spring 2022 Anime",
        linkTitle: "View More",
        link: "https://myanimelist.net/anime/season",
        Atom: SeasonSlide,
        slider: true,
        slides: 4.5,
        apiLink: "http://127.0.0.1:3001/season",
    },
    {
        title: "Manga Store",
        linkTitle: "View More",
        link: "https://myanimelist.net/store",
        Atom: DefaultSlide,
        slider: true,
        slides: 6.5,
        apiLink: "http://127.0.0.1:3001/manga",
    },
    {
        title: "Latest Updated Episode Videos",
        linkTitle: "View More",
        link: "https://myanimelist.net/watch/episode",
        Atom: DefaultSlide,
        slider: true,
        slides: 6.5,
        apiLink: "http://127.0.0.1:3001/latest",
    },
    {
        title: "Most Popular Anime Trailers",
        linkTitle: "View More",
        link: "https://myanimelist.net/watch/promotion/popular",
        Atom: TrailerSlide,
        slider: true,
        slides: 3.25,
        apiLink: "http://127.0.0.1:3001/trailers",
    },
    {
        title: "Anime & Manga News",
        linkTitle: "View More",
        link: "https://myanimelist.net/news",
        Atom: MiniArticle,
        apiLink: "http://127.0.0.1:3001/news",
    },
    {
        title: "Recent Anime Discussions",
        linkTitle: "View More",
        link: "https://myanimelist.net/forum/",
        Atom: DiscussionLink,
        apiLink: "http://127.0.0.1:3001/discussions",
    },
    {
        title: "Featured Articles",
        linkTitle: "View More",
        link: "https://myanimelist.net/forum/",
        Atom: MiniArticle,
        apiLink: "http://127.0.0.1:3001/articles",
    },
    {
        title: "Latest Anime Reviews",
        linkTitle: "View More",
        link: "https://myanimelist.net/reviews.php?t=anime",
        Atom: MiniArticle,
        apiLink: "http://127.0.0.1:3001/reviews",
    },
    {
        title: "Latest Anime Recommendations",
        linkTitle: "View More",
        link: "https://myanimelist.net/recommendations.php?s=recentrecs&t=anime",
        Atom: RecommendationLink,
        apiLink: "http://127.0.0.1:3001/recommendations",
    },
];

export const RightWidgets = [
    {
        title: "Top Airing Anime",
        link: "https://myanimelist.net/topanime.php?type=airing",
        apiLink: "http://127.0.0.1:3001/airing",
    },
    {
        title: "Top Upcoming Anime",
        link: "https://myanimelist.net/topanime.php?type=upcoming",
        apiLink: "http://127.0.0.1:3001/upcoming",
    },
    {
        title: "Most Popular Anime",
        link: "https://myanimelist.net/topanime.php?type=bypopularity",
        apiLink: "http://127.0.0.1:3001/popular",
    },
];
