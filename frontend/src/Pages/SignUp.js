import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import Popup from "reactjs-popup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../CSS/Signup.css";

function SignUp() {
    const navigate = useNavigate();
    const [list, setList] = useState({
        name: "",
        contact: "",
        password: "",
        email: "",
        github: "",
        linkedin: "",
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        const gitusername = list.github.split("/")[3];
        console.log(gitusername);
        const linkedin_username = list.linkedin.split("/")[4];
        console.log(linkedin_username);
        console.log(list);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: list.name,
            password: list.password,
            email: list.email,
            contact: list.contact,
            github: gitusername,
            linkedIn: linkedin_username,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://localhost:3001/api/user/register", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                localStorage.setItem("User", raw);
                console.log(result);
            })
            .catch((error) => console.log("error", error));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setList({ ...list, [name]: value });
    };

    return (
        <>
            <Grid
                container
                style={{
                    padding: "15px",
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                }}
            >
                <Grid
                    item
                    style={{
                        background:
                            "linear-gradient(140.85deg, #6464CA -16.02%, rgba(128, 128, 255, 0.54) 112.29%)",
                        width: "100%",
                        height: "100%",
                        borderRadius: "7px",
                    }}
                >
                    <Grid
                        container
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                backgroundColor: "#F1F1F1",
                                width: { md: "50vw", sm: "60vw", xs: "80vw" },
                                padding: "2%",
                                borderRadius: "3.5px",
                                marginTop: "5%",
                            }}
                        >
                            <Grid
                                item
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: "3%",
                                    fontSize: "1.5em",
                                    color: "#8080FF",
                                }}
                            >
                                Sign Up
                            </Grid>
                            <Grid
                                item
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Grid
                                    container
                                    spacing={3}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        width: "100%",
                                    }}
                                >
                                    <Grid
                                        item
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            rowGap: "1.5rem",
                                        }}
                                    >
                                        <Grid
                                            container
                                            spacing={3}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "100%",
                                            }}
                                        >
                                            <Grid item md={6}>
                                                <TextField
                                                    required
                                                    label="Name"
                                                    id="name"
                                                    name="name"
                                                    value={list.name}
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField
                                                    required
                                                    label="Phone Number"
                                                    id="contact"
                                                    name="contact"
                                                    value={list.contact}
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            spacing={3}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "100%",
                                            }}
                                        >
                                            <Grid item md={6}>
                                                <TextField
                                                    required
                                                    label="Github Link"
                                                    id="github"
                                                    name="github"
                                                    value={list.github}
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField
                                                    required
                                                    label="LinkedIn Link"
                                                    id="linkedin"
                                                    name="linkedin"
                                                    value={list.linkedin}
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField
                                                    required
                                                    label="Email"
                                                    id="email"
                                                    name="email"
                                                    value={list.email}
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField
                                                    required
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={list.password}
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <p
                                    style={{
                                        textAlign: "center",
                                        fontSize: "0.89rem",
                                        color: "#1F2128",
                                    }}
                                >
                                    Already have an account?
                                    <span
                                        style={{
                                            cursor: "pointer",
                                            color: "#8080FF",
                                            fontWeight: "bold",
                                        }}
                                        onClick={() => navigate("/login")}
                                    >
                                        Login
                                    </span>
                                </p>
                            </Grid>
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
                                        width: "50%",
                                        border: "2px solid #8080FF",
                                        background: "rgba(128, 128, 255, 0.2)",
                                        marginTop: "2%",
                                        color: "#8080FF",
                                        fontWeight: "600",
                                        fontSize: "1.1em",
                                    }}
                                    onClick={handleClickOpen}
                                >
                                    Sign Up
                                </Button>
                                <Grid className="modal">
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle
                                            id="alert-dialog-title"
                                            sx={{
                                                backgroundColor: "#c3c3eb",
                                            }}
                                        >
                                            {"Permission Needed"}
                                        </DialogTitle>
                                        <DialogContent
                                            sx={{
                                                backgroundColor: "#c3c3eb",
                                            }}
                                        >
                                            <DialogContentText id="alert-dialog-description">
                                                Do you want us to access your LinkedIn data?
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions
                                            sx={{
                                                backgroundColor: "#c3c3eb",
                                            }}
                                        >
                                            <Button
                                                onClick={handleClose}
                                                sx={{
                                                    color: "black",
                                                }}
                                            >
                                                Disagree
                                            </Button>
                                            <Button
                                                onClick={handleClose}
                                                sx={{
                                                    color: "black",
                                                }}
                                                autoFocus
                                            >
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default SignUp;