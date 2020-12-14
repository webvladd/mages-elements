import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Envelope, Question } from 'react-bootstrap-icons';

import s from './ClanPage.module.scss';
import Slide from './assets/slide.jpg';
import Avatar from './assets/avatar.jpg';

const ClanPage = () => {
    return (
        <div className={s.root}>
            <div className={s.infoBlock}>
                <div className={s.infoBlockNav}>
                    <button className={s.menuBtn}></button>
                    <button className={s.envelopeBtn}><Envelope /></button>
                    <button className={s.questionBtn}><Question /></button>
                </div>
                <div className={s.infoBlockSlider}>
                    <Carousel controls={false}>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={Slide}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={Slide}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Slide}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={s.infoBlockAvatar}>
                    <img src={Avatar} alt=""/>
                </div>
            </div>

            <div className={s.clanMembers}>
                <h2>Соклановцы</h2>
            </div>

        </div>
    )
}

export default ClanPage;