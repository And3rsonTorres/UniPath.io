// React
import * as React from "react";
import Image from 'next/image'

// Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import SchoolIcon from "@mui/icons-material/School";
import AppBarComponent from "@/components/AppBar/AppBar";

/**
 * LandingPage is a React component that renders the landing page of the application.
 * It includes an AppBar with navigation buttons, a Hero section, a Features section, and a Footer.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function LandingPage() {
    return (
        <Box>
            {/* AppBar */}
            <AppBarComponent isLandingPage={true}/>
            {/*<AppBar position="static" color="transparent" elevation={0}>*/}
            {/*    <Toolbar>*/}
            {/*        /!* Logo *!/*/}
            {/*        <img*/}
            {/*            src="/favicon.png"*/}
            {/*            alt="UniPath.io Logo"*/}
            {/*            style={{ height: "50px", marginRight: "10px" }}*/}
            {/*        />*/}
            {/*        <Typography*/}
            {/*            variant="h6"*/}
            {/*            noWrap*/}
            {/*            sx={{*/}
            {/*                mr: 2,*/}
            {/*                display: { xs: "none", md: "flex" },*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            UniPath.io*/}
            {/*        </Typography>*/}

            {/*        /!* This pushes everything after it to the right *!/*/}
            {/*        <Box sx={{ flexGrow: 1 }} />*/}

            {/*        /!* Buttons *!/*/}
            {/*        <Box>*/}
            {/*            <Button color="inherit" href="/home">*/}
            {/*                About*/}
            {/*            </Button>*/}
            {/*            <Button color="inherit" href="/signin">*/}
            {/*                Login*/}
            {/*            </Button>*/}
            {/*            <Button color="inherit" href="/signup">*/}
            {/*                Sign Up*/}
            {/*            </Button>*/}
            {/*        </Box>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}

            {/* Hero Section */}
            <Box sx={{p: {xs: 3, sm: 5, md: 10}}}>
                {" "}
                {/* Responsive padding */}
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Text Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" gutterBottom>
                            Plan Your Academic Journey with UniPath.io
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Create and share your class schedules easily.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            href="/home"
                        >
                            Get Started
                        </Button>
                    </Grid>

                    {/* Responsive Image */}
                    <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                        <img
                            src="https://wp-assets.infinum.com/uploads/2019/11/easy-way-to-implement-demo-mode-in-ios-apps-0.jpeg"
                            alt="Demo"
                            style={{width: "100%", height: "100%"}}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Features Section */}
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Features
                </Typography>
                <Grid container spacing={4} alignItems="stretch">
                    {/* Degree Path Planning */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Degree Path Planning
                                </Typography>
                                <Typography variant="body1">
                                    Craft a detailed degree plan by manually
                                    entering courses, defining your academic
                                    goals, and structuring your semesters ahead.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Visual Progress Tracking */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Visual Progress Tracking
                                </Typography>
                                <Typography variant="body1">
                                    Get a clear visual representation of your
                                    academic journey, with color-coded progress
                                    indicators for completed, current, and
                                    planned courses.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Requirement Mapping */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Requirement Mapping
                                </Typography>
                                <Typography variant="body1">
                                    Input and manage degree requirements to
                                    ensure all academic goals are met and your
                                    pathway remains on track.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Course Dependencies */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Course Dependencies
                                </Typography>
                                <Typography variant="body1">
                                    Define and visualize prerequisites and
                                    co-requisites to understand course sequences
                                    and validate your academic plan.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Interactive Pathway Validation */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Interactive Pathway Validation
                                </Typography>
                                <Typography variant="body1">
                                    Our system will analyze your plan to confirm
                                    the validity of your course sequence,
                                    ensuring you meet all necessary academic
                                    criteria.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Collaborative Planning */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Collaborative Planning
                                </Typography>
                                <Typography variant="body1">
                                    Share your degree pathway with peers and
                                    advisors, allowing for collaborative
                                    planning and feedback.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Pathway Comparison */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Pathway Comparison
                                </Typography>
                                <Typography variant="body1">
                                    Compare your academic plan with others to
                                    explore different pathways and find the best
                                    fit for your educational aspirations.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Community Engagement */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <SchoolIcon fontSize="large"/>
                                <Typography variant="h5">
                                    Community Engagement
                                </Typography>
                                <Typography variant="body1">
                                    Engage with a community of students
                                    navigating their own academic paths, share
                                    insights, and gain inspiration from others&apos;
                                    progress.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* More sections go under here */}

            {/* Footer */}
            <Box sx={{bgcolor: "background.paper", p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    UniPath.io - Your Path to Academic Success
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Helping you navigate your educational journey.
                </Typography>
            </Box>
        </Box>
    );
}
