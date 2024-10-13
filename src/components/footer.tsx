import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#f5f5f5", mt: 10 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}>
                    <Typography
                        mt={4}
                        variant="h4"
                        sx={{
                            fontSize: "28px",
                            color: "#666666",
                            textAlign: "center",
                            fontFamily: "Book Antiqua",
                        }}
                    >
                        STAY CONNECTED
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            textAlign: "center",
                            fontSize: "14px",
                            color: "#666666",
                            fontWeight: 'bold',
                            mt: 2
                        }}
                    >
                        DON’T MISS OUT ON THE LATEST NEWS!
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                    >


                        <Button
                            sx={{
                                padding: "7px",
                                border: "4px solid #4f7f38",
                                color: "#000",
                                background: "#f3f6f5",
                                height: "40px",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                outline: "0",
                                fontSize: "13px",
                                fontFamily: "Arial",
                                lineHeight: "1.42857143",
                                fontWeight: "normal",
                                marginTop: "20px",
                                width: "150px",
                                display: "inline-block",
                                paddingTop: "9px",

                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>


                    <Typography variant="h6"
                        sx={{
                            fontFamily: 'arial',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#666666',
                            marginTop: 4,
                            textAlign: "left",
                        }}>
                        Contact
                    </Typography>
                    <Box gap={1} 
                    mt={1}
                     sx={{
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#666666",
                        fontWeight: 'bold',
                       
                        
                    }}
                    >

                        <CallIcon />
                        (703) 466-0011
                    </Box>
                    <Box gap={1}
                     mt={1}
                      sx={{
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#666666",
                        fontWeight: 'bold',
                        
                    }}
                    >

                        <EmailIcon />
                        info@insssc.com
                    </Box>
                </Grid>
            </Grid>
            <Box
            mt={4}
            sx={{

             textAlign:'center',
             fontSize: "14px",
             color: "#000",
             fontfamily: "calibri",
             background: "linear-gradient(to bottom, #f3f6f5, #e8e8e8)",
             backgroundimage: "-webkit-linear-gradient(top, #f3f6f5, #e8e8e8)",
             padding: "10px",
             border: "1px solid #f0f0f0",
            }}>
                <Typography variant="body2">
                    All contents © 2024 SyllabusX, Inc. All Rights Reserved 
                  
                </Typography>
                <Typography variant="body2">
                    Privacy PolicyRefund Policy Delegate Cancellations & Transfer
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
