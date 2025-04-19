import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  Grid,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AddSubjectDialog from "../components/AddSubjectDialog";

const TeacherDashboard = () => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("subjects") || "[]");
    setSubjects(storedSubjects);
  }, []);

  const handleAddOrEditSubject = (newSubject: any) => {
    let updatedSubjects;
    if (editIndex !== null) {
      updatedSubjects = [...subjects];
      updatedSubjects[editIndex] = newSubject;
    } else {
      updatedSubjects = [...subjects, newSubject];
    }
    setSubjects(updatedSubjects);
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
    setEditIndex(null);
  };

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#111827", minHeight: "100vh", color: "#fff" }}>
      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ mb: 3, bgcolor: "#2563eb", ":hover": { bgcolor: "#1d4ed8" } }}
        onClick={() => {
          setEditIndex(null);
          setOpenDialog(true);
        }}
      >
        Add New Subject
      </Button>

      <Grid container spacing={3}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: "#1f2937",
                color: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
                p: 2,
                transition: "transform 0.3s ease",
                ":hover": { transform: "scale(1.02)" },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap>
                  {subject.subjectName}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => handleEditClick(index)}
                  sx={{
                    color: "#60a5fa",
                    borderColor: "#60a5fa",
                    ":hover": {
                      bgcolor: "#60a5fa",
                      color: "#1f2937",
                      borderColor: "#60a5fa",
                    },
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                  size="small"
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="md">
        <AddSubjectDialog
          onClose={() => setOpenDialog(false)}
          onAddSubject={handleAddOrEditSubject}
          existingSubject={editIndex !== null ? subjects[editIndex] : null}
        />
      </Dialog>
    </Box>
  );
};

export default TeacherDashboard;
