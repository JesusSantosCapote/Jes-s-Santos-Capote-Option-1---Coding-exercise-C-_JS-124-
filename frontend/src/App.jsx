import { Box } from '@mui/material';
import UserDashboard from './components/UserDashboard';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Box>
      <SnackbarProvider>
        <UserDashboard />
      </SnackbarProvider>
    </Box>
  )
}

export default App
