
import homeposter from '../images/homeposter.jpg'
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <header>
                <picture>
                    <Slide triggerOnce direction='down' duration={900}>
                        <img src={homeposter} alt="letchat!" />
                    </Slide>

                </picture>
                <div className="postercontent">
                    <Fade triggerOnce delay={500} >
                        <h1>Let Chat!</h1>
                        <br /><br />
                        <span onClick={() => navigate("login")} type='button' className='startbutton' >Start</span>
                    </Fade>
                </div>

            </header>
        </>
    )
}

export default Home