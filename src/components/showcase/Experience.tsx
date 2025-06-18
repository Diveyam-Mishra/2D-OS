import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Cybersolve</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://cybersolve.com/'}
                        >
                            <h4>www.cybersolve.com/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Summer 2025 - Fall 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    AI Agent development targeted towards customers dealing with the issues of IGA 
                    (Identity Governance and Administration), Cybersolve is a
                    platform that provides a comprehensive solution for managing
                    and securing user identities across various systems and
                    applications. It offers features such as user provisioning,
                    access control, compliance reporting, and identity lifecycle
                    management, all designed to streamline identity management
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected a fully automated browser-based AI Agent 
                            leveraging real-time browser automation, 
                            enabling seamless cross-application integration where traditional 
                            APIs were unavailable drastically reducing manual intervention and human error.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built a scalable deployment architecture on 
                            AWS EC2 clusters, designed to handle concurrency for over 500,000 
                            ctive users in production, ensuring enterprise-grade 
                            reliability and uptime for identity governance across fragmented SaaS ecosystems.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated AI Agent with Cybersolve’s core IGA platform, enabling intelligent orchestration of 
                            user provisioning, compliance reporting, 
                            access control audits, and lifecycle management across highly disconnected enterprise applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            Directed and executed an internal migration of 3
                            individual repositories to a single monorepo,
                            greatly reducing overhead for developing new
                            features, fixing bugs, and managing dependencies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Delivered full-stack end-to-end solution including AI model fine-tuning, 
                            backend orchestration, browser-session virtualization, and cloud infrastructure 
                            directly reducing onboarding time for large enterprise clients by over 75%.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>SupplyMint</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.supplymint.com/'}
                        >
                            <h4>www.supplymint.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Data Science Intern</h3>
                        <b>
                            <p>Fall 2024 - Spring 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed the end to end solution for supplychain demand 
                    that efficiently allocate inventory across your network to maximize availability and minimize stockouts. 
                    Allokator uses intelligent algorithms to balance demand and supply seamlessly.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Optimize inventory allocation with real-time insights.
                        </p>
                    </li>
                    <li>
                        <p>
                             Delivered executive-facing dashboards and visualizations, providing actionable business insights to stakeholders and driving data-driven 
                             decision making across multiple Fortune-500 client accounts.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engineered hybrid statistical-ML forecasting pipelines incorporating LSTM, ARIMA, and Prophet models, 
                            enabling more accurate multi-seasonal forecasting across highly volatile product categories.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and built the MCP tool, a custom NLP-powered system capable of translating natural language queries 
                            into complex SQL queries, 
                            enabling non-technical users to interact with enterprise databases intuitively.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>JSW</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.jsw.in/energy'}
                        >
                            <h4>www.jsw.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Data Analyst Intern</h3>
                        <b>
                            <p>Summer 2024-Fall 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    JSW Energy is a leading power producer in India, with a
                    diverse portfolio of power generation assets across thermal,
                    hydro, and renewable energy sources. The company is committed
                    to sustainable energy solutions and aims to contribute to the
                    country's energy security.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Collaborated cross-functionally with operations, analytics, and engineering teams, delivering production-grade forecasting solutions that enhanced decision-making across multiple business units.
                        </p>
                    </li>
                    <li>
                        <p>
                             implemented an end-to-end data extraction pipeline, automatically aggregating data from over 500+ complex PDF documents using Google APIs and Tabula, transforming fragmented data into a unified Excel dataset, improving reporting efficiency for 10+ key stakeholders.
                        </p>
                    </li>
                    </ul>
                </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
