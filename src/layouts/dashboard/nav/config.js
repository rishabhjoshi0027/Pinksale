// component
// import SvgColor from '../../../components/svg-color';
// import CottageIcon from '@mui/icons-material/Cottage';
// ----------------------------------------------------------------------

// const Icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

// const navConfig = [
//   {
//     title: 'dashboard',
//     path: '/dashboard/app',
//     icon: icon('ic_analytics'),
//   },
//   {
//     title: 'user',
//     path: '/dashboard/user',
//     icon: icon('ic_user'),
//   },
//   {
//     title: 'product',
//     path: '/dashboard/products',
//     icon: icon('ic_cart'),
//   },
//   {
//     title: 'blog',
//     path: '/dashboard/blog',
//     icon: icon('ic_blog'),
//   },
//   {
//     title: 'login',
//     path: '/login',
//     icon: icon('ic_lock'),
//   },
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: icon('ic_disabled'),
//   },
// ];
const navConfig = [
  {
    title: 'Home',
    itemId: '/dashboard',
    // you can use your own custom Icon component as well
    // icon is optional

    elemBefore: () => <i className="fa-solid fa-house" />,
  },
  {
    title: 'Launchpads',
    // itemId: '/launchpads',
    elemBefore: () => <i className="fa-solid fa-rocket" />,
    subNav: [
      {
        title: 'Create launchpad',
        itemId: 'create',
      },
      {
        title: 'Create fair launch',
        itemId: 'create-fair-Launchpad',
      },
      {
        title: 'Create dutch auction',
        itemId: '/launchpads/dutchSuction',
      },
      {
        title: 'Create subscription',
        itemId: '/launchpads/Create-subscription',
      },
      {
        title: 'Create token',
        itemId: '/launchpads/Create-token',
      },
      {
        title: 'Launchpad list',
        itemId: '/launchpads/Launchpad-list',
      },
    ],
  },
  {
    title: 'Private Sale',
    itemId: '/Private-Sale',
    elemBefore: () => <i className="fa-solid fa-shield" />,

    subNav: [
      {
        title: 'Create Private Sale',
        itemId: '/Private-Sale/Create-Private-Sale',
      },
      {
        title: 'Private Sale List',
        itemId: '/Private-Sale/Private-Sale-List',
      },
    ],
  },
  {
    title: 'Pink lock',
    itemId: '/PinkLock',
    elemBefore: () => <i className="fa-solid fa-unlock" />,

    subNav: [
      {
        title: 'Create lock',
        itemId: '/PinkLock/Create-Private-Sale',
      },
      {
        title: 'Token',
        itemId: '/PinkLock/Token',
      },
      {
        title: 'Liquidity',
        itemId: '/PinkLock/Liquidity',
      },
    ],
  },
  {
    title: 'Air drop',
    itemId: '/air-drop',
    elemBefore: () => <i className="fa-solid fa-parachute-box" />,

    subNav: [
      {
        title: 'Create Airdrop',
        itemId: '/air-drop/Create-Airdrop',
      },
      {
        title: 'Air drop list',
        itemId: '/air-drop/Air-drop-list',
      },
    ],
  },
  {
    title: 'Buy Crypto Fiat',
    itemId: '/Buy-Crypto-Fiat',
    elemBefore: () => <i className="fa-solid fa-dollar-sign" />,
  },
  {
    title: 'Leaderboard',
    itemId: '/leaderboard',
    elemBefore: () => <i className="fa-solid fa-crown" />,
  },
  {
    title: 'Anti bot',
    itemId: '/Anti-bot',
    elemBefore: () => <i className="fa-solid fa-user-secret" />,
  },
  {
    title: 'Multi sender',
    itemId: '/Multi-sender',
    elemBefore: () => <i className="fa-regular fa-paper-plane" />,
  },
  {
    title: 'Dexview.com',
    itemId: '/dexview',
    elemBefore: () => <i className="fa-solid fa-chart-line" />,
  },
  {
    title: 'Pools alert',
    itemId: '/Pools-alert',
    elemBefore: () => <i className="fa-solid fa-robot" />,
  },
  {
    title: 'KYC & Audit',
    itemId: '/kyc&audit',
    elemBefore: () => <i className="fa-solid fa-id-card-clip" />,
  },
  {
    title: 'DOCS',
    itemId: '/docs',
    elemBefore: () => <i className="fa-solid fa-file-lines" />,
  },
  {
    title: 'Shop',
    itemId: '/shop',
    elemBefore: () => <i className="fa-solid fa-cart-shopping" />,
  },
  {
    title: 'Telegram',
    itemId: '/Telegram',
    elemBefore: () => <i className="fa-brands fa-telegram" />,

    subNav: [
      {
        title: 'English',
        itemId: '/Telegram/English',
      },
      {
        title: '简体中文',
        itemId: '/Telegram/Chinese',
      },
      {
        title: '日本語',
        itemId: '/Telegram/Japanese',
      },
      {
        title: 'Tiếng Việt',
        itemId: '/Telegram/Vietnamese',
      },
      {
        title: 'Turkey',
        itemId: '/Telegram/Turkey',
      },
    ],
  },
  {
    title: 'Twitter',
    itemId: '/twitter',
    elemBefore: () =><i className="fa-brands fa-twitter"/>,
  },
  {
    title: 'Facebook',
    itemId: '/facebook',
    elemBefore: () =><i className="fa-brands fa-facebook"/>,
  },
];
export default navConfig;
