import Navbar from "components/Navbar/index.jsx";
import Main from "components/Main/index.jsx";
import Banner from "components/Banner/index.jsx";
import Card from "components/Card/index.jsx";
import Testimonial from "components/Testimonial/index.jsx";
import Blog from "components/Blog/index.jsx";
import Footer from "components/Footer/index.jsx";

export default function Home () {
    return (
        <>
            <Navbar />
            <Main />
            <Banner />
            <Card />
            <Testimonial />
            <Blog />
            <Footer />
        </>
    )
}