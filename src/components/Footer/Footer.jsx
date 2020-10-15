import { Facebook, Instagram, Twitter } from "@material-ui/icons"
import React from "react"
import Logo from "../../assets/Logo"
import styles from "./Footer.module.css"

const Footer = () =>{
    return(
        <div className={styles.container}>            
        <div className={styles.logoContainer}>
            <Logo height="5rem" width="5rem" className={styles.logo}/>    
            <div className={styles.vet}>V E T</div>                             
        </div>
            <div className={styles.listContainer}>
                <div className={styles.listTitle}>
                    Company
                </div>
                <ul>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Contact Us</li>                    
                </ul>
            </div>
            <div className={styles.listContainer}>
                <div className={styles.listTitle}>
                    Follow Us
                </div>
                <div className={styles.icons}>
                    <Twitter />
                    <Facebook />
                    <Instagram />                          
                </div>
            </div>

        </div>                        
    )
}
export default Footer