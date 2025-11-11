import React, { useState } from "react";
import img1about from './image/Frame 46.png';
import img2about from './image/Frame 44.png';
import img3about from './image/Frame 46.png';
import img4about from './image/Frame 44.png';
import "./sec5.css";

const Sec5 = () => {
    const images = [img1about, img2about, img3about, img4about];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="about_sec5">
            <div className="about_sec5-box">
                <svg className=" mb-5" width="150" height="2" viewBox="0 0 150 2" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="2" fill="#5C8EE6"/>
                </svg>
                <p className="text-[40px] text-[#292D33] font-bebas "> ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР</p>
                <p className="text-[40px] text-[#292D33] font-bebas ">ALIANCE PRODUCTION</p>
                <div className="about_sec5-top">
                    <div className="about_top-left">
                        <p className="text-[16px] text-[#828A99] pt-[20px] font-noto pr-5">
                            Явные признаки победы институционализации рассмотрены исключительно в <br/>
                            разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, <br/>
                            наблюдать, как активно развивающиеся страны третьего мира могут быть <br/>
                            ограничены исключительно образом мышления. Лишь независимые <br/>
                            государства набирают популярность среди определенных слоев населения, а <br/>
                            значит, должны быть указаны как претенденты на роль ключевых факторов. <br/>
                            Лишь акционеры крупнейших компаний могут быть призваны к ответу.
                        </p>
                    </div>
                    <div className="about_top-right">
                        <p className="text-[16px] text-[#828A99] pt-[20px] font-noto">
                            С учётом сложившейся международной обстановки, синтетическое <br/>
                            тестирование требует определения и уточнения анализа существующих <br/>
                            паттернов поведения. Не следует, однако, забывать, что высокотехнологичная <br/>
                            концепция общественного уклада представляет собой интересный <br/>
                            эксперимент проверки как самодостаточных, так и внешне зависимых <br/>
                            концептуальных решений. Предварительные выводы неутешительны: <br/>
                            разбавленное изрядной долей эмпатии, рациональное мышление однозначно <br/>
                            фиксирует необходимость стандартных подходов.
                        </p>
                    </div>
                </div>
                <div className=" pt-[60px]">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 20}%))`,
                        }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[100%] md:w-[40%] px-3"
                            >
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>
                <div className="buttons">
                    <button className="flex pt-5 w-[80px] h-[60px] bg-[#5C8EE5] justify-center ml-[900px] pl-[15px]"
                            onClick={prevSlide}>
                        <svg className="w-[36px] h-[24px]" width="31" height="16" viewBox="0 0 31 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16158 0.686292L8.86869 1.3934L2.41405 7.84803L31 7.84795L30.9997 8.84819L2.42381 8.84801L8.86869 15.2929L8.16158 16L1.00959 8.84801H0.999926V8.83835L0.504726 8.34315L8.16158 0.686292Z"
                                fill="white"/>
                        </svg>
                    </button>
                    <button className="flex pt-5 w-[80px] h-[60px] bg-[#5C8EE5]" onClick={nextSlide}>
                        <svg className="w-[36px] h-[24px]" width="36" height="24" viewBox="0 0 36 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.8384 19.3137L25.1313 18.6066L31.5859 12.152L3 12.1521L3.00035 11.1518L31.5762 11.152L25.1313 4.70711L25.8384 4L32.9904 11.152H33.0001V11.1617L33.4953 11.6569L25.8384 19.3137Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
</section>
)
    ;
};

export default Sec5;