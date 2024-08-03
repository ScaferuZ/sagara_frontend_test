import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './routes/routes'
import { ThemeProvider } from './components/layouts/ThemeProvider/theme-provider';

const queryClient = new QueryClient();

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
