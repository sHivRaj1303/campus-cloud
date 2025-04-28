import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const AddSubjectDialog = ({ onClose, onAddSubject, existingSubject }) => {
  const [subjectName, setSubjectName] = useState(existingSubject?.subjectName || "");
  const [points, setPoints] = useState(existingSubject?.points || []);
  const [subjectIcon, setSubjectIcon] = useState(existingSubject?.subjectIcon || "");

  // Handle adding a new point
  const handleAddPoint = () => {
    const newPoint = { title: "", description: "", image: "", video: "", codeSnippet: "" };
    setPoints((prevPoints) => [...prevPoints, newPoint]);
  };

  // Handle removing a point
  const handleRemovePoint = (index) => {
    const updatedPoints = points.filter((_, i) => i !== index);
    setPoints(updatedPoints);
  };

  // Handle updating a point's data
  const handleChange = (index, field, value) => {
    const updatedPoints = [...points];
    updatedPoints[index][field] = value;
    setPoints(updatedPoints);
  };

  const handleSubmit = () => {
    if (subjectName.trim() && points.length > 0 && points.every(point => point.title.trim() && point.description.trim())) {
      onAddSubject({ subjectName, subjectIcon, points });
      onClose();
    } else {
      alert("Please make sure all points have a title and description.");
    }
  };

  useEffect(() => {
    console.log("Points in state:", points);
  }, [points]);

  return (
    <Box sx={{ p: 3, backgroundColor: "#111827", color: "#fff" }}>
      <Typography variant="h5" gutterBottom>
        {existingSubject ? "Edit Subject" : "Add New Subject"}
      </Typography>

      <TextField
        label="Subject Name"
        fullWidth
        variant="filled"
        sx={{ mb: 2 }}
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "#9ca3af" } }}
      />
      {/* 🆕 Subject Icon Upload */}
      <Button
        color="inherit"
        component="label"
        variant="outlined"
        sx={{margin:'16px 16px 16px 0' }}
      >
        Upload Subject Icon
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={(e: any) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setSubjectIcon(reader.result); // store base64 image
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </Button>

      {subjectIcon && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Preview:
          </Typography>
          <img src={subjectIcon} alt="Subject Icon Preview" style={{ maxWidth: "100px", height: "auto" }} />
        </Box>
      )}



      {points.map((point, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: "#1f2937" }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }} color="#66d9ef">
            Edit Point {index + 1}
          </Typography>
          <TextField
            label="Title"
            fullWidth
            variant="filled"
            sx={{ mb: 1 }}
            value={point.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#9ca3af" } }}
            required
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            minRows={3}
            variant="filled"
            sx={{ mb: 1 }}
            value={point.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#9ca3af" } }}
            required
          />
          <TextField
            label="Image URL (Optional)"
            fullWidth
            variant="filled"
            sx={{ mb: 1 }}
            value={point.image}
            onChange={(e) => handleChange(index, "image", e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#9ca3af" } }}
          />
          <TextField
            label="Video URL (Optional)"
            fullWidth
            variant="filled"
            sx={{ mb: 1 }}
            value={point.video}
            onChange={(e) => handleChange(index, "video", e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#9ca3af" } }}
          />
          {/* New Code Snippet field */}
          <TextField
            label="Code Snippet (Optional)"
            fullWidth
            multiline
            minRows={5}
            variant="filled"
            sx={{ mb: 1 }}
            value={point.codeSnippet}
            onChange={(e) => handleChange(index, "codeSnippet", e.target.value)}
            InputProps={{
              style: { color: "white", fontFamily: "monospace" }
            }}
            InputLabelProps={{ style: { color: "#9ca3af" } }}
          />
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => handleRemovePoint(index)}
            sx={{ color: "red", mt: 1 }}
          >
            Remove Point
          </Button>
        </Paper>
      ))}

      <Button
        startIcon={<AddCircleIcon />}
        onClick={handleAddPoint}
        variant="outlined"
        sx={{margin:'16px 16px 16px 0' }}
      >
        Add Another Point
      </Button>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddSubjectDialog;

