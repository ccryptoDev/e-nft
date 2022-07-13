import { Router } from 'react-router'
import { Switch, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

// import { Connect } from "./";
// import { PrivateRoute, TransactionProgress } from "../components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { OrderCrypto, OrderCC, OrderWire, OrderConfirm } from "../pages/order";
import { Profile, ProfileSell, ProfilePayouts, ProfilePurchases, AccountSettings } from "../pages/profile";
import "../styles/style.scss";


import {
	Home,
	Karen,
	Auth,
	BuddhaEdition,
	BootsyCollins,
	EditProfile,
	ForgotPassword,
	NFT,
	Privacy,
	Terms,
	Marketplace,
	Subscribe,
	NFTEditionPage,
	ToryLanez,
	KarenPurchasing,
	MarketplaceListings,
	NFTEdition
} from "../pages";
import history from "../history";
import { PrivateRoute } from '../components';

function getLibrary(provider: any): Web3Provider {
	const library = new Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
}

const Root = () => {
	return (
		<Router history={history}>
			<Header />
			{/* <Web3ReactProvider getLibrary={getLibrary}> */}
			{/* <Connect> */}
			<Switch>
				<PrivateRoute exact path="/account" component={Profile} />
				<PrivateRoute exact path="/account/sell" component={ProfileSell} />
				<PrivateRoute exact path="/account/payouts" component={ProfilePayouts} />
				<PrivateRoute exact path="/account/purchases" component={ProfilePurchases} />
				<PrivateRoute exact path="/account/profile" component={EditProfile} />
				<PrivateRoute exact path="/account/settings" component={AccountSettings} />
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Auth} />
				<Route exact path="/login/forgotpassword" component={ForgotPassword} />
				<Route exact path="/nft/karen" component={Karen} />
				<Route exact path="/nft/karen/#karen-limited" component={Karen} />
				<Route exact path="/nft/karen/#karen-open" component={Karen} />
				<Route exact path="/nft/superbuddha" component={BuddhaEdition} />
				<Route exact path="/nft/bootsy" component={BootsyCollins} />
				<Route exact path="/privacy" component={Privacy} />
				<Route exact path="/terms" component={Terms} />
				<Route exact path="/nft" component={NFT} />
				<Route exact path="/tory-lanez-resale" component={ToryLanez} />
				<Route exact path="/marketplace" component={Marketplace} />
				<Route exact path="/nft-edition/:tokenId" component={NFTEdition} />
				<Route exact path="/register" component={Subscribe} />
				<PrivateRoute exact path="/order/complete/crypto" component={OrderCrypto} />
				<PrivateRoute exact path="/order/complete/cc" component={OrderCC} />
				<PrivateRoute exact path="/order/complete/wire" component={OrderWire} />
				<PrivateRoute exact path="/order/confirmation" component={OrderConfirm} />
				<Route exact path="/nft/karen-the-motion-picture-soundtrack-limited-edition" component={KarenPurchasing} />
				<Route exact path="/marketplace-listings" component={MarketplaceListings} />
			</Switch>
			{/* <TransactionProgress /> */}
			{/* </Connect>
      </Web3ReactProvider> */}
			<Footer />
		</Router>
	);
};

export { Root };
