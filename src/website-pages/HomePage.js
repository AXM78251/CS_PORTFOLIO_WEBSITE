import MachoPhoto from "../images-and-videos/macho.jpg"
import LunaPhoto from "../images-and-videos/luna.jpeg"
import CarlsbadFlowerFields from "../images-and-videos/carlsbad.jpeg"
import BabyTaylor from "../images-and-videos/baby-taylor.jpeg"

function HomePage() {
    return (
        <div className = "main-home-page">
            <div className = "introduction">
                <h1 id = "welcome-h1">
                    Welcome to my Website!
                </h1>
                <h2 id = "intro-to-website">
                    I am glad to have you here! I made this website with the hopes of sharing a bit about myself and to
                    showcase the different skills and experiences I have accumulated as an Electrical Engineering & Computer Sciences (EECS) student at the University of California, Berkeley.
                    Feel free to look around and explore to learn more about me and stay tuned for future updates to this website!
                </h2>
            </div>
            <div className = "polaroid-imgs-wrapper">
                <div className = "polaroid-imgs">
                    <div className = "polaroid-container">
                        <img src = {MachoPhoto} alt = "My dog: Macho"/>
                        <div className = "polaroid-caption"> Doggo 1: Macho</div>
                    </div>
                    <div className = "polaroid-container flip-rotation-image">
                        <img src = {CarlsbadFlowerFields} alt = "Carlsbad flower fields!!!"/>
                        <div className = "polaroid-caption"> Carlsbad flower fields!!! </div>
                    </div>
                </div>
                <div className = "polaroid-imgs">
                    <div className = "polaroid-container">
                        <img src = {LunaPhoto} alt = "My dog: Luna"/>
                        <div className = "polaroid-caption"> Doggo 2: Luna </div>
                    </div>
                    <div className = "polaroid-container flip-rotation-image">
                        <img src = {BabyTaylor} alt = "My baby taylor guitar!!!"/>
                        <div className = "polaroid-caption"> My baby taylor guitar!!!</div>
                    </div>
                </div>
            </div>
            <div className = "spotify-playlist">
                <h2>Check out my spotify playlist below!</h2>
                <iframe title = "spotify-songs" src="https://open.spotify.com/embed/playlist/3gkTnIG2dHkhcBCnxgcDc1?utm_source=generator"></iframe>
            </div>
        </div>
    );
};

export default HomePage;