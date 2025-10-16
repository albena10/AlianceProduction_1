import React from 'react';
import './sec2.css'

const Sec2 = () => {
    return (
        <section>
            <div className="sec2-box">
                <svg className="mt-4" width="150" height="2" viewBox="0 0 150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="2" fill="#5C8EE6"/>
                </svg>
                <h2>СХЕМА РАБОТЫ</h2>
                <div className="scheme-box">
                    <div className="scheme1">
                        <span className="flex pt-5">01 <svg className="mt-8 ml-10" width="260" height="1"
                                                            viewBox="0 0 260 1" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="260" height="1" fill="#EBEBF0"/>
                        </svg>
                        </span>
                        <p className="p2">Знакомство</p>
                        <p className="p1">Безусловно, сплочённость команды <br/>
                            профессионалов позволяет оценить <br/>
                            значение форм воздействия.</p>
                        <div className="flex">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/228BE6/horizontal-line.png"
                                 alt="horizontal-line"/> <p className="text-[16px] font-bold text-[#5C8EE5] pl-2 pt-3">Оставить заявку</p>
                        </div>

                    </div>
                    <div className="scheme2">
                         <span className="flex pt-5">02 <svg className="mt-8 ml-10" width="260" height="1"
                                                             viewBox="0 0 260 1" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="260" height="1" fill="#EBEBF0"/>
                        </svg>
                        </span>
                        <p className="p2">Заключение <br/>
                            договора</p>
                        <p className="p1">Лишь интерактивные прототипы <br/>
                            призваны к ответу.</p>
                    </div>
                    <div className="scheme3">
                         <span className="flex pt-5">03 <svg className="mt-8 ml-10" width="260" height="1"
                                                             viewBox="0 0 260 1" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="260" height="1" fill="#EBEBF0"/>
                        </svg>
                        </span>
                        <p className="p2">Производство</p>
                        <p className="p1">А также стремящиеся вытеснить <br/>
                            традиционное производство, <br/>
                            нанотехнологии функционально <br/>
                            разнесены на независимые <br/>
                            элементы.</p>
                    </div>
                    <div>
                         <span className="flex pt-5">04
                             <svg className="mt-8 ml-10" width="260" height="1" viewBox="0 0 260 1" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="1" fill="#EBEBF0"/>
                        </svg>
                        </span>
                        <p className="p2">Доставка</p>
                        <p className="p1">В частности, экономическая повестка <br/>
                            сегодняшнего дня говорит о <br/>
                            возможностях приоритизации <br/>
                            разума над эмоциями.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec2;