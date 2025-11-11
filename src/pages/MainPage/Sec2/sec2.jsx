
import './sec2.css'
import React, { useState } from "react";

const Sec2 = () => {
    const cards = [
        {
            id: 1,
            number: '01',
            svg :  (
                <svg width="230" height="1" viewBox="0 0 230 1" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<rect width="230" height="1" fill="#EBEBF0"/>
                    '</svg> ),
            title: 'Знакомство',
            description: 'Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.',
            button: (
                <img width="50" height="50" src="https://img.icons8.com/ios/50/228BE6/horizontal-line.png"
                         alt="horizontal-line"/>
            ),
            btn: 'Оставить заявку',
        },
        {
            id: 2,
            number: '02',
            svg : (
                <svg width="230" height="1" viewBox="0 0 230 1" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<rect width="230" height="1" fill="#EBEBF0"/>
                '</svg> ),
            title: 'Заключение договора',
            description: 'Лишь интерактивные прототипы призваны к ответу.',
        },
        {
            id: 3,
            number: '03',
            svg:  (
                <svg width="230" height="1" viewBox="0 0 230 1" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<rect width="230" height="1" fill="#EBEBF0"/>
                    '</svg> ),
            title: 'Производство',
            description: 'А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.',
        },
        {
            id: 4,
            number: '04',
            svg:  (
                <svg width="230" height="1" viewBox="0 0 230 1" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<rect width="230" height="1" fill="#EBEBF0"/>
                    '</svg> ),
            title: 'Доставка',
            description: 'В частности, экономическая повестка сегодняшнего дня говорит о возможностях приоритизации разума над эмоциями.',
        }

];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };
    return (
        <section>
            <div className="sec2-box">
                <svg className="mt-4" width="150" height="2" viewBox="0 0 150 2" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="2" fill="#5C8EE6"/>
                </svg>
                <h2>СХЕМА РАБОТЫ</h2>
                <div className="sec2-mobile pt-6">
                    <div className="mt- flex transition-transform duration-500 ease-in-out"
                         style={{
                             transform: `translateX(calc(-${currentIndex * 80}% ))`
                         }}>
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-3 w-[320px]">
                                <h1 className="flex text-[#5C8EE5] text-[40px]">{item.number}<span
                                    className="mt-7 ml-3">{item.svg}</span></h1>
                                <p className="text-[20px] text-[#292D33] pt-3">{item.title}</p>
                                <p className="text-[#828A99] text-[14px] pt-2">{item.description}</p>
                                <button className="flex text-[#5C8EE5] text-[14px] font-bold pt-3">{item.button}<span
                                    className="pt-[13px] pl-2">{item.btn}</span></button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="buttons ">
                    <button className="btn-m flex w-[120px] h-[40px] bg-[#5C8EE5] ml-[200px]">
                        <svg onClick={prevSlide} className="w-[36px] h-[24px] mt-2 ml-5" width="31" height="16" viewBox="0 0 31 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16158 0.686292L8.86869 1.3934L2.41405 7.84803L31 7.84795L30.9997 8.84819L2.42381 8.84801L8.86869 15.2929L8.16158 16L1.00959 8.84801H0.999926V8.83835L0.504726 8.34315L8.16158 0.686292Z"
                                fill="white"/>
                        </svg>
                        <svg onClick={nextSlide} className="w-[36px] h-[24px] mt-2 ml-5" width="36" height="24" viewBox="0 0 36 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.8384 19.3137L25.1313 18.6066L31.5859 12.152L3 12.1521L3.00035 11.1518L31.5762 11.152L25.1313 4.70711L25.8384 4L32.9904 11.152H33.0001V11.1617L33.4953 11.6569L25.8384 19.3137Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
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
                            <img width="50" height="50"
                                 src="https://img.icons8.com/ios/50/228BE6/horizontal-line.png"
                                 alt="horizontal-line"/> <p
                            className="text-[16px] font-bold text-[#5C8EE5] pl-2 pt-3">Оставить заявку</p>
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
                             <svg className="mt-8 ml-10" width="260" height="1" viewBox="0 0 260 1" fill="none"
                                  xmlns="http://www.w3.org/2000/svg"><rect width="260" height="1" fill="#EBEBF0"/>
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