import "../styles/globals.css";
import "slick-carousel/slick/slick.css";

//INTRNAL IMPORT
import { Header, Footer} from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MyApp = ({ Component, pageProps }) => (
  <div className="font-bodyFont">
    <Provider store = {store}>
      {console.log(store)}
      <NFTMarketplaceProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </Provider>
    
    
  </div>
);

export default MyApp;
