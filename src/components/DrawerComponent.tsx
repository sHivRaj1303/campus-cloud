import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Divider ,
  Typography,
} from "@mui/material";

const DrawerComponent = ({ open, topics, onTopicClick, selectedSubject }) => {
  console.log('selectedSubject', selectedSubject)
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: '20vw',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          marginTop: "64px", // AppBar height
          width: '20vw',
          bgcolor: "#121721",

        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <Typography py={4} textAlign={'center'} variant="h6" color="white" fontWeight={'bold'}>{`${selectedSubject?.subjectName} Tutorial `}</Typography>

        <Divider  sx={{bgcolor:'grey'}}/>
        <List >
          {topics.map((topic, index) => (
            <ListItemButton sx={{
              color: "white",
              "&:hover": {
                bgcolor: "#1f2937", // Dark hover background
                color: "#10b981",    // Greenish text on hover
                transition: "0.3s",
              },
            }} key={index} onClick={() => onTopicClick(topic)}>
              <ListItemText sx={{ color: 'white' }} primary={topic.name} />
              <ArrowForwardIosIcon sx={{ color: "white", fontSize: 18 }} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
