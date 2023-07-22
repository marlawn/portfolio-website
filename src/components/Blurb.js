import './Blurb.css'
import TypeWriter from './TypeWriter'

function Blurb() {
    return (
        <div class="Blurb">
            <img src='./images/temp4.png' alt="sketch" class="image" />
            <div class="text">
                <TypeWriter text={'        Hey there! My name is Marlon Vergara, an aspiring software engineer'}/>
            </div>
        </div>
    );
}

export default Blurb;