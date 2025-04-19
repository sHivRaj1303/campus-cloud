import React from "react";
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
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {topics.map((topic, index) => (
            <ListItemButton key={index} onClick={() => onTopicClick(topic)}>
              <ListItemText primary={topic.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
