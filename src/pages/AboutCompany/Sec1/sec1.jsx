import React from 'react';
import './sec1.css'

const Sec1 = () => {
    return (
        <section className="about_sec1">
            <div className="about_sec1-box">
                <svg className="mt-[15px]" width="150" height="2" viewBox="0 0 150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="2" fill="#5C8EE6"/>
                </svg>
                <h2>О КОМПАНИИ</h2>
                <p className="p22">Главная — <span>О компании </span> </p>
            </div>
        </section>
    );
};

export default Sec1;