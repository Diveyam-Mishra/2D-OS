import React from 'react';
import Travel from "../../../assets/pictures/projects/art/image.png";
export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Design & Side</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development,
                    Design and Exploring new fields will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the curious side of me alive. I'm always looking to
                    push myself creatively and learn new things.
                </p>
            </div>
            <div className="text-block">
                <h2>Blockchain</h2>
                <br />
                {/* <img src={Travel}/> */}
                <p>
                    I built a blockchain-based savings app that helps users
                    save money for their goals. The app allows users to
                    create savings goals, track their progress, and earn
                    interest on their savings.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Eight Frame Run cycle animated by
                            myself, original sprite by kevink
                        </sub>
                    </p>
                </div> */}
                <p>
                    This page is currently a work in progress. I've recently
                    found myself wanting to make more pixel art recently and I
                    have some project plans and ideas in the works. Expect
                    updates to this page as I dive back into the world of pixel
                    art!
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
