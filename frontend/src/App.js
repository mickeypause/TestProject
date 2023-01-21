import MainScreen from "./screens/MainScreen/MainScreen";
import Header from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <MainScreen />
</QueryClientProvider>
  )
}

export default App;
