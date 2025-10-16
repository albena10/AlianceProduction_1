import React from 'react';
import './sec3.css'
import img1 from './image/avto-him.png'
import img2 from './image/cef43f6d0e396e6cce99d7fe56b9a2a0b832f11e.png'
import img3 from './image/dezinfect.png'

const Sec3 = () => {
    return (
        <section className="sec3">
            <div className="sec3-box">
                <svg width="150" height="2" viewBox="0 0 150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="2" fill="#5C8EE6"/>
                </svg>
                <h2>КОНТРАКТНОЕ ПРОИЗВОДСТВО</h2>
                <div className="pt-7">
                    <div className="sec3-card_top">
                        <div className="sec3-top-left">
                            <p className="p4">
                                Автомобильная химия
                            </p>
                            <p className="p5">
                                Безусловно, сплочённость команды <br/>
                                профессионалов позволяет оценить <br/>
                                значение форм воздействия.
                            </p>
                            <img className="ml-[37px] mt-1" src={img1} alt=""/>
                        </div>
                        <div className="sec3-top-center">
                            <p className="p4">
                                Бытовая химия
                            </p>
                            <p className="p5">
                                А также стремящиеся вытеснить <br/>
                                традиционное производство, <br/>
                                нанотехнологии функционально <br/>
                                разнесены на независимые элементы.
                            </p>
                            <img className="ml-[37px] mt-[5px]" src={img2} alt=""/>
                        </div>
                        <div className="sec3-top-right">
                            <p className="p4">
                                Дезинфицирующие средства
                            </p>
                            <p className="p5">
                                Лишь интерактивные прототипы <br/>
                                призваны к ответу.
                            </p>
                            <img className="ml-[37px] mt-[25px]" src={img3} alt=""/>
                        </div>
                    </div>
                    <div className="sec3-card_bottom">
                        <div className="sec3-bottom-left">
                            <p className="p4">
                                Пищевые аэрозоли
                            </p>
                            <p className="p5">
                                Безусловно, сплочённость команды <br/>
                                профессионалов позволяет оценить <br/>
                                значение форм воздействия.
                            </p>
                            <img className="ml-[37px] mt-[6px]" src={img3} alt=""/>
                        </div>
                        <div className="sec3-bottom-center">
                            <p className="p4">
                                Косметическая продукция
                            </p>
                            <p className="p5">
                                Лишь интерактивные прототипы <br/>
                                призваны к ответу.
                            </p>
                            <img className="ml-[37px] mt-[5px]" src={img1} alt=""/>
                        </div>
                        <div className="sec3-bottom-right">
                            <p className="p4">
                                Краски аэрозольные
                            </p>
                            <p className="p5">
                                А также стремящиеся вытеснить <br/>
                                традиционное производство, <br/>
                                нанотехнологии функционально <br/>
                                разнесены на независимые элементы.
                            </p>
                            <img className="ml-[37px] mt-[26px]" src={img2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec3;