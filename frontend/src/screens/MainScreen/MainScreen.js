import React from 'react'
import styles from './MainScreenStyle.module.css'
import Header from '../../components/Header/Header'
import Topics from './components/Topics/Topics'
import Discussions from './components/Discussions/Discussions'
export default function MainScreen() {
    return (
        <div >
            <Header />
            <div className={styles.container}>
                <p>loremgdfgdfgdfdfgdfgdf
                    fdgfdgdfgdf
                    dfgdfg
                    dfgdfgdfgd
                    fdgfdgdfgdfdfgdfgdfg
                </p>
                <span>dsfsdfsdfsdfsd</span>
                <Topics />
                <Discussions />
            </div>
        </div>
    )
}