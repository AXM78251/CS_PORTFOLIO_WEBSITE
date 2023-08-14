function CS_Portfolio() {
    return (
        <div className = "main-portfolio-page">
            <div className = "portfolio-intro">
            </div>
            <div className = "coursework-section" id = "coursework-sec">
                <hr/>
                <h1 className = "portfolio-section-headers">Relevant Coursework</h1>
                <hr/>
            </div>
            <div className = "class-cards-grid">
                <div className = "class-card">
                    <div className = "class-card-title">
                        <h2>
                            Structure & Interpretation of Computer Programs
                        </h2>
                        <div className = "class-card-content">
                            <p>
                                CS61A
                            </p>
                            <h2>
                                Skills: Python, Scheme, SQL, Git Version Control 
                            </h2>
                            <hr></hr>
                            <h2>
                                Fall 2020

                            </h2>
                            <div className = "course-link-container">
                                <div className = "course-link">
                                    <a href = "https://inst.eecs.berkeley.edu/~cs61a/fa20/" target = "_blank" rel = "noopener noreferrer">
                                        <h2>
                                            Course Site
                                        </h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "experience-section" id = "experience-sec">
                <hr/>
                <h1 className = "portfolio-section-headers">Experience</h1>
                <hr/>
            </div>
            <div className = "personal-projects-section" id = "projects-sec">
                <hr/>
                <h1 className = "portfolio-section-headers">Personal Projects</h1>
                <hr/>
            </div>
        </div>
    );
}

export default CS_Portfolio;