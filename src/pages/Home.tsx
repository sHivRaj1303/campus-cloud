import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import pythonSvg from '../assets/images/python-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleLearnClick = (subject) => {
    navigate(`/learning/${subject}`);
  };
  return (
    <Stack width={'100vw'} height={'100vh'} bgcolor={'#111827'}>

      <Box width={'100%'} height={'auto'} mt={'100px'} p={'20px'} display={'flex'} gap={'50px'} flexWrap={'wrap'}>
        <Box width={'300px'} height={'250px'} bgcolor={'#1e293b'} padding={'24px'} sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} gap={'8px'} >
          <img src={pythonSvg} alt="" height={'100px'} width={'100px'} style={{ backgroundColor: 'white', borderRadius: '99%' }} />
          <Typography fontSize={'20px'} fontWeight={'bold'} color='white'>Python Tutorial</Typography>
          <Button variant='contained' sx={{ borderRadius: '9999px', bgcolor: '#7e22ce', color: 'white', fontWeight: 'bold' }} color='inherit' >Start learning!</Button>
        </Box>
        <Box width={'300px'} height={'250px'} bgcolor={'#1e293b'} padding={'24px'} sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} gap={'8px'} >
          <img src={pythonSvg} alt="" height={'100px'} width={'100px'} style={{ backgroundColor: 'white', borderRadius: '99%' }} />
          <Typography fontSize={'20px'} fontWeight={'bold'} color='white'>Python Tutorial</Typography>
          <Button variant='contained' sx={{ borderRadius: '9999px', bgcolor: '#7e22ce', color: 'white', fontWeight: 'bold' }} color='inherit'onClick={() => handleLearnClick("Java")}  >Start learning! Java </Button>
        </Box>
        <Box width={'300px'} height={'250px'} bgcolor={'#1e293b'} padding={'24px'} sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} gap={'8px'} >
          <img src={pythonSvg} alt="" height={'100px'} width={'100px'} style={{ backgroundColor: 'white', borderRadius: '99%' }} />
          <Typography fontSize={'20px'} fontWeight={'bold'} color='white'>Python Tutorial</Typography>
          <Button variant='contained' sx={{ borderRadius: '9999px', bgcolor: '#7e22ce', color: 'white', fontWeight: 'bold' }} color='inherit' >Start learning!</Button>
        </Box>


      </Box>

    </Stack>
  )
}

export default Home
