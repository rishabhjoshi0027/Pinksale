import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { MetaMaskProvider } from "metamask-react";
// import {  } from "@thirdweb-dev/react";

import { ThirdwebProvider, metamaskWallet, ChainId } from '@thirdweb-dev/react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { FormProvider } from './context/formContext';

// ----------------------------------------------------------------------

export default function App() {
  const metamaskConfig = metamaskWallet();
  const desiredChainId = ChainId.Mumbai;
  return (
    <ThirdwebProvider desiredChainId={desiredChainId} activeChain="ethereum" supportedWallets={[metamaskWallet()]}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <FormProvider>
              <ScrollToTop />
              <StyledChart />
              <Router />
            </FormProvider>
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ThirdwebProvider>
  );
}
