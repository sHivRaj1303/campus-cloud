// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import { useParams } from "react-router-dom";
// import DrawerComponent from "../components/DrawerComponent";
// import DetailsComponent from "../components/DetailsComponent";

// const LearningPage = () => {
//   const { subjectName } = useParams();
//   const [topics, setTopics] = useState<any[]>([]);
//   const [selectedTopic, setSelectedTopic] = useState<any>(null);
//   console.log('subjectName', subjectName)

//   useEffect(() => {
//     const storedSubjects = JSON.parse(localStorage.getItem("subjects") || "[]");
//     console.log('storedSubjects', storedSubjects)


//     const subjectData = storedSubjects.find(
//       (subject: any) =>
//         subject.subjectName.trim().toLowerCase() === (subjectName?.trim().toLowerCase() ?? "")
//     );

//     console.log('subjectData', subjectData)
//     if (subjectData) {
//       // Map points to match topics format
//       const formattedTopics = subjectData.points.map((point: any) => ({
//         name: point.title,
//         details: point.description,
//         image: point.image,
//         video: point.video,
//         codeSnippet: point.codeSnippet

//       }));

//       setTopics(formattedTopics);
//       setSelectedTopic(formattedTopics[0]); // Default first topic
//     }
//   }, [subjectName]);

//   const handleTopicClick = (topic: any) => {
//     setSelectedTopic(topic);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* Sidebar Drawer */}
//       <DrawerComponent
//         open={true}
//         topics={topics}
//         onTopicClick={handleTopicClick}
//       />

//       {/* Right Side Details */}
//       <Box sx={{ marginTop: "64px", flexGrow: 1 }}>
//         {selectedTopic ? (
//           <DetailsComponent topic={selectedTopic} />
//         ) : (
//           <h2>No topic selected</h2>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default LearningPage;
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import DrawerComponent from "../components/DrawerComponent";
import DetailsComponent from "../components/DetailsComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"; // yeh tumhara firebase config export hai

const LearningPage = () => {
  const { subjectName } = useParams();
  const [topics, setTopics] = useState<any[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const q = query(
          collection(db, "subjects"),
          where("subjectName", "==", subjectName)
        );

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const subjectDoc = querySnapshot.docs[0].data();

          const formattedTopics = subjectDoc.points.map((point: any) => ({
            name: point.title,
            details: point.description,
            image: point.image,
            video: point.video,
            codeSnippet: point.codeSnippet,
          }));

          setTopics(formattedTopics);
          setSelectedTopic(formattedTopics[0]); // Default first topic
        } else {
          console.log("No subject found for:", subjectName);
        }
      } catch (error) {
        console.error("Error fetching subject:", error);
      }
    };

    if (subjectName) {
      fetchSubjects();
    }
  }, [subjectName]);

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <DrawerComponent
        open={true}
        topics={topics}
        onTopicClick={handleTopicClick}
      />

      {/* Right Side Details */}
      <Box sx={{ marginTop: "64px", flexGrow: 1 }}>
        {selectedTopic ? (
          <DetailsComponent topic={selectedTopic} />
        ) : (
          <h2>No topic selected</h2>
        )}
      </Box>
    </Box>
  );
};

export default LearningPage;

