import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addDoc, updateDoc, getDocs, collection, doc, getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const db: any = getFirestore();
  const navigate = useNavigate();

  const handleLearnClick = (subject) => {
    navigate(`/learning/${subject}`);
  };
  useEffect(() => {
    const fetchSubjects = async () => {
      const subjectsSnapshot = await getDocs(collection(db, "subjects")); // fixed fetching
      const subjectsList = subjectsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setSubjects(subjectsList);
      localStorage.setItem("subjects", JSON.stringify(subjectsList));
    };

    fetchSubjects();
  }, []);
  return (
    <Stack width={'100vw'} height={'100vh'} bgcolor={'#111827'}>

      <Box width={'100%'} height={'auto'} mt={'100px'} p={'20px'} display={'flex'} gap={'50px'} flexWrap={'wrap'}>
        {subjects?.map((subject: any, index: number) => (
          <Box key={index} width={'300px'} height={'250px'} bgcolor={'#1e293b'} padding={'24px'} sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} gap={'8px'} >
            <img src={subject?.subjectIcon} alt="" height={'100px'} width={'100px'} style={{ backgroundColor: 'white', borderRadius: '99%' }} />
            <Typography fontSize={'20px'} fontWeight={'bold'} color='white'>{`${subject?.subjectName} Tutorial`}</Typography>
            <Button
              variant='contained'
              sx={{ borderRadius: '9999px', bgcolor: '#7e22ce', color: 'white', fontWeight: 'bold' }}
              color='inherit'
              onClick={() => handleLearnClick(subject?.subjectName)}
            >Start learning!</Button>
          </Box>

        ))}
      </Box>

    </Stack>
  )
}

export default Home
