import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop
        smooth
        className="scroll_circle"
        top={50}
        color="#000"
        style={{
          borderRadius: "30px",
          boxShadow:
            "rgb(255 255 255) 0px 0px 9px, rgb(143 143 143) 0px 1px 8px;",
          background: "#fff",
          
        }}
      />
    </Layout>
  );
}

export default MyApp;
