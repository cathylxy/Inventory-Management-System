import React from 'react';

function About() {
    return (
        <div>
            <div className="about-page">
                <header>
                    <h1>About Me</h1>
                </header>
            </div>
            <div className="intro">
                <h2>Introduction</h2>
                <p>
                    My name is Xuanya Liu. I'm a Computer Science student from BCS program and pursuing my second bachelor's degree.
                    I graduated from UBC Sauder School of Business in 2018 and worked in the financial industry for 3 years.
                    I'm very excited to learn more skills in this course and develop a cool website!
                </p>
            </div>
            <div className="project">
                <h2>Project</h2>
                <h3>Inventory Management Website</h3>
                <ul>
                    <li>
                        Allow users to add items to inventory
                    </li>
                    <li>
                        Allow users to view items in inventory
                    </li>
                    <li>
                        Allow users to delete all items from inventory
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;