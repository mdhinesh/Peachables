import Greetuser from "../components/Greetuser";
import Practicemore from "../components/Practicemore";
import Startstudying from "../components/Startstudying";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar />
            <div className="body snap-mandatory snap-y">
                {/* If changing the width/adding some responsiveness also change in profile_body_your_quiz_list */}
                <div className="greet_pratice_start_studying_container tablet:w-3/4 laptop:w-1/2 tablet:mx-10 laptop:ml-48">
                    <div className="greet_user_pratice_more py-20 md:py-24 snap-center">
                        <Greetuser />
                        {/* <Practicemore /> */}
                    </div>
                    <Startstudying />
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Home;