import "../styles/globals.css";

//INTRNAL IMPORT
import { Header, HeaderBottom, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <div className="font-bodyFont">
    <NFTMarketplaceProvider>
      <Header />
      <HeaderBottom />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
    

  </div>
);

export default MyApp;
