import React, { useState, useEffect } from "react";
import "../css/navPanel.css";
import "../css/scrollElement.css";
import Clipboard from "clipboard";
import Photo from "./Photo.js";
import $ from "jquery";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



window.addEventListener(
	"scroll",
	event => {		
		let scrollTop = $(window).scrollTop(); // scrollTop - расстояние от вехра до viewport	+600

		// show/hide arrow and navBar
		if (scrollTop > 0) {
			$(".arrowDown").css("display", "none")
			$("#photoNameScroll")
				.css("display", "flex")
				.css("color", "white")
				.css("cursor", "pointer");
			$(".navbar").css("opacity", "1");
			$(".navbar").css("display", "flex");

		} else {
			$(".arrowDown").css("display", "block");
			$("#photoNameScroll").css("display", "none");
			$(".navbar").css("opacity", "0");
			$(".navbar").css("display", "none");
		}

		// move objects on the first page

		$('#photoOfMeMain').css('transform', `translateX(${scrollTop / 8}px)`)
		$('#firstPageText').css('transform', `translateX(-${scrollTop / 8}px)`)

	})

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	buttonsMenu: {
		textAlign: 'right',
		width: '100%',
	}
}));

export default function NavPanel() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	useEffect(() => {
		let btns = document.getElementById("btnCopy1");
		new Clipboard(btns);
	});

	console.log(open, anchorEl)

	return (
		<div className={classes.root}>
			<AppBar className="flex navbar" >
				<Toolbar>
					<div id="photoNameScroll" onClick={() =>
						window.scrollTo({
							top: $('#firstPage').position().top,
							behavior: "smooth"
						})}>
						<Photo />
						<Button>Aleksandr Gribko</Button>
					</div>

					<div id="menuForPhones">
						<Button aria-controls="menuForPhones" aria-haspopup="true" onClick={(event) => setAnchorEl(event.currentTarget)}>
							contacts
      					</Button>
						<Menu

							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={() => setAnchorEl(null)}
						>
							<MenuItem onClick={() => { document.getElementById('emailBtn').click(); setAnchorEl(null) }}>Gmail</MenuItem>
							<MenuItem onClick={() => { document.getElementById('gitBtn').click(); setAnchorEl(null) }}>Github</MenuItem>
							<MenuItem onClick={() => { document.getElementById('twitterBtn').click(); setAnchorEl(null) }}>Twitter</MenuItem>
							<MenuItem onClick={() => { document.getElementById('linkBtn').click(); setAnchorEl(null) }}>LinkedIn</MenuItem>
						</Menu>
					</div>

					<div className={classes.buttonsMenu} id='menuForPC'>

						<Tooltip
							placement="bottom"
							disableFocusListener
							title="Click to copy"
						>
							<Button
								className="navItem"
								id="btnCopy1"
								onClick={() => setOpen(true)}
								data-clipboard-text="aleks.gribko@gmail.com"
								target="_top"
							>
								gmail
									</Button>
						</Tooltip>


						<Button
							id='gitBtn'
							style={{ 'color': "white" }}
							href="https://github.com/Alezh89"
						>
							github
						</Button >

						<Button
							id='twitterBtn'
							style={{ 'color': "white" }}
							href="https://twitter.com/Alezh89"
						>
							twitter
						</Button>

						<Button
							id='linkBtn'
							style={{ 'color': "white" }}
							href="https://www.linkedin.com/in/aleksandrgribko/"
						>
							linkedin
						</Button>
					</div>
				</Toolbar>
			</AppBar >
			<div className="arrowDown" onClick={() =>
				window.scrollTo({
					top: $('#aboutSection').position().top,
					behavior: "smooth"
				})}></div>
		</div>
	);
}