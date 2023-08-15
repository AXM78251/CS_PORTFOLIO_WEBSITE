import Me from "./me.jpeg";

function AboutPage() {
    return (
        <div className = "main-about-page">
            <div className = "about-separator">
                <hr/>
                <h1>About</h1>
                <hr/>
            </div>
            <div className = "info-about-me">
                <div className = "info-child-img">
                    <img src = {Me} width = "75%" alt = "myself!"></img>
                </div>
                <div className = "info-child">
                    <h1>
                        Background
                    </h1>
                    <h2>
                        <p>
                            Hello! I hope you had the opportunity to look around! My name is Anthony Salinas Suarez and I am currently a senior 
                            majoring in Electrical Engineering & Computer Sciences (EECS) at the
                            <a id = "eecs-link" href = "https://eecs.berkeley.edu/" target = "_blank" rel="noopener noreferrer"> University of California, Berkeley</a>.
                            I was born and raised in San Diego, California and a little fun fact about myself is that my birthday is on Mexican Independence Day! 
                        </p>
                        <p>
                            I am interested in full-stack development, an area I've had the privilege of engaging with
                            during my time as a software engineering intern at <a id = "modalai-link" href = "https://www.modalai.com/" target = "_blank" rel="noopener noreferrer"> ModalAI</a>.
                            Some of my other interests include robotics and electrical systems.
                        </p>
                        <p>
                            Outside of academia, my hobbies include music, I am self-taught in guitar and ukulele, and as of recently, working out!
                        </p>
                    </h2>
                </div>
            </div>
            <div className = "current-ocupation">
                
            </div>
        </div>
    );
}

export default AboutPage;

