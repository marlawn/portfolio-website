import './Body.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Blurb from './components/Blurb'
import Contact from './components/Contact'

function Body() {
    return(
        <div class="Body">
            <Blurb />
            <AboutMe/>
            <Projects/>
            <Contact />
        </div>
    );

}

export default Body;