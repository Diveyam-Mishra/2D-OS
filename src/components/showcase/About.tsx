import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Diveyam Mishra</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a passionate software engineer currently pursuing my graduation at SGSITS, Indore.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:mishradiveyam@gmail.com">
                        mishradiveyam@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My journey into programming started quite early during my school days. In 2013, when AI was still just becoming a buzzword for most, I found myself deeply curious about it. That curiosity slowly evolved into a passion for building things and understanding how complex systems work.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Me fully immersed in coding!
                        </sub>
                    </p>
                </div>

                <p>
                    Over the years, I've worked on multiple projects that allowed me to apply my skills in real-world scenarios. Some of my proudest projects include building an EEG CNN model for brain signal interpretation, benchmarking models, developing a Virtual Wardrobe AI system, and creating a Google Meet Automation Bot.
                </p>
                <br />
                <p>
                    My internship experiences at Supply Mint, TRABII, and JSW exposed me to a wide range of fields including time-series forecasting, GNN-based recommendation systems, LSTM models, and NLP with Generative AI. Each opportunity has strengthened my knowledge and given me valuable hands-on experience.
                </p>
                <br />
                <br />
                <div style={{ display: 'flex' }}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond coding, I have a deep interest in several hobbies that help me balance work and life. I enjoy music, playing video games, staying active at the gym, and engaging in intense games of chess. Each of these hobbies gives me a fresh perspective and keeps my creativity flowing.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me in 2025, still building and exploring.
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    If you'd like to connect, collaborate, or simply chat, feel free to reach out using the{' '}
                    <Link to="/contact">contact page</Link> or email me at{' '}
                    <a href="mailto:mishradiveyam@gmail.com">
                       mishradiveyam@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
