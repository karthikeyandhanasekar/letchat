
import homeposter from '../images/homeposter.jpg'
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
    return (
        <>
            <header>
                <picture>
                    <Slide triggerOnce direction='down' duration={1200}>
                        <img src={homeposter} alt="letchat!" />
                    </Slide>

                </picture>
                <div className="postercontent">
                    <Fade triggerOnce delay={2000} >
                        <h1>Let Chat!</h1>
                        <br />
                        <span type='button' className='startbutton' >Start</span>
                    </Fade>
                </div>

            </header>
        </>
    )
}

export default Home