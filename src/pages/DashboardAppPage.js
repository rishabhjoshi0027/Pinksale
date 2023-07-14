// import HorizontalLinearStepper from '../components/Stepper/Stepper';
import './Homepage.css';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const data = [
    {
      id: 1,
      amount: '$398.8M',
      text: 'Total Liquidity Raised',
    },
    {
      id: 2,
      amount: '18577',
      text: 'Total Projects',
    },
    {
      id: 3,
      amount: '2.1M',
      text: 'Total Participants',
    },
    {
      id: 4,
      amount: '$223.4M',
      text: 'Total Values Locked',
    },
  ];
  return (
    <>
      <div className="mainDiv">
        <div className="topDiv">
          <h1 style={{ fontSize: '2.8rem', fontWeight: '500', marginBottom: '1rem' }}>
            {' '}
            The Launchpad Protocol for Everyone
          </h1>
          <p>
            PinkSale helps everyone to create their own tokens and token sales in few seconds. Tokens created on
            PinkSale will be verified and published on explorer websites.
          </p>
          <div className="buttonss">
            <button className="btn1">Create now</button>
            <button className="btn2">Learn more</button>
          </div>
        </div>
        <div className="BottomDiv">
          <div className="BottomSubDiv">
            {data.map((e) => {
              return (
                <div className="innerbox" key={e.id}>
                  <h1>{e.amount}</h1>
                  <h5 style={{ margin: '0' }}>{e.text}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="midDiv">
          <h1 style={{ fontSize: '2.8rem', fontWeight: '500', marginBottom: '1rem' }}>
            {' '}
            The Launchpad Protocol for Everyone
          </h1>
          <p>
            PinkSale helps everyone to create their own tokens and token sales in few seconds. Tokens created on
            PinkSale will be verified and published on explorer websites.
          </p>
        </div>
        <div className="lowerCards">
          <div className="card">
            <div className="cardImage">
              <img src="https://www.pinkswap.finance/pinkmoon.png" alt="" />
            </div>
            <div className="cardContent">
              <h3>Branding</h3>
              <p>Adding logo, social links, description, listing on PinkSale.</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src="https://www.pinkswap.finance/pinkmoon.png" alt="" />
            </div>
            <div className="cardContent">
              <h3>Branding</h3>
              <p>Adding logo, social links, description, listing on PinkSale.</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src="https://www.pinkswap.finance/pinkmoon.png" alt="" />
            </div>
            <div className="cardContent">
              <h3>Branding</h3>
              <p>Adding logo, social links, description, listing on PinkSale.</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src="https://www.pinkswap.finance/pinkmoon.png" alt="" />
            </div>
            <div className="cardContent">
              <h3>Branding</h3>
              <p>Adding logo, social links, description, listing on PinkSale.</p>
            </div>
          </div>
        </div>
        <div className="footerPara">
          <p>
            Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and
            therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own
            research and seek financial advice from a professional. More information about (DYOR) can be found via
            Binance Academy.
          </p>
        </div>
      </div>
      {/* <HorizontalLinearStepper/> */}
    </>
  );
}
