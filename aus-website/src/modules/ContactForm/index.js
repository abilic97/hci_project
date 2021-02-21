import React, { useState } from 'react';
import styles from './style.module.css';
import MapImage from '../../components/Images/MapImage/MapImage'


const ContactForm = () => {
    const [fName, setFirstName] = useState("")
    const [lName, setLastName] = useState("")
    const [eMail, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const fakeSend = () => {
        if (fName === "" || lName === "" || eMail === "" || msg === "") {
            window.alert("Please fill all of the fields before submit!")
        }
        else {
            window.alert("Message sent successfully!")
        }
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.conactSend}>
                <h2>Send us a question</h2>

                <div>
                    <input className={styles.input} name="firstname" type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <input className={styles.input} name="lastname" type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                </div>
                <div>
                    <input className={styles.input} name="email" type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input className={styles.inputMsg} name="message" type="text" placeholder="Type your message here" onChange={e => setMsg(e.target.value)} />
                </div>
                <button onClick={fakeSend} className={styles.submitButton}>Send a message</button>
            </div>
            <div className={styles.contactInPerson}>
                <h2>Contact us in person</h2>
                <div>
                    <MapImage />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.contactInfo}>Address:
            <div className={styles.information}> Ul. Ruđera Boškovića 32, 21000, Split, FESB</div>
                    </div>
                    <div className={styles.contactInfo}>Office/Labaratory:
            <div className={styles.information}>C519</div>
                    </div>
                    <div className={styles.contactInfo}>Accepting visits:
            <div className={styles.information}>17:00 - 19:00, every Tuesday</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactForm