import './AboutMe.css'

function AboutMe() {
    return(
        <div class="about-me">
            <p class="about-me-heading">about me</p>
            <p class="underline">____________</p>
            <p class="about-me-text">
                <p class="academic">Academics:</p>
                <ul class="list">
                    <li>Rutgers University (9/20-5/24)</li>
                    <li>Computer Engineering, B.S.</li>
                    <li>Minor in Computer Science</li>
                    <li>GPA: 3.69/4.00</li>
                </ul>
                <p class="list-header">Relevant Coursework:</p>
                <ul class="list">
                    <li>Introduction to Computer Science</li>
                    <li>Data Structures</li>
                    <li>Discrete Mathematics</li>
                    <li>Computer Architecture & Assembly Language</li>
                    <li>Software Methodology</li>
                    <li>Introduction to Computer Systems</li>
                    <li>Software Engineering</li>
                </ul>

                <p class="list-header">Languages:</p>
                <div class="row">
                    <div class="column">
                        <ul class="list">
                            <li>Java</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul class="list">
                            <li>Python</li>
                            <li>C/C#</li>
                            <li>MATLAB</li>
                        </ul>
                    </div>
                </div>

                <p class="list-header">Skills:</p>
                <div class="row">
                    <div class="column">
                        <ul class="list">
                            <li>Visual Studio Code</li>
                            <li>IntelliJ</li>
                            <li>PyCharm</li>
                            <li>React</li>
                            <li>Spring Boot</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul class="list">
                            <li>JavaDoc</li>
                            <li>JUnit</li>
                            <li>UML Diagrams</li>
                            <li>SQL/NoSQL Databases</li>
                        </ul>
                    </div>
                </div>
            </p>
        </div>
    );
}

export default AboutMe;