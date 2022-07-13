import React, { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { removeAccessToken, removeRefreshJwtToken, removeJwtToken, removePublicName, getAccessToken, getJwtToken } from '../../utils'
import history from '../../history'
import logo from '../../assets/images/logo-enft-beta.png';
import './Header.scss';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { selectLoginStatus } from '../../selector/user';
import { user } from '../../actions/user'

const Header = () => {

  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null)
  const refAcc = useRef<HTMLLIElement>(null)

  const [dropMMenu, setDropMMenu] = useState(false);
  const [dropMarket, setDropMarket] = useState(false);
  const [dropAccount, setDropAccount] = useState(false);
  const loginEvent = useSelector(selectLoginStatus, shallowEqual);
  const [logged, setLogged] = useState(false);
  const islogged = localStorage.getItem('isLoggedin');

  const dropMMenuClick = () => setDropMMenu(!dropMMenu);
  const dropMarketClick =() => setDropMarket(!dropMarket);
  const dropAccountClick = () => setDropAccount(!dropAccount);

  const CloseDropMarket = () => setDropMarket(false);
  const CloseDropAccount = () => setDropAccount(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (dropMarket && ref.current && !ref.current.contains(e.target as HTMLLIElement)) {
        setDropMarket(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
  }, [dropMarket]);
  
  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (dropAccount && refAcc.current && !refAcc.current.contains(e.target as HTMLLIElement)) {
        setDropAccount(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
  }, [dropAccount]);

  useEffect(() =>{
    if(loginEvent){
      setLogged(true)
    } 
    else if(islogged === 'loggedIn') {
        setLogged(true)
    }
    else {
      setLogged(false)
    }
    
  })

  const logOut = () => {
    setLogged(false)
    dispatch(user.logOut())
  }

  return (
    <section className="sd-navigation">
      <div className="sd-nav-container">
        <div className="sd-brand">
          <Link to="/"><img src={logo} alt="E-NFT" /></Link>
        </div>
        <nav className="sd-nav">
          <div className="sd-nav-mobile"><Link id="sd-nav-toggle" to="#!" onClick={dropMMenuClick} className={dropMMenu ? "active" : ""}><span></span></Link></div>
          <ul className={dropMMenu ? "sd-nav-list active" : "sd-nav-list"}>
            <li ref={ref}>
              <span  className="drop btn-base btn-medium btn-outline-white" onClick={dropMarketClick} >Marketplace</span>
              <ul className="sd-nav-dropdown" style={{ display : dropMarket ? "block" : "none" }} onClick={CloseDropMarket}>
                <li><Link to="/nft/bootsy">Bootsy Collins, et al. Open Edition</Link></li>
                <li><Link to="/nft/superbuddha">Super Buddha Open Edition</Link></li>
                <li><Link to="/nft/karen/#karen-limited">Karen Limited Edition</Link></li>
                <li><Link to="/nft/karen/#karen-open">Karen Open Edition</Link></li>
                <li><Link to="/marketplace-listings">Tory Lanez Resale Market</Link></li>
              </ul>
            </li>
              
            <li style={{ display : logged ? "none" : "block" }}>
              <a href="/login/" className="btn-base btn-medium btn-outline-white" >User Login</a>
            </li>
            <li style={{ display : logged ? "none" : "block" }}>
              <a href="/login/" className="btn-base btn-medium btn-blue-dark" >Register</a>
            </li>

            <li className="show-big" style={{ display : logged ? "block" : "none" }}>
              <Link to="/account/"><i className="fas fa-wallet show-big"></i><span className="show-small">Wallet</span></Link>
            </li>
            <li className="show-small" style={{ display : logged ? "block" : "none" }}>
              <Link className="btn-base btn-medium btn-outline-white" to="/account/"><i className="fas fa-wallet show-big"></i><span className="show-small">Wallet</span></Link>
            </li>
            <li className="show-big" ref={refAcc} style={{ display : logged ? "block" : "none" }}>
              <span className="drop show-big" onClick={dropAccountClick} ><i className="fas fa-user-circle show-big" ></i></span>
              <ul className="sd-nav-dropdown" style={{ display : dropAccount ? "block" : "none" }} onClick={CloseDropAccount}>
                <li><Link to="/account/">My Account</Link></li>
                <li><Link to="/" onClick={logOut}>Logout</Link></li>
              </ul>
            </li>
            <li className="show-small" style={{ display : logged ? "block" : "none" }}>
              <Link to="/" className="btn-base btn-medium btn-outline-white" onClick={logOut}><span>Logout</span></Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Header;
