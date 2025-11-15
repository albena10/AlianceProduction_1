import React, {useState} from 'react';
import './sec7.css'
import img1 from './image/img1.png'
import img2 from './image/img2.png'
const Sec7 = () => {
    const cards = [
        {
            id: 1,
            image: img1,
            title: ' Современная методология разработки одухотворила всех причастных ',
        },
        {
            id: 2,
            image: img2,
            title: ' Сложно сказать, почему жизнь прекрасна  ',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };
    return (
        <section className="sec7-1">
            <div className="sec7-box">
                <svg width="150" height="2" viewBox="0 0 150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="2" fill="#5C8EE6"/>
                </svg>
                <h2>БЛОГ ЭКСПЕРТОВ В ОБЛАСТИ ПРОИЗВОДСТВА</h2>
                <div className="sec7-card">
                    <div className="sec7-left">
                        <div className="backdrop-brightness-50 w-[560px] h-[295px]">
                            <p className="p14-1">
                                Современная методология разработки <br/>
                                одухотворила всех причастных <br/></p>
                            <p className="p14span">Действия представителей оппозиции, превозмогая сложившуюся <br/>
                            непростую экономическую ситуацию, в равной степени предоставлены...</p>
                        </div>
                    </div>
                    <div className="sec7-right">
                        <div className="backdrop-brightness-50 w-[590px] h-[295px]">
                            <p className="p14-2">Сложно сказать, почему жизнь прекрасна <br/></p>
                            <p className="p14span"> Сложно сказать, почему элементы политического процесса функционально <br/>
                            разнесены на независимые элементы.Безусловно, высокотехнологичная...</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="pt-5">
                        <img className="w-10" width="50" height="50"
                             src="https://img.icons8.com/ios/50/228BE6/horizontal-line.png"
                             alt="horizontal-line"/>
                        <p className="p15">Весь блог</p>
                    </div>
                    <div className=" flex pl-[800px] w-[200px]">
                        <button className=" flex mt-5 pt-5 h-[60px] bg-[#5C8EE5] justify-center pl-[15px]">
                            <svg width="31" height="16" viewBox="0 0 31 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.16158 0.686292L8.86869 1.3934L2.41405 7.84803L31 7.84795L30.9997 8.84819L2.42381 8.84801L8.86869 15.2929L8.16158 16L1.00959 8.84801H0.999926V8.83835L0.504726 8.34315L8.16158 0.686292Z"
                                    fill="white"/>
                            </svg>
                        </button>
                        <button className="flex pt-5 h-[60px] bg-[#5C8EE5] pl-6 pr-[15px] mt-5">
                            <svg width="31" height="16" viewBox="0 0 31 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.8384 15.3137L22.1313 14.6066L28.5859 8.15197L0 8.15205L0.000345267 7.15181L28.5762 7.15199L22.1313 0.707107L22.8384 0L29.9904 7.15199H30.0001V7.16165L30.4953 7.65685L22.8384 15.3137Z"
                                    fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="sec7-mobile pt-6">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-[100px]"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 120}%))`
                        }}
                    >
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-3 w-[350px] h-[195px] bg-cover bg-center flex items-center"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            >
                                <p className="text-[22px] text-[#FFFFFF] pt-10 font-noto ">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className=" flex ">
                        <div className="pt-5">
                            <img className="w-10" width="50" height="50"
                                 src="https://img.icons8.com/ios/50/228BE6/horizontal-line.png"
                                 alt="horizontal-line"/>
                            <p className="p15">Весь блог</p>
                        </div>
                        <button onClick={prevSlide}
                                className=" flex mt-5 pt-5 h-[60px] bg-[#5C8EE5] pl-[15px] ml-12 pr-[25px]">
                            <svg width="31" height="16" viewBox="0 0 31 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.16158 0.686292L8.86869 1.3934L2.41405 7.84803L31 7.84795L30.9997 8.84819L2.42381 8.84801L8.86869 15.2929L8.16158 16L1.00959 8.84801H0.999926V8.83835L0.504726 8.34315L8.16158 0.686292Z"
                                    fill="white"/>
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="flex pt-5 h-[60px] bg-[#5C8EE5] pl-6 pr-[15px] mt-5">
                            <svg width="31" height="16" viewBox="0 0 31 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.8384 15.3137L22.1313 14.6066L28.5859 8.15197L0 8.15205L0.000345267 7.15181L28.5762 7.15199L22.1313 0.707107L22.8384 0L29.9904 7.15199H30.0001V7.16165L30.4953 7.65685L22.8384 15.3137Z"
                                    fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Sec7;