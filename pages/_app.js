import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Poppins as poppinFont } from "next/font/google";

const poppin = poppinFont({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});


export default function App({ Component, pageProps }) {
  return (
    <Layout className={poppin.className} >
      <Component {...pageProps} />
    </Layout>
  );
}
