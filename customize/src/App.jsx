import { Box, Stack } from "@mui/material"
import Active from "./components/Active"
import Table from "./components/Table"
import Data from './data.json'
function App() {
  
  return (
    <Box sx={{width:'100vw' , height:'100vh' , bgcolor:'#f0f0f0'}}>

      <Table data = {Data} /> 

    </Box>
    
    
  )
}

export default App
