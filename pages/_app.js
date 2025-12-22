import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeProvider } from "next-themes";
import Cursor from "../components/Cursor";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Cursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
