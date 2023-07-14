import React from 'react';
// import { useContractRead, useContract } from '@thirdweb-dev/react';
import { ConnectWallet } from '@thirdweb-dev/react';
import Cards from '../../../components/Cards/Cards';

const ConntectBtnData = () => {
  const data = [
    {
      name: 'Metamask',
      img: 'https://logowik.com/content/uploads/images/t_metamask-fox-icon-in-flat-style2194.logowik.com.webp',
    },
    {
      name: 'Coinbase Wallet',
      img: 'https://logowik.com/content/uploads/images/coinbase-icon8288.logowik.com.webp',
    },
    {
      name: 'Wallet connect',
      img: 'https://api.nuget.org/v3-flatcontainer/walletconnect.core/2.0.5/icon',
    },
    {
      name: 'Trust wallet',
      img: 'https://trustwallet.com/assets/images/media/assets/trust_platform.svg',
    },
    {
      name: 'Safepal',
      img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/8119.png',
    },
    {
      name: 'Math wallet',
      img: 'https://medishares.oss-cn-hongkong.aliyuncs.com/logo/math/Logo_Icon_black.png',
    },
    {
      name: 'TokenPocket',
      img: 'https://medishares.oss-cn-hongkong.aliyuncs.com/logo/math/Logo_Icon_black.png',
    },
    {
      name: 'BitKeep',
      img: 'https://lh3.googleusercontent.com/uBaatYG20TOMFFUCTEgwtaI9Q6l_Nqr0qKUGQPJHjKnlLDqhwQaQbAvQku4nyH8TVxZKx96RsiFduLrcw2vqqjrr=w128-h128-e365-rj-sc0x00ffffff',
    },
  ];
  return (
    <div>
      {/* <Cards data={data} /> */}
      <ConnectWallet />
    </div>
  );
};

export default ConntectBtnData;
