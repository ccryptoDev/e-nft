import React, { useState } from 'react'
import { Months } from './months'
import { Years } from './Years'
import { 
  CountryDropdown, 
  RegionDropdown, 
  CountryRegionData 
} from 'react-country-region-selector'

const CreditCardForm = () => {
  const [isNewCard, setNewCard] = useState('false')
  const [ccNumber, setCcNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expireMonth, setExpireMonth] = useState('')
  const [expireYear, setExpireYear] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [country, selectCountry] = useState('')
  const [region, selectRegion] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isCC, setCC] = useState(false)
  const [isUnderstand, setUnderstand] = useState(false)
  const [isTerm, setTerm] = useState(false)

  const handlePaymentSubmit = () => {
    // do something
  }

  return (
    <form>
      {/* <input type="hidden" name="order_id" value="VPZRN3" />
      <input type="hidden" name="pmtCardID" value="" />
      <input type="hidden" name="pmtCVVSelected" value="" />
      <input type="hidden" name="encryptedData" value="" />
      <input type="hidden" name="cardIDempotencyKey" value="3AC3B97D-AB0F-7C73-F476-70A80EB8251E" />
      <input type="hidden" name="paymentIDempotencyKey" value="3AC3B97E-A2C0-0E75-68F4-8B73D60D49F1" /> */}

      <div className="formHeader">
        <br />
        Credit Card Payment Via<br />
        <br />
        <a href="https://www.curios.com" target="_blank" aria-describedby="audioeye_new_window_message">
          <img src="https://www.curios.com/images/logo-curios.png" style={{ maxWidth: 200 }} alt="Go to curios.com" />
        </a>
        <br />
        <br />
      </div>

      <div id="dvError" className="alert alert-danger" style={{ display: 'none' }}></div>
      <div id="dvReset" style={{ display: 'none' }}>
        <button type="button" data-action="btnReset">Try again</button>
      </div>

      <div id="dvCreditCards">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="form-group row">
              <div className="col-sm-12">
                <input 
                  type="radio" 
                  style={{ width: 'initial', height: 'initial' }} 
                  value={isNewCard}
                  onChange={e => setNewCard(e.target.value)}
                />
                <label style={{ display: 'initial' }}>New Card</label>
              </div>
            </div>
            
            <div style={{ display: 'initial' }}>
              <div className="form-group row">
                <label className="col-sm-3">Credit Card Number:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={ccNumber} 
                    onChange={e => setCcNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">CVV:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={cvv} 
                    onChange={e => setCvv(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3" id="">Expiry Month:</label>
                <div className="col-sm-8">
                  <div className="select-wrapper">
                    <select 
                      value={expireMonth}
                      onChange={e => setExpireMonth(e.target.value)}
                    >
                      <option key="0" value="0"> -- Please select -- </option>
                      {Months.map((month, index) => (
                        <option key={month.id} value={month.id}>{month.value}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3" id="ae-formFieldLabelOptIn_l7rcx3kam3_1">Expiry Year:</label>
                <div className="col-sm-8">
                  <div className="select-wrapper">
                    <select 
                      value={expireYear} 
                      onChange={e => setExpireYear(e.target.value)}
                    >
                      <option value=""> -- Please select -- </option>
                      {Years.map((year) => (
                        <option key={year.id} value={year.id}>{year.value}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">Cardholder Name:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={cardholderName} 
                    onChange={e => setCardholderName(e.target.value)}
                  />
                </div>
              </div>
                      
              <div className="form-group row">
                <label className="col-sm-3">Country:</label>
                <div className="col-sm-8">
                  <div className="select-wrapper">
                    <CountryDropdown
                      value={country}
                      onChange={country => selectCountry(country)} 
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">Address Line 1:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={address1} 
                    onChange={e => setAddress1(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">Address Line 2:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={address2} 
                    onChange={e => setAddress2(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">City:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={city} 
                    onChange={e => setCity(e.target.value)} 
                  />
                  </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">Region or State:</label>
                <div className="col-sm-8">
                  <div className="select-wrapper">
                    <RegionDropdown
                      disableWhenEmpty={true}
                      country={country}
                      value={region}
                      onChange={region => selectRegion(region)} 
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group row">
                <label className="col-sm-3">Postal Code:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={postcode} 
                    onChange={e => setPostcode(e.target.value)} 
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">&nbsp;</label>
                <div className="col-sm-8">
                  <small >NOTE: Tokens that you purchase may not be immediately minted, but that will not prevent you from accessing the secure content/assets tied to the token you purchased. You can check the status of your token at any time by logging into your account.</small>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">&nbsp;</label>
                <div className="col-sm-8">
                  <small>
                    <input 
                      type="checkbox" 
                      checked={isCC} 
                      onChange={(e) => setCC(e.target.checked)}                     
                    />
                        By paying with credit card, I acknowledge the following:
                        1) Token can NOT be resold on any external marketplaces for a period of 10 days. (However, you can relist to sell immediately after purchase on www.e-nft.com.)
                        2) Token can NOT be transferred to any external wallets for a period of 10 days.
                  </small>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">&nbsp;</label>
                <div className="col-sm-8">
                  <small>
                    <input 
                      type="checkbox" 
                      checked={isUnderstand} 
                      onChange={(e) => setUnderstand(e.target.checked)}
                    />
                    I understand that this charge will appear on my credit/debit card statement as:<br />"<strong>Curios NFT</strong>".
                  </small>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">&nbsp;</label>
                <div className="col-sm-8">
                  <small>
                    <input 
                      type="checkbox" 
                      checked={isTerm} 
                      onChange={(e) => setTerm(e.target.checked)}
                    />
                    I have read and agree to <strong>Curios'</strong> 
                    <a href="https://www.curios.com/terms/">Terms of Service</a> and <a href="https://www.curios.com/privacy/">Privacy Policy</a>.
                  </small>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">&nbsp;</label>
                <div className="col-sm-8">
                  <button 
                    className="cc-submit"
                    type="button"
                    onClick={handlePaymentSubmit}
                  >
                    Submit Payment Now
                  </button>
                </div>
              </div>

              <div className="form-group row" style={{ visibility: 'hidden' }}>
                <label className="col-sm-3">Phone:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ visibility: 'hidden' }}>
                <label className="col-sm-3">E-Mail:</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>

      <br />
      <div className="card" id="dvPayment" style={{ display: 'none' }}>
        <div className="card-header">Payment</div>
        <div className="card-body">

          <div className="form-group row">
            <label className="col-sm-3">&nbsp;</label>
            <div className="col-sm-8">
              <div className="alert alert-info"></div>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3">&nbsp;</label>
            <div className="col-sm-8">
              <button 
                type="button" 
                name="btnSubmitPayment"
              >
                Submit Payment
              </button>
            </div>
          </div>

        </div>
      </div>
    </form>

  )
}

export default CreditCardForm;