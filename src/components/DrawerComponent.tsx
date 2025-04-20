import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

const DrawerComponent = ({ open, topics, onTopicClick }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          marginTop: "64px", // AppBar height
          width: 250,
          bgcolor: "#121721",

        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
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
