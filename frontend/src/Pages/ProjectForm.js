import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DateRangePicker from "@mui/lab/DateRangePicker";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import "../CSS/ProjectForm.css";

function ProjectForm() {
	const navigate = useNavigate();
	const [list, setList] = useState({
		lighting: "",
		openness: "",
		visibility: "",
		people: "",
		security: "",
		walkpath: "",
		public_transportation: "",
		public_usage: "",
		feeling: "",
	});
	const [items, setItems] = useState([]);
	const [show, setShow] = useState(false);
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValue(e.target.value);
		setList({ ...list, [name]: value });
	};

	const handleAuditForm = (e) => {
		e.preventDefault();
	};
	const handleDelete = () => {
		console.info("You clicked the delete icon.");
	};

	const [value, setValue] = useState([null, null]);

	return (
		<>
			<Grid
				container
				style={{
					backgroundColor: "#6464CA",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
					width: "100%",
				}}
			>
				<Grid
					item
					style={{
						backgroundColor: "white",
						padding: "50px",
						marginTop: "120px",
						marginBottom: "40px",
						borderRadius: "7px",
					}}
				>
					<p
						style={{
							textAlign: "center",
							fontSize: "1.89rem",
							color: "#1F2128",
						}}
					>
						<bold>
							<center>Project Details</center>
						</bold>
						<hr></hr>
					</p>
					<Grid
						container
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							columnGap: "40px",
							marginBottom: "20px",
							width: "100%",
						}}
					>
						<Grid item style={{ width: "100%" }}>
							<TextField
								id="standard-basic"
								label="Project Name"
								variant="standard"
								width="100%"
							/>
						</Grid>
						<Grid item style={{ width: "100%" }}>
							<TextField
								id="standard-textarea"
								label="Skills"
								placeholder="Placeholder"
								multiline
								variant="standard"
							/>
						</Grid>
						<Grid item style={{ width: "100%" }}>
							<TextField
								id="standard-multiline-static"
								label="Project Description"
								multiline
								rows={4}
								// defaultValue="Default Value"
								variant="standard"
							/>
						</Grid>
						<Grid item style={{ width: "100%", marginTop: "10px" }} md={12}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DateRangePicker
									startText="Check-in"
									endText="Check-out"
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(startProps, endProps) => (
										<React.Fragment>
											<TextField {...startProps} />
											<Box sx={{ mx: 2 }}> to </Box>
											<TextField {...endProps} />
										</React.Fragment>
									)}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item style={{ width: "100%" }}>
							<TextField
								id="standard-basic"
								label="Figma Link"
								variant="standard"
							/>
						</Grid>
					</Grid>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							columnGap: "40px",
							marginBottom: "20px",
						}}
					></div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							columnGap: "40px",
							marginBottom: "20px",
						}}
					></div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							columnGap: "40px",
							marginBottom: "20px",
						}}
					></div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							columnGap: "40px",
							marginBottom: "20px",
						}}
					></div>

					<Grid
						item
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button
							style={{
								width: "87%",
								height: "45px",
								border: "2px solid #8080FF",
								color: "#8080FF",
								marginTop: "2%",
								background: "rgba(128, 128, 255, 0.2)",
								fontWeight: "600",
								fontSize: "1.1em",
							}}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default ProjectForm;
