import React, { useRef } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import slider from '../../images/slider.png';
import { TweenMax, Power3 } from 'gsap';
import { useEffect } from 'react';
import { Link } from '@material-ui/core';
import smallerSlider from '../../images/smallerSlider.png';

const Home = () => {
    let sliderImage = useRef(null);
    let smallerSliderImage = useRef(null)

    useEffect(() => {
        console.log(sliderImage);
        TweenMax.to(
            sliderImage,
            .8,
            {
                opacity: 1,
                x: -100,
                ease: Power3.easeInOut
            }
        )
    }, []);

    useEffect(() => {
        console.log(smallerSliderImage);
        TweenMax.to(
            smallerSliderImage,
            .8,
            {
                opacity: 1,
                x: -100,
                ease: Power3.easeInOut
            }
        )
    }, []);

    return (
        <div className="home">
            <div className="homeDetails">
                <div>
                    <div>
                        <h1>Business is<br />Now Digital</h1>
                        <p>We blend insight and strategy to creat digital products for<br />forward-thinking organization.</p>
                        <div>
                            <Button className="getStartedBtn">GET STARTED</Button>
                            <Button className="downloadBtn">DOWNLOAD</Button>
                        </div>
                        <div className="followUs">
                            <h4>Follow us on:</h4>
                            <div>
                                <Link target="blank" href="https://www.facebook.com/buradio.org">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                                <Link target="blank" href="https://www.instagram.com/bu_radio/">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link target="blank" href="https://twitter.com/buradio">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link target="blank" href="https://www.youtube.com/c/buradio">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                                <Link target="blank" href="https://www.linkedin.com/company/buradio/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sliderDiv">
                    <img ref={slider => { sliderImage = slider }} className="slider" src={slider} alt="" />
                </div>
                <div className="smallerSliderDiv">
                    <img ref={slider => { smallerSliderImage = slider }} className="smallerSlider" src={smallerSlider} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;