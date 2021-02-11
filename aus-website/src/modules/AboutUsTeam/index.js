import React from 'react'

import TeamPicture from '../../components/Images/TeamPicture/TeamPicture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import styles from './style.module.css'

const AboutUsTeam = () => (
    <section className={styles.mainContainer}>
        <div className={styles.teamTitle}>Our team</div>
        <div className={styles.mainTeamContainer}>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team1.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Ivan Ivić</div>
                    <div>President</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="duje.jpeg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Duje Lukovic</div>
                    <div>Pilot</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team2.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Lucija Banek</div>
                    <div>Software</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team4.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Marija Marić</div>
                    <div>Communications</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team3.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Ana Anić</div>
                    <div>Mechanical</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team10.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Bernard Jukić</div>
                    <div>Mentor</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team6.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Branko Klarić</div>
                    <div>Mehanical</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team9.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Ivana Nikolić</div>
                    <div>Electronics</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team7.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Matko Ivanović</div>
                    <div>Electronics</div>
                </div>
            </div>
            <div className={styles.teamMemberContainer}>
                <div className={styles.pictureContainer}>
                    <TeamPicture fileName="team8.jpg"></TeamPicture>
                    <div className={styles.overlay}>
                        <div className={styles.socialIconContainer}>
                            <a href="https://facebook.com/"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} color="#D3AC2B" /></a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} color="#D3AC2B" /> </a>
                            <a href="https://facebook.com/"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} color="#D3AC2B" /> </a>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>Tea Matić</div>
                    <div>Secretary</div>
                </div>
            </div>
        </div>
    </section>
)

export default AboutUsTeam