import resumePdf from "../resume-updated.pdf"

function Resume() {
    return (
        <div className = "main-resume-page">
            <div className = "resume-title">
                <hr/>
                    <h1>Resume</h1>
                <hr/>
            </div>
            <iframe title = "My Resume" src = {resumePdf}/>
        </div>
    );
}

export default Resume;