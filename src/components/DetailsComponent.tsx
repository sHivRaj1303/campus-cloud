// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";

// const DetailsComponent = ({ topic }) => {
//   console.log('topic', topic);

//   // Function to check if video is a YouTube URL
//   const isYouTubeVideo = (url) => {
//     return url?.includes("youtube.com") || url?.includes("youtu.be");
//   };

//   // Function to convert YouTube link to embeddable URL
//   const getYouTubeEmbedUrl = (url) => {
//     if (url.includes("watch?v=")) {
//       return url.replace("watch?v=", "embed/");
//     }
//     if (url.includes("youtu.be/")) {
//       return url.replace("youtu.be/", "youtube.com/embed/");
//     }
//     return url;
//   };

//   return (
//     <Grid container bgcolor="#0e121b" p={4} minHeight="93vh">
//       <Box width="100%">
//         <Typography variant="h4" sx={{ color: 'white' }} fontWeight="bold" gutterBottom>
//           {topic?.name}
//         </Typography>

//         <Typography variant="body1" color="white" gutterBottom>
//           {topic?.details}
//         </Typography>

//         {/* Image show if available */}
//         {topic?.image && (
//           <Box mt={3}>
//             <img
//               src={topic.image}
//               alt="Topic"
//               style={{
//                 height: "auto",
//                 borderRadius: "12px",
//                 objectFit: "cover",
//               }}
//             />
//           </Box>
//         )}

//         {/* Video show if available */}
//         {topic?.video && (
//           <Box mt={3}>
//             {isYouTubeVideo(topic.video) ? (
//               <iframe
//                 width="100%"
//                 height="400px"
//                 style={{
//                   borderRadius: "12px",
//                   border: "none",
//                   backgroundColor: "black",
//                 }}
//                 src={getYouTubeEmbedUrl(topic.video)}
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <video
//                 controls
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "12px",
//                   objectFit: "cover",
//                   backgroundColor: "black",
//                 }}
//               >
//                 <source src={topic.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </Box>
//         )}
//       </Box>
//     </Grid>
//   );
// };

// export default DetailsComponent;/

import React, { useEffect } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyAllIcon from "@mui/icons-material/CopyAll"; // Import the copy icon
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";  // You can choose a different theme if needed

const DetailsComponent = ({ topic }) => {
  console.log('topic', topic);

  // Function to check if video is a YouTube URL
  const isYouTubeVideo = (url) => {
    return url?.includes("youtube.com") || url?.includes("youtu.be");
  };

  // Function to convert YouTube link to embeddable URL
  const getYouTubeEmbedUrl = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }
    return url;
  };

  // Highlight code when the component mounts
  useEffect(() => {
    Prism.highlightAll();  // Apply syntax highlighting to all code blocks
  }, [topic?.codeSnippet]);

  return (
    <Grid container bgcolor="#0e121b" p={4} minHeight="93vh">
      <Box width="100%">
        <Typography variant="h4" sx={{ color: 'white' }} fontWeight="bold" gutterBottom>
          {topic?.name}
        </Typography>

        <Typography variant="body1" color="white" gutterBottom>
          {topic?.details}
        </Typography>

        {/* Image show if available */}
        {topic?.image && (
          <Box mt={3}>
            <img
              src={topic.image}
              alt="Topic"
              style={{
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Box>
        )}

        {/* Video show if available */}
        {topic?.video && (
          <Box mt={3}>
            {isYouTubeVideo(topic.video) ? (
              <iframe
                width="100%"
                height="400px"
                style={{
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "black",
                }}
                src={getYouTubeEmbedUrl(topic.video)}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  objectFit: "cover",
                  backgroundColor: "black",
                }}
              >
                <source src={topic.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Box>
        )}

        {/* Code Snippet display and copy button */}
        {topic?.codeSnippet && (
          <Box mt={3} sx={{ bgcolor: "#1f2937", padding: 1, borderRadius: "12px", position: "relative" }}>
            <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
              Code Snippet
            </Typography>
            {/* Code block with syntax highlighting */}
            <Box
              component="pre"
              sx={{
                color: "#fff",
                backgroundColor: "#111827",
                padding: 2,
                borderRadius: "8px",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                maxHeight: "300px",
                overflow: "auto",
              }}
            >
              <code className="language-javascript">
                {topic.codeSnippet}
              </code>
            </Box>
            {/* Copy Button Icon */}
            <CopyToClipboard text={topic.codeSnippet}>
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.5)" },
                }}
              >
                <CopyAllIcon sx={{ color: "#10b981" }} />
              </IconButton>
            </CopyToClipboard>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default DetailsComponent;



