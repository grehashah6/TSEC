import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import img from "../assets/img.jfif";
import linkedin from "../assets/linkedin.jpg";
import "@fontsource/roboto/500.css";
import github from "../assets/github_img.png";

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 600,
		padding: theme.spacing.unit * 2,
	},
	image: {
		width: 120,
		height: 120,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	imeg: {
		width: 50,
		height: 40,
        margin:2,
	},
});
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function Profile(props) {
	const { classes } = props;
	return (
		<>
			<Grid container spacing={1} style={{ width:"100%"}}>
				<Grid item xs={7}>
					<Box sx={{ m: 5 }}>
						<Paper className={classes.root}>
							<Grid container spacing={16}>
								<Grid item>
									<ButtonBase className={classes.image}>
										<img className={classes.img} alt="complex" src={img} />
									</ButtonBase>
								</Grid>
								<Grid item xs={12} sm container>
									<Grid item xs container direction="column" spacing={12}>
										<Grid item md>
											<Typography gutterBottom variant="h5">
												Khushi-Mehta
											</Typography>
											<Typography>khushimehta795@gmail.com</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Box>
				</Grid>
				<Grid item xs={5}>
					<Box sx={{ m: 5 }}>
						<Paper className={classes.root}>
							<Grid container spacing={16}>
								<Grid item>
									<ButtonBase
										className={classes.imeg}
										src={linkedin}
										sx={{ width: "50", height: "50" }}
									>
										<img
											className={classes.imeg}
											alt="complex"
											src={linkedin}
											sx={{ width: "5", height: "5" }}
										/>
									</ButtonBase>
								</Grid>
								<Grid item xs={10} sm container>
									<Grid item xs container direction="column" spacing={12}>
										<Grid item xs >
											<Typography gutterBottom variant="heading">
                                            khushi-mehta-290b80212
											</Typography>
											<Typography>https://www.linkedin.com/in/khushi-mehta-290b80212/</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid container spacing={16}>
								<Grid item>
									<ButtonBase
										className={classes.imeg}
										src={linkedin}
										sx={{ width: "50", height: "50" }}
									>
										<img
											className={classes.imeg}
											alt="complex"
											src={github}
											sx={{ width: "5", height: "5" }}
										/>
									</ButtonBase>
								</Grid>
								<Grid item xs={10} sm container>
									<Grid item xs container direction="column" spacing={12}>
										<Grid item xs>
											<Typography gutterBottom variant="heading">
                                            khushi-mehta-290b80212
											</Typography>
											<Typography>https://github.com/khushimehta24</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Box>
				</Grid>

				<Grid item xs={4}>
					<Item><bold>Achievements</bold></Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Projects</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Skills</Item>
				</Grid>
			</Grid>
		</>
	);
}

export default withStyles(styles)(Profile);
