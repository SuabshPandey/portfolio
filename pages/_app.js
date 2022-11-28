import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import ScrollToTop from "react-scroll-to-top";
// import { ReactComponent as ArrowUp } from "./arrow.svg";
// import ArrowUp from "./arrow.svg";

function MyApp({ Component, pageProps }) {
  const path =
    "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z";

  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop
        smooth
        svgPath={path}
        className="scroll_circle"
        top={50}
        viewBox="-3 4 45 45"
        color="#000"
        height="105"
        width="80"
        style={{
          borderRadius: "30px",
          boxShadow:
            "rgb(255 255 255) 0px 0px 9px, rgb(143 143 143) 0px 1px 8px",
          background: "#fff",
        }}
      />
    </Layout>
  );
}

export default MyApp;
