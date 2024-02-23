import "../styles/globals.css";
import "slick-carousel/slick/slick.css";

//INTRNAL IMPORT
import { Header, Footer} from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
import {store} from "../redux/store";


const MyApp = ({ Component, pageProps }) => (
  <div className="font-bodyFont">
    <NFTMarketplaceProvider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
    
  </div>
);

export default MyApp;
