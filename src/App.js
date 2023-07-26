import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/page-layout/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./components/Navbar";
import About from "./components/page-layout/About";
import DevPortfolio from "./components/page-layout/DevPortfolio";
import TravelBlog from "./components/page-layout/TravelBlog";
import Contact from "./components/page-layout/Contact";
import Footer from "./components/Footer";

function App() {
  const appTheme = createTheme({
    palette: {
      background: {
        default: "#001220",
      },
      primary: {
        main: "#f5f3f4",
      },
      secondary: {
        main: "#660708",
      },
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
    },
  });
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="dev-portfolio" element={<DevPortfolio />} />
        <Route path="travel-blog" element={<TravelBlog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
