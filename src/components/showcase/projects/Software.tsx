
// @ts-ignore
import masterverseVideo from '../../../assets/pictures/projects/software/MasterversAcharya Main Chatbot.png';
// @ts-ignore
import microservicesVideo from '../../../assets/pictures/projects/software/computer.mp4';
import Trabii from '../../../assets/pictures/projects/software/Frame 229.jpg';
// @ts-ignore
import datawarehouseVideo from '../../../assets/pictures/projects/software/image.png';
import React from 'react';
// @ts-ignore
// import masterverseVideo from '../../../assets/pictures/projects/software/masterverse.mp4';
// // @ts-ignore
// import microservicesVideo from '../../../assets/pictures/projects/software/microservices.mp4';
// // @ts-ignore
// import datawarehouseVideo from '../../../assets/pictures/projects/software/datawarehouse.mp4';
import ResumeDownload from '../ResumeDownload';
// import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
        const bronzeStyle = { color: '#cd7f32', fontWeight: 'bold' };
    const silverStyle = { color: '#78706E', fontWeight: 'bold' };
    const goldStyle = { color: '#ffd700', fontWeight: 'bold' };
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Here are some of my most impactful software engineering projects, showcasing my skills across full-stack development, microservices, and data engineering.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Trabii</h2>
                <br />
                <p>
                    Trabii is a full-stack application I built to help users find and book local events and activities.
                    Built with Flutter for frontend and FASTAPI for backend, Trabii leverages a microservices architecture to deliver a seamless user experience. 
                    The platform allows users to discover events based on their interests, book tickets, and manage their bookings seamlessly.
                    The platform connects service providers with customers through a user-friendly interface.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={Trabii} alt="Trabii user interface" style={{ width: '100%', padding: 12 }} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Trabii user interface showcasing event discovery and booking.
                        </sub>
                    </p>
                </div>
                  <h3>Key Achievements:</h3>
                <ul>
                    <li>Built and integrated a cutting-edge (Graph Neural Network)-based recommendation system, driving +60% growth in user engagement by delivering highly personalized and context-aware recommendations.</li>
                    <li>Optimized system scalability and resilience, ensuring seamless deployments across cloud-native distributed infrastructure, directly enhancing uptime, fault tolerance, and customer satisfaction.</li>
                    <li>Trabii's architecture is designed to handle high traffic and large datasets, ensuring fast response times and a smooth user experience.</li>
                    <li>The platform integrates with various third-party APIs for payment processing, event management, and user authentication.</li>
                    <li>Worked at the intersection of ML, backend engineering, and DevOps, providing end-to-end ownership of model development, deployment, and operational stability for mission-critical production systems.</li>
                </ul>
                <br />
                <h2>Masterverse Acharya</h2>
                <br />
                <p>
                    Masterverse Acharya is a full-stack web platform I developed to guide users on personalized spiritual journeys. 
                    The system allows users to explore teachings, rituals, and customized learning paths curated by spiritual mentors.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={masterverseVideo} alt="Interactive user interface from Masterverse Acharya" style={{ width: '100%', padding: 12 }} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Interactive user interface from Masterverse Acharya.
                        </sub>
                    </p>
                </div><h3>Technical Implementation:</h3>
                <ul>
                    <li>Built using React.js for the frontend, Django for the backend, and Postgres for data storage</li>
                    <li>The platform supports user authentication, recommendation engines, content management, and responsive UI design</li>
                    <li>Integrated with 3D visual elements to create an immersive learning experience</li>
                    <li>The project challenged me to handle everything from UI/UX design to cloud deployment, building a fully scalable SaaS-style product that merges modern tech with timeless spirituality</li>
                </ul>
            </div>

            {/* <div className="text-block">
                <h2>Java Microservices Platform — Distributed System Architecture</h2>
                <br />
                <p>
                    In this project, I architected and developed a microservices-based platform using Java Spring Boot, Docker, and Kubernetes, following industry best practices for scalability and maintainability.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={microservicesVideo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Microservices communication visualization.
                        </sub>
                    </p>
                </div>
                <p>
                    The system was composed of loosely coupled services handling user management, authentication (JWT), payment processing, notification services, and audit logging. Each service was containerized and deployed to a Kubernetes cluster with full CI/CD automation.
                </p>
                <p>
                    Implemented inter-service communication via REST APIs and asynchronous messaging queues (RabbitMQ), ensuring resilience, fault tolerance, and seamless horizontal scaling under heavy loads.
                </p>
            </div> */}

            <div className="text-block">
                <h2>Data Warehouse</h2>
                <h2>Medallion Architecture</h2>
                <br />
                <p>
                    This project involved architecting a modern data warehouse following the Medallion architecture pattern. The system pipelines raw, semi-processed, and fully curated datasets through Bronze, Silver, and Gold layers for maximum data integrity and analytical readiness.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={datawarehouseVideo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Data pipeline stages from ingestion to analytical readiness.
                        </sub>
                    </p>
                </div>                <h3>Architecture Layers:</h3>
                <ul>
                    <li>
                        <span style={bronzeStyle}>Bronze Layer:</span> This layer loads raw data from various sources into SQL using DDL commands. Here we define all the data types and create tables for ingestion. It ensures all source data is captured and preserved for traceability.
                    </li>
                    <li>
                        <span style={silverStyle}>Silver Layer:</span> This layer refines raw data from the Bronze layer into cleaned, structured, and business-ready datasets. It focuses on data quality, standardization, and light transformations to prepare data for analytics.
                    </li>
                    <li>
                        <span style={goldStyle}>Gold Layer:</span> This layer delivers highly curated, aggregated, and analytics-ready data tailored for specific business use cases, dashboards, and reporting. It involves advanced transformations, business logic implementations, and joins across multiple Silver tables to generate insights-rich datasets.
                    </li>
                </ul>
                <br/>                <h3>Features:</h3>
                <p>
                    Focuses on business KPIs and metrics and provides a single source of truth for analytics
                </p>
                <p>
                    Implements dimensional modeling (e.g., star or snowflake schema)
                </p>
                <p>
                    Performance optimization for downstream consumption
                    Data in the Gold layer is consumed directly by BI tools, machine learning models, and reporting systems for decision-making
                </p>
            </div>

            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
