import "../styles/globals.css";

//INTRNAL IMPORT
import { Header, BottomHeader, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <div className="font-bodyFont">
    <NFTMarketplaceProvider>
      <Header />
      <BottomHeader />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
    

  </div>
);

export default MyApp;
