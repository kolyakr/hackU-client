import { Route, Routes } from "react-router-dom"; // правильний імпорт
import Layout from "./components/ui/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import HackatonsPage from "./pages/HackatonsPage";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RatingPage from "./pages/RatingPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="hackatons" element={<HackatonsPage />} />
          <Route path="rating" element={<RatingPage />} />
        </Route>
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/auth/register" element={<AuthPage />} />
      </Routes>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
};

export default App;
