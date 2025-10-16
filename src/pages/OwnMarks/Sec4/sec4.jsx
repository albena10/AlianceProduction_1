import React from 'react';
import './sec4.css'
import img1 from "./image/Frame 48 (1).png";
const Sec4 = () => {
    return (
        <section className="sec8">
            <div className="sec8-box">
                <div className="sec8-left">
                    <img src={img1} alt=""/>
                </div>
                <div className="sec8-right">
                    <h2>ХОТИТЕ СОТРУДНИЧАТЬ?</h2>
                    <p className="p16">Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит <br/>
                        на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
                    <div className="flex pt-5">
                        <button className="mb-4 pt-5 pr-3">
                            <label className="block text-gray-700"></label>
                            <input
                                type="text"
                                name="name"
                                className=" bg-[#F0F2F5] border w-[300px] h-[56px] pl-[20px]"
                                placeholder="Имя"
                                required/>
                        </button>
                        <button className=" mb-4 mt-1">
                            <label className="block text-[#828A99]  text-[10px] absolute ml-5">Номер телефона</label>
                            <input
                                type="tel"
                                name="phone"
                                className="mt-4 bg-[#F0F2F5] placeholder-[#292D33] border-[#5C8EE5] border w-[300px] h-[56px] pl-[20px]"
                                placeholder="+7 (___) ___-__-__"
                                required/>
                        </button>
                    </div>
                    <div className="bottom">
                        <button type="submit"
                                className="bg-[#5C8EE5] mt-4 text-white font-bold px-4 py-2 h-[56px] w-[350px]">Отправить
                            заявку
                        </button>
                        <p className="flex text-[14px] text-[#828A99] ml-5 mt-7">
                            <svg className="mt-1 mr-2" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9221 2.94626L7.41988 1.07035C7.27918 1.02345 7.13849 1 6.9978 1C6.83365 1 6.69296 1.02345 6.55227 1.07035L2.05007 2.94626C1.62799 3.13385 1.37005 3.53249 1.37005 3.97802C1.37005 8.64436 4.04323 11.8569 6.55227 12.9121C6.83365 13.0293 7.13849 13.0293 7.41988 12.9121C9.43649 12.0679 12.6255 9.18368 12.6255 3.97802C12.6255 3.53249 12.3442 3.13385 11.9221 2.94626ZM10.1616 5.72512L6.50537 9.14349C6.36467 9.30763 6.10673 9.30763 5.96604 9.14349L3.95613 7.37141C3.81544 7.23072 3.81544 6.99623 3.95613 6.85554L4.24087 6.5708C4.38156 6.43011 4.61605 6.43011 4.75675 6.5708L6.30254 7.91226L9.41607 4.97962C9.55677 4.83893 9.79126 4.83893 9.93195 4.97962L10.1616 5.20924C10.3023 5.34994 10.3023 5.58443 10.1616 5.72512Z"
                                    fill="#828A99"/>
                            </svg>
                            Обращаясь к нам вы получаете не только профессиональную <br/>
                            работу, но и абсолютную конфиденциальность информации!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec4;