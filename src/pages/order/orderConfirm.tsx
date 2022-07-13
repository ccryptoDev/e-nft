import { Link } from 'react-router-dom';
import './order.scss';

const OrderConfirm = () => {
  return (
    <div id="block-full">
      <div className="nft-block">

        <div className="block-title" style={{width: `100%`, display: 'block'}}>
          <h1>Order #WY439Q</h1>
        </div>
        <br/>
        <h5>
          Your order is <span style={{color: 'blue'}}>Payment Pending</span>.
        </h5>
        <div style={{width: `100%`, marginTop: 25, marginBottom: 25}}>
          <Link className="btn-blue-dark" type="button" to='/account/purchases/' >VIEW ORDER STATUS </Link>
        </div>

      </div>
    </div>
  )
}
export {OrderConfirm}