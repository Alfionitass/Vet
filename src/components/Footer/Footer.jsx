import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import React from "react"
import Logo from "../../assets/Logo"
import styles from "./Footer.module.css"
import {Container} from 'react-bootstrap'

const Footer = () =>{
    return(
        <div style={{paddingLeft:'2rem', paddingRight:'2rem',backgroundColor:"#1A3150",paddingTop:'1rem',paddingBottom:'1rem', }}                
        >
        <div 
            className="d-flex flex-row justify-content-between align-items-center" 
            style={{backgroundColor:"#1A3150",position:'relative',bottom:'0', paddingLeft:'2rem',paddingRight:'2rem'}}
            >        
        <div className={styles.logoContainer}>
            <Logo height="3rem" width="5rem" className="d-flex flex-column align-items-center"/>    
            <div className={styles.vet}>V E T</div>                             
        </div>
            <div className="d-flex flex-column">
                <div style={{color:"white",fontWeight:"bold", marginBottom:"0.5rem",fontSize:"22px",fontStyle:'roboto'}}>
                    Company
                </div>
                <div style={{color:"white", listStyleType:"none"}} className="d-flex flex-column">
                    <a href="#" style={{textDecoration:"none",color:"white"}}>About Us</a>
                    <a href="#" style={{textDecoration:"none",color:"white"}}>Career</a>
                    <a href="#" style={{textDecoration:"none",color:"white"}}>Contact Us</a>                                        
                </div>                
            </div>
            <div className="d-flex flex-column">
                <div style={{color:"white",fontWeight:"bold", marginBottom:"0.5rem", fontSize:"22px",fontStyle:'roboto'}}>
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
                    <AiOutlineTwitter className="mr-2" style={{height:"2.5rem",width:"2.5rem"}}/>
                    <AiOutlineInstagram className="mr-2" style={{height:"2.5rem",width:"2.5rem"}}/>
                    <AiOutlineFacebook className="mr-2" style={{height:"2.5rem",width:"2.5rem"}}/>
                </div>
            </div>
           </div>                 
            </div>
    )
}
export default Footer