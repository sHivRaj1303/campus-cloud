// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Typography, CircularProgress, Box, Card, CardContent, Avatar, Grid } from "@mui/material";

const Profile = () => {
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid); // Assuming the user data is stored in the 'users' collection
                const userDoc: any = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                } else {
                    console.log("No user data found!");
                }
            } else {
                console.log("No user is signed in");
            }
            setLoading(false);
        };

        fetchUserProfile();
    }, [auth, db]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box pt={10} display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ width: 400, padding: 3, borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Grid container direction="column" alignItems="center">
                        {/* Profile Image */}
                        <Avatar
                            sx={{ width: 120, height: 120, mb: 2 }}
                            src={userData?.photoURL || "/path/to/placeholder-image.jpg"} // Image or placeholder
                        />
                        {/* User Info */}
                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                            {userData?.name || "Your Name"}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            <strong>Email:</strong> {userData?.email || "email@example.com"}
                        </Typography>
                        {/* Add other user details here */}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Profile;
