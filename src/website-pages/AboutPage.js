import Me from "../images-and-videos/me.jpeg";

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
                            Hello! I hope you had the opportunity to look around! My name is Anthony Salinas Suarez and I am a graduate from 
                            the <a id = "eecs-link" href = "https://eecs.berkeley.edu/" target = "_blank" rel="noopener noreferrer"> University of California, Berkeley </a>
                            with a major in Electrical Engineering & Computer Sciences (EECS).
                            I was born and raised in San Diego, California and a little fun fact about myself is that my birthday is on Mexican Independence Day! 
                        </p>
                        <p>
                            I am open to any and all work opportunities ranging from full-stack development to cybersecurity! Please do not hesitate to reach out via email at 
                            anthonysalinas78251@berkeley.edu!
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

