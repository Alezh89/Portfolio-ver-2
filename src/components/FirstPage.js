import React, { useState, useEffect } from "react";
import "../css/firstPage.css";
import $ from "jquery";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Clipboard from "clipboard";

import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(3, 2),
    },
}));

export default function FirstPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(null);
 
    useEffect(() => {
        let btns = document.getElementById("btnCopy2");
        new Clipboard(btns);
    });

    return (
        <div id="firstPage">
            <div className="mainPageBackground"></div>
            <div className="mainPageBackground secondPartBackground"></div>
            <div id='firstPageText' style={{ color: "white" }}>
                <div style={{ 'paddingTop': 'auto', 'paddingBottom': 'auto' }}>
                    <p className="animated slideInLeft nameMain" >

                Aleksandr Gribko
                        
                    </p>
                    <p className="animated slideInLeft helloText" style={{'marginBottom': '10px'}}>
                        Front-end developer 
			</p>
            <p className="animated slideInLeft helloText"style={{'marginTop': '10px'}} >
                        based in France
			</p>
            
                    <div className="animated slideInLeft">
                    <Button variant="contained" color="secondary" className={classes.button}

                        target="_blank"
                        rel="noopener noreferrer"
                        href={require("../materials/CV_AleksandrGribko.pdf")}
                    >
                        Download my CV
                    </Button>
                    <Button variant="contained" className={classes.button}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                            window.scrollTo({
                                top: $('#projectsSector').position().top,
                                behavior: "smooth"
                            })}
                    >
                        projects
                    </Button>
                    </div>
                    <div className="contactField animated slideInLeft">
                        <p className="animated slideInLeft helloText">My contacts:</p>

                        <a
                            className="contactButton animated slideInRight"
                            href="https://www.facebook.com/aleksandr.gribko"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="contactButton animated slideInRight"
                            href="https://www.linkedin.com/in/aleksandrgribko/"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            className="contactButton animated slideInRight"
                            href="https://twitter.com/Alezh89"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="contactButton animated slideInRight"
                            href="https://github.com/Alezh89"
                        >
                            <i className="fab fa-github" />
                        </a>

                        <div>                        
                                    <Tooltip
                                        placement="right" 
                                        disableFocusListener                                        
                                        title="Click to copy"
                                    >
                                        <Button
                                            id="btnCopy2"
                                            data-clipboard-text="aleks.gribko@gmail.com"
                                           
                                            className=" animated slideInRight contactButton"
                                        >
                                            aleks.gribko@gmail.com
										</Button>
                                    </Tooltip>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div id='firstPagePhoto' className='animated slideInRight'>
                <img
                    id="photoOfMeMain"
                    src={require("./../materials/mainGreen.png")}
                    alt='Aleksandr Gribko'
                />
            </div>
        </div>

    );
}

