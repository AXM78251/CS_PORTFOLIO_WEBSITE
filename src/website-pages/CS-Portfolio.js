import githubLogo from "../images-and-videos/github-mark.png"

function CS_Portfolio() {
    return (
        <div className = "main-portfolio-page">
            <div className = "experience-section" id = "experience-sec">
                <hr/>
                <h1 className = "portfolio-section-headers">Experience</h1>
                <hr/>
            </div>
            <div className = "website-main-2">
                <a className = "redirections" href = "https://inst.eecs.berkeley.edu/~cs61c/sp24/" target = "_blank" rel = "noopener noreferrer">
                    <div className = "website-info-2">
                        <h1>
                            Computer Architecture Undergraduate Student Instructor @ UC Berkeley
                        </h1>
                        <h2 className = "project-date">
                            January 2023 - May 2024
                        </h2>
                        <h2>
                            <p>
                                In Spring 2023, I was appointed as an undergraduate student instructor (uGSI) for CS61C, the machine structures   
                                course offered at the University of California, Berkeley.  
                            </p>
                            <p>
                                As a uGSI, my duties included staffing office hours throughout the week 
                                where students can come in for help on anything relating to the course, leading a weekly discussion section of around 40+ students
                                that gives students the opportunity to consolidate their understanding of course content covered in the previous week, and other miscellanous tasks such
                                as exam writing and exam proctoring.
                            </p>
                        </h2>
                    </div>
                </a>
            </div>
            <div className = "website-main-1">
                <a className = "redirections" href = "https://www.modalai.com/" target = "_blank" rel = "noopener noreferrer">
                    <div className = "website-info-1">
                        <h1>
                            ModalAI Internship
                        </h1>
                        <h2 className = "project-date">
                            May 2023 - August 2023
                        </h2>
                        <h2>
                            <p>
                                This past summer, I had the privilege of interning at ModalAI as a software engineer. 
                                I worked on VOXL Portal, a web user interface that allows for camera inspection 
                                and debugging tools that are fully compatible with ModalAI's autonomous computing platform, VOXL. 
                            </p>
                            <p>
                                During my time working with the VOXL Portal user interace, I was able to engage with various frameworks and protocols 
                                such as WebSockets in javascript that allow for two-way interactive communication between the browser and server and Mongoose, 
                                an embedded network server and network library written in C/C++. 
                            </p>
                            <p>
                                With these tools, I was able to polish up some buggy features on the user interface as well as implement new features that customers 
                                could use to their advantage when debugging their VOXL platform!
                            </p>
                        </h2>
                    </div>
                </a>
            </div>
            <div className = "website-main-1">
                <a className = "redirections" href = "https://inst.eecs.berkeley.edu/~cs61c/fa22/" target = "_blank" rel = "noopener noreferrer">
                    <div className = "website-info-1">
                        <h1>
                            Computer Architecture Tutor @ UC Berkeley 
                        </h1>
                        <h2 className = "project-date">
                            August 2022 - December 2022
                        </h2>
                        <h2>
                            <p>
                                In Fall 2022, I was appointed as a tutor for CS61C, the machine structures course offered at the University of California, Berkeley.
                            </p>
                            <p>
                                As a tutor, I was responsible for instructing a weekly section of around 5 students as well as holding office hours. 
                                I was also responsible for preparing mini-lectures and worksheets that would aid current students in exploring the course material 
                                thoroughly and through various modes of learning.
                            </p>
                        </h2>
                    </div>
                </a>
            </div>
            <div className = "personal-projects-section" id = "projects-sec">
                <hr/>
                <h1 className = "portfolio-section-headers">Projects</h1>
                <hr/>
            </div>
            <div className = "website-main-1">
                <div className = "website-info-1">
                    <h1>
                        Personal Portfolio
                    </h1>
                    <h2 className = "project-date">
                        Summer 2023
                    </h2>
                    <h2>
                        <p>
                            This was the first big front-end project I worked on during the summer of 2023. 
                            I created this website with two main goals in mind: to showcase my different skills/experiences 
                            and to expand my knowledge on front-end languages, design, and development. I learned everything I needed to know 
                            through documentation and resources like google and stack overflow. I will continue to update this website 
                            as I complete new projects and gain more experience.  
                        </p>
                    </h2>
                </div>
                <div className = "website-img-or-svg-1">
                    <h2>
                        Check out the source code for my website below!
                    </h2>
                    <a href = "https://github.com/AXM78251/Cs-Portfolio-Website" target = "_blank" rel="noopener noreferrer">
                        <img src = {githubLogo} alt = "Github Logo"/>
                    </a>
                </div>
            </div>
            <div className = "website-main-1">
                <div className = "website-img-or-svg-1">
                    <h2>
                        Check out the document for my renderer below that is hosted on Github pages!
                    </h2>
                    <a href = "https://cal-cs184-student.github.io/hw-webpages-sp24-AXM78251/hw3/docs/index.html" target = "_blank" rel="noopener noreferrer">
                        <img src = {githubLogo} alt = "Github Logo"/>
                    </a>
                </div>
                <div className = "website-info-1">
                    <h1>
                        Physically-Based Renderer
                    </h1>
                    <h2 className = "project-date">
                        Spring 2024
                    </h2>
                    <h2>
                        <p>
                            As part of my computer graphics class, we were tasked with implementing a physically-based renderer on the CPU using a path-tracing algorithm. 
                            This renderer would end up relying on foundational concepts of computer graphics including ray-scene intersection, acceleration structures, and physically based 
                            lighting and material models. This project also required students to get well acquainted with using C and the various C libraries that are 
                            specifically tailored for computer graphics. 
                        </p>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default CS_Portfolio;