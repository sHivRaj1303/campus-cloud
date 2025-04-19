import React, { useState } from "react";
import {
    Box,
    Tabs,
    Tab,
    TextField,
    Button,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(0);
    const [role, setRole] = useState<"student" | "teacher">("student");

    // Common Fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Extra Fields
    const [rollNumber, setRollNumber] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [name, setName] = useState("");

    // Validation States
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        setErrors({});
    };

    const handleRoleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRole(event.target.value as "student" | "teacher");
        setErrors({});
    };

    const validateLogin = () => {
        let tempErrors: { [key: string]: string } = {};
        if (!email) tempErrors.email = "Email is required.";
        if (!password) tempErrors.password = "Password is required.";
        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const validateRegister = () => {
        let tempErrors: { [key: string]: string } = {};
        if (!name) tempErrors.name = "Name is required.";
        if (!email) tempErrors.email = "Email is required.";
        if (!password) tempErrors.password = "Password is required.";

        if (role === "student" && !rollNumber) tempErrors.rollNumber = "Roll Number is required.";
        if (role === "teacher" && !employeeId) tempErrors.employeeId = "Employee ID is required.";

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleLogin = () => {
        if (validateLogin()) {
            console.log("Login Data", { email, password, role });
            navigate("/home");
            alert("Login Successful!");
        }
    };

    const handleRegister = () => {
        if (validateRegister()) {
            console.log("Registration Data", { name, email, password, role, rollNumber, employeeId });
            alert("Registration Successful!");
            navigate("/home");
        }
    };

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#f0f2f5", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: 400, bgcolor: "white", borderRadius: 3, boxShadow: 3, p: 4 }}>
                <Tabs value={activeTab} onChange={handleTabChange} centered>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>

                {/* Role Selector */}
                <FormControl fullWidth sx={{ mt: 3 }}>
                    <InputLabel>Role</InputLabel>
                    <Select value={role} label="Role" onChange={() => { handleRoleChange }}>
                        <MenuItem value="student">Student</MenuItem>
                        <MenuItem value="teacher">Teacher</MenuItem>
                    </Select>
                </FormControl>

                {/* Register Form */}
                {activeTab === 1 && (
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                )}

                {/* Common Fields */}
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                />

                {/* Role-specific Fields */}
                {activeTab === 1 && role === "student" && (
                    <TextField
                        fullWidth
                        label="Roll Number"
                        margin="normal"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        error={!!errors.rollNumber}
                        helperText={errors.rollNumber}
                    />
                )}

                {activeTab === 1 && role === "teacher" && (
                    <TextField
                        fullWidth
                        label="Employee ID"
                        margin="normal"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        error={!!errors.employeeId}
                        helperText={errors.employeeId}
                    />
                )}

                {/* Submit Button */}
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={activeTab === 0 ? handleLogin : handleRegister}
                >
                    {activeTab === 0 ? "Login" : "Register"}
                </Button>

                {/* Footer Text */}
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    {activeTab === 0 ? "Don't have an account?" : "Already have an account?"}{" "}
                    <Button onClick={() => setActiveTab(activeTab === 0 ? 1 : 0)}>
                        {activeTab === 0 ? "Register" : "Login"}
                    </Button>
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
