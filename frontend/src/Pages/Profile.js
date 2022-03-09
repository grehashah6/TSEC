import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import { styled } from "@mui/material/styles";
import img from "../assets/img.jfif";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import linkedin from "../assets/linkedin.jpg";
import "@fontsource/roboto/500.css";
import github from "../assets/github_img.png";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


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
		margin: 2,
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
	const [items, setItems] = useState([]);
	const [data, setData] = useState([]);

	const [lclStorage, setlclStorage] = useState([]);
	const [companyArray, setCompanyArray] = useState([]);
	const [achivementArray, setAchivementArray] = useState([]);
	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append(
			"x-rapidapi-host",
			"linkedin-profiles-and-company-data.p.rapidapi.com/"
		);
		myHeaders.append(
			"x-rapidapi-key",
			"5849f2e9c5msha2c0d9a7beb48fdp1a4187jsn9ac52e504279"
		);
		myHeaders.append("Content-Type", "application/json");
		const data = JSON.parse(localStorage.getItem("User"));
		console.log(data);
		var raw = JSON.stringify({
			profile_id: data.linkedIn,
			profile_type: "personal",
			contact_info: false,
			recommendations: false,
			related_profiles: false,
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};
		setlclStorage(JSON.parse(localStorage.getItem("User")));

		fetch(
			"https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setCompanyArray(result.position_groups);
				setItems(result.skills);
				setAchivementArray(result.awards);
				setData(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	const [lclStorage, setlclStorage] = useState([])
	const [companyArray, setCompanyArray] = useState([]);
	const [achivementArray, setAchivementArray] = useState([])
	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("x-rapidapi-host", "linkedin-profiles-and-company-data.p.rapidapi.com/");
		myHeaders.append("x-rapidapi-key", "4e99400f66msh0841618e93cd6d9p1afaa9jsn44feffc98e63");
		myHeaders.append("Content-Type", "application/json");
		const data = JSON.parse(localStorage.getItem('User'))
		console.log(data);
		var raw = JSON.stringify({
			"profile_id": data.linkedIn,
			"profile_type": "personal",
			"contact_info": false,
			"recommendations": false,
			"related_profiles": false
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		setlclStorage(JSON.parse(localStorage.getItem('User')))

		fetch("https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setCompanyArray(result.position_groups)
				setItems(result.skills)
				setAchivementArray(result.awards)
				setData(result)
			})
			.catch(error => console.log('error', error));
	}, [])

	const { classes } = props;
	const theme = useTheme();
	return (
		<>

			<Grid container spacing={3} style={{ padding: "30px" }}>
				<Grid
					item
					md={6}
					sx={{
						display: "flex",
						backgroundColor: "white",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<Card sx={{ display: "flex", padding: "15px" }}>
<Grid container spacing={1} style={{ padding: '30px' }}>
				<Grid item md={7} sx={{ display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
					<Card sx={{ display: 'flex', padding: '15px' }}>

						<CardMedia
							component="img"
							sx={{ width: 151 }}
							image={data.profile_picture}
							alt=""
						/>

						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<h3
									component="div"
									variant="h5"
									style={{ margin: "0", padding: "0" }}
								>
									{data.first_name + " " + data.last_name}
								</h3>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{lclStorage.email}
								</Typography>
							</CardContent>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={5} md={5}>
					<Box>

						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							<CardContent sx={{ flex: '1 0 auto' }}>
								<h3 component="div" variant="h5" style={{ margin: '0', padding: '0' }}>
									{data.first_name}
								</h3>
								<Typography variant="subtitle1" color="text.secondary" component="div">
									{lclStorage.email}
								</Typography>
							</CardContent>

						</Box>
					</Card>
				</Grid>
				<Grid item xs={5} md={4}>
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
								<Grid item xs={8} sm container>
									<Grid item xs container direction="column" spacing={12}>
										<Grid item xs>
											<Typography gutterBottom variant="heading">
												{data.profile_id}
											</Typography>

											<Typography>{`https://www.linkedin.com/in/${lclStorage.linkedIn}/`}</Typography>

											<Typography>{`https://www.linkedin.com/in/${lclStorage.linkedIn}}/`}</Typography>

										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid container spacing={12}>
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

												{lclStorage.github}

												khushi-mehta-290b80212

											</Typography>
											<Typography>{`https://github.com/${lclStorage.github}`}</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Box>
				</Grid>

				<Grid item xs={4}>
					<Item>
						<bold>Achievements</bold>
					</Item>
					<Item>
						<bold> {console.log(achivementArray)} </bold>
						{achivementArray
							? achivementArray.map((achivement, index) => {
									return (
										<Grid item key={index}>
											<Card>
												<CardContent>
													<div>
														<p
															style={{
																marginLeft: "0",
																marginRight: "40%",
																padding: "0",
																// fontSize: "50px",
																color: "black",
																justifyContent: "left",
																alignContent: "left",
																alignItems: "left",
															}}
														>
															{achivement.issuer}
														</p>
														<p
															style={{
																marginLeft: "40%",
																marginRight: "0",
																padding: "0",
																// fontSize: "50px",
																color: "black",
															}}
														>
															{achivement.title}
														</p>
													</div>
												</CardContent>
											</Card>
										</Grid>
									);
							  })
							: ""}
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Projects</Item>
                    <Item>No projects to watch</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Skills</Item>
					<Item>
						<bold> {console.log(data.skills)} </bold>
						{data.skills
							? data.skills.map((data, index) => {
									return (
										<Chip
											label={data}
											key={index}
											sx={{
												backgroundColor: "rgba(128, 128, 255, 0.2)",
												marginLeft: "5px",
												marginBottom: "5px",
											}}
											variant="outlined"
											avatar={
												<Avatar
													sx={{
														backgroundColor: "#212124",
														color: "black",
													}}
												>
													.
												</Avatar>
											}
										/>
									);
							  })
							: ""}
					</Item>
				</Grid>
			</Grid>
		</>
	);
}

export default withStyles(styles)(Profile);
