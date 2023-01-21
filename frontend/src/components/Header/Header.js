import React from "react";
import styles from './Header.module.css'
import { TextField } from "@mui/material";
export default function Header() {
    return(
        <div className={styles.container}>

            <div>
                <h1>Home</h1>
            </div>
            <TextField id="filled-basic" label="Search" variant="outlined" />
            <div className={styles.auth}>
                <h2>login</h2>
                <h2>logup</h2>
                <div className={styles.avatar}>
             
             </div>
            </div>
           
           
       
        </div>
    )
}
