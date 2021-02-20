import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { navigate } from 'gatsby'
import styles from './style.module.css'
import { myLocalStorage } from "../../helper"

const users = [
  {
    username: "andjela",
    password: "12345678"
  },
  {
    username: "ivana",
    password: "12345678"
  },
]

const LoginRegister = () => {
  const [open, setOpenLogin] = useState(false);
  const onOpenLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  }
  const onCloseLogin = () => setOpenLogin(false);

  const [open_two, setOpenRegister] = useState(false);
  const onOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  }
  const onCloseRegister = () => setOpenRegister(false);


  const [username, setUserName] = useState("")
  const [password, setPassword] = useState()
  const [repeatedPassword, setRepeatedPassword] = useState();
  const [email, seteMail] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
      setLoading(false)
      if (loginSuccessful) {
        myLocalStorage.setItem("loggedIn", "true")
        setOpenLogin(false)
        window.alert("Hello" + " " + username)
      }
      setError('Wrong username or password')

    }, 2000)
  }

  const submitRegister = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      if (password === repeatedPassword) {
        setLoading(false)
        myLocalStorage.setItem("loggedIn", "true")
        setOpenRegister(false)
        window.alert("Hello" + " " + username)
      }
      setError('Wrong repeated password')
    }, 2000)
  }

  const changeLogin = () => {
    window.confirm("Are you sure you want to log out");
    myLocalStorage.setItem("loggedIn", "false")
    setError(false)
    return navigate('/')
  }

  if (myLocalStorage.getItem("loggedIn") === "true") {
    return (
      <div className={styles.logoutButton}>
        <button onClick={changeLogin} className={styles.button}>Logout</button>
      </div>
    )
  }
  else return (
    <div className={styles.loginButton}>
      <button className={styles.button} onClick={onOpenLogin}>Login</button>
      <Modal open={open} onClose={onCloseLogin} center
        classNames={{
          overlay: styles.customOverlay,
          modal: styles.customModal,
        }}>

        <main className={styles.loginContainer}> LOGIN
          <section className={styles.container}>

            <input className={styles.inputStyle} name="username" placeholder="USER NAME" onChange={e => setUserName(e.target.value)} />
            <input className={styles.inputStyle} name="password" placeholder="PASSWORD" type="password" onChange={e => setPassword(e.target.value)} />
            <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
            <button className={styles.submitButton} onClick={() => submit()}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </section>
          <div className={styles.redirect}>
            <div>Don't have an account?</div>
            <button className={styles.signUpLink} onClick={onOpenRegister}>Register</button>
          </div>
        </main>
      </Modal>
      <Modal open={open_two} onClose={onCloseRegister} center
        classNames={{
          overlay: styles.customOverlay,
          modal: styles.customModal,
        }}>

        <main className={styles.loginContainer}> REGISTER
          <section className={styles.container}>
            <input className={styles.inputStyle} name="username" placeholder="USER NAME" onChange={e => setUserName(e.target.value)} />
            <input className={styles.inputStyle} type="email" name="email" placeholder="E-MAIL" onChange={e => seteMail(e.target.value)} />
            <input className={styles.inputStyle} name="password" placeholder="PASSWORD" type="password" onChange={e => setPassword(e.target.value)} />
            <input className={styles.inputStyle} name="password" placeholder="REPEAT PASSWORD" type="password" onChange={e => setRepeatedPassword(e.target.value)} />
            <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
            <button className={styles.submitButton} onClick={() => submitRegister()}>
              Register
            </button>
          </section>
          <div className={styles.redirect}>
            <div>Have an acount?</div>
            <button className={styles.signUpLink} onClick={onOpenLogin}>Login</button>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default LoginRegister