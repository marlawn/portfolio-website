import './Contact.css'
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return(
        <div class="Contact">
            <h class="about-me-heading">Contact</h>
            <p class="underline">__________</p>
            <div class="meh">
                <div class="icons">
                    <SocialIcon url="https://www.linkedin.com/in/marlon-vergara/" bgColor='#323232' style={{height: 100, width:100}} />
                </div>
                <div class="icons">
                    <SocialIcon url="https://github.com/marlawn" bgColor='#323232' style={{height: 100, width:100}}/>
                </div>
                <div class="icons">
                    <SocialIcon url="mailto: marlonvergara12@gmail.com" bgColor='#323232' style={{height: 100, width:100}} />
                </div>
            </div>
            
        </div>
    );
}

export default Contact;