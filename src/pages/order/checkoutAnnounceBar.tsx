import { Link } from 'react-router-dom';
import './order.scss';

const CheckoutAnnounceBar = () => {
  return (
    <section className="announcement" style={{background: 'none', backgroundColor: 'red'}}>
      <p style={{color:'white', margin: 0}}>You have items PENDING CHECKOUT.</p>
      <h5 style={{margin: 0}}>
        <Link to="/order/complete/crypto" style={{color: 'white'}}>Pay with Crypto &rarr;</Link>
        <Link  to="/order/complete/cc" style={{color:'white'}}>Pay with Credit Card &rarr;</Link>
      </h5>
    </section>
  )
}

export default CheckoutAnnounceBar