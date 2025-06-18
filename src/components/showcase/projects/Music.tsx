import React from 'react';
import ResumeDownload from '../ResumeDownload';
import EEG from '../../../assets/pictures/projects/audio/eeg.webp';
import BNW from '../../../assets/pictures/projects/audio/BNW.png';
export interface AIProjectsProps {}

const AIProjects: React.FC<AIProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>AI & Machine Learning</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Here are some of my most challenging and technically rewarding AI/ML projects I've built across computer vision, deep learning, and healthcare domains.
            </p>
            <br />
            <ResumeDownload />
            <br />

            <div className="text-block">
                <h2>TBI Patient Classification (EEG)</h2>
                <img src={EEG}  style={{ width: '60%', padding: 12 }}/>
                <br />
                <p>
                    Developed a robust deep learning pipeline to classify patients with mild traumatic brain injury (m-TBI) using EEG signal data.
                </p>
                <p>
                    Leveraged Continuous Wavelet Transform (CWT) for EEG signal preprocessing, transforming time-series data into frequency domain images.
                </p>
                <p>
                    Trained a custom Convolutional Neural Network (CNN) model achieving <b>76% classification accuracy</b> on the clinical dataset.
                </p>
                <p>
                    Performed neural architecture optimization, selecting <b>batch size 32</b> and <b>learning rate 0.001</b> for peak performance.
                </p>
            </div>

            <div className="text-block">
                <h2>Black & White Image Colorization (Computer Vision)</h2>
                <br />
                <p>
                    Implemented a paper-to-code project that transforms black and white images into colorized versions using deep learning techniques.
                    <a href='https://arxiv.org/pdf/1603.08511v5'target="_blank" rel="noopener noreferrer"> link to paper</a>
                </p>
                <p>
                    Built a colorization model using CNNs to convert grayscale images into vibrant color versions.
                </p>
                <img src={BNW}  style={{ width: '80%', padding: 12 }}/>
                <p>
                    Restructured neural networks to work in LAB color space, producing superior perceptual color fidelity.
                </p>
                <p>
                    Trained the system on the Scene Understanding dataset, successfully handling diverse real-world image scenarios and achieving a <b>precision score of 56%</b>.
                </p>
            </div>

            <div className="text-block">
                <h2>Fashion Fit</h2>
                <br />
                <p>
                    Designed a deep learning pipeline for virtual clothing try-on systems, accurately detecting garments and visualizing clothing combinations on user images.
                </p>
                <p>
                    Employed object detection and segmentation models for precise clothing boundaries.
                </p>
                <p>
                    Optimized processing speeds by leveraging <b>CUDA acceleration</b>, delivering a <b>40% boost in rendering performance</b> for smoother virtual try-on experiences.
                </p>
            </div>

            <ResumeDownload />
        </div>
    );
};

export default AIProjects;
