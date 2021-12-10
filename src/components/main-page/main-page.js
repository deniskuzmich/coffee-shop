import MainHeader from "./main-header/main-header";
import MainAbout from "./main-about/main-about";
import BestCoffee from "./best-coffee/best-coffee";
import Footer from "../footer/footer";


const MainPage = () => {
        return (
            <>
                <MainHeader />
                <MainAbout />
                <BestCoffee />
                <Footer />
            </>
        )
}

export default MainPage;