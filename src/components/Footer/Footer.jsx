import {VetFacebook,VetTwitter,VetInstagram} from '../../assets/icons'
import React from "react"
import Logo from "../../assets/Logo"
import styles from "./Footer.module.css"
import {Container} from 'react-bootstrap'

const Footer = (props) =>{
    return(
        <div 
            className={`d-flex flex-row justify-content-between align-items-center p-4 ${!props.barState.footer && "hidden" }`}
            style={{backgroundColor:"#1A3150",position:'relative',bottom:'0'}}
        >       
        <div className={styles.logoContainer}>
            <Logo height="3rem" width="5rem" className="d-flex flex-column align-items-center"/>    
            <div className={styles.vet}>V E T</div>                             
        </div>
            <div className="d-flex flex-column">
                <div style={{color:"white",fontWeight:"bold", marginBottom:"0.5rem",fontSize:"22px"}}>
                    Company
                </div>
                <div style={{color:"white", listStyleType:"none"}} className="d-flex flex-column">
                    <a href="#" style={{textDecoration:"none",color:"white"}}>About Us</a>
                    <a href="#" style={{textDecoration:"none",color:"white"}}>Career</a>
                    <a href="#" style={{textDecoration:"none",color:"white"}}>Contact Us</a>                                        
                </div>                
            </div>
            <div className="d-flex flex-column">
                <div style={{color:"white",fontWeight:"bold", marginBottom:"0.5rem", fontSize:"22px"}}>
                    Further Information
                </div>
                <div style={{color:"white"}} className="d-flex flex-column">
                    <a href="#" style={{textDecoration:"none",color:"white"}}>About Us</a>
                    <a href="#" style={{textDecoration:"none",color:"white"}}>Career</a>
                    <a href="#" style={{textDecoration:"none",color:"white"}}>Contact Us</a>                                        
                </div>
            </div>
            <div >
                <div style={{color:"white",fontWeight:"bold", marginBottom:"0.5rem",fontSize:"22px"}}>
                    Follow Us
                </div>
                <div className="d-flex flex-row" style={{color:"white"}}>
                    <VetTwitter className="mr-2" style={{height:"2.5rem",width:"2.5rem"}}/>
                    <VetInstagram className="mr-2" style={{height:"2.5rem",width:"2.5rem"}}/>
                    <VetFacebook className="mr-2" style={{height:"2.5rem",width:"2.5rem"}}/>
                </div>
            </div>
           </div>                 
    )
}
export default Footer