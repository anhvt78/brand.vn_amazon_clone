import "../styles/globals.css";
import "slick-carousel/slick/slick.css";

//INTRNAL IMPORT
import { Header, Footer, Banner } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";


const MyApp = ({ Component, pageProps }) => (
  <div className="font-bodyFont">
    <NFTMarketplaceProvider>
      <Header />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
    

  </div>
);

export default MyApp;
