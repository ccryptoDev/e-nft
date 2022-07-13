

import { useState, useEffect } from 'react'
import { 
  CountryDropdown, 
  RegionDropdown, 
  CountryRegionData 
} from 'react-country-region-selector'

const WireTransferForm = () => {
  const [newBankAccount, setNewBankAccount] = useState(false)
  const [bankType, setBankType] = useState('US')
  const [accountNumber, setAccountNumber] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')
  const [iban, setIban] = useState('')

  const [name, setName] = useState('')
  const [billAddress1, setBillAddress1] = useState('')
  const [billAddress2, setBillAddress2] = useState('')
  const [billCountry, setBillCountry] = useState('')
  const [billRegion, setBillRegion] = useState('')
  const [billCity, setBillCity] = useState('')
  const [billPostcode, setBillPostcode] = useState('')

  const [bankName, setBankName] = useState('')
  const [bankAddress1, setBankAddress1] = useState('')
  const [bankAddress2, setBankAddress2] = useState('')
  const [bankCountry, setBankCountry] = useState('')
  const [bankRegion, setBankRegion] = useState('')
  const [bankCity, setBankCity] = useState('')
  const [bankPostcode, setBankPostcode] = useState('')

  const handleWireTransfer = () => {
    // do something
  }
  
  return (
    <form>
      {/* <input type="hidden" name="order_id" value="V7Z428"/>
      <input type="hidden" name="bankaccount_id"/>
      <input type="hidden" name="encryptedData" value=""/>
      <input type="hidden" name="createBankIDempotencyKey" value="D233FC01-065F-5C44-5779-959DB491B5FE"/> */}

      <div style={{ display: 'block', textAlign: 'center' }}>
        <br/>
        Wire Transfer Payment Via<br/>
        <br/>
        <a href="https://www.curios.com" target="_blank">
          <img src="https://www.curios.com/images/logo-light-.png"/>
        </a>
        <br/>
        <br/>
      </div>

      <div id="dvError" className="alert alert-danger" style={{ display: 'none' }}></div>
      <div id="dvReset" style={{ display: 'none' }}>
        <button type="button" data-action="btnReset">Try again</button>
      </div>

      <div id="dvBankAccounts" style={{ display: 'block' }}>
        <ul className="list-group">
          
          <li className="list-group-item">
            <div className="form-group row">
              <div className="col-sm-12">
                <input 
                  style={{ width: 'initial', height: 'initial' }}
                  type="radio" 
                  name="selectedBankAccount" 
                  checked={newBankAccount} 
                  onChange={e => setNewBankAccount(e.target.checked)}
                />
                <label style={{ display: 'initial' }}>New Bank Account</label>
              </div>
            </div>

            <div style={{ display: 'inline' }}>
              <div className="form-group row">
                <label className="col-sm-3">Bank Account Type:</label>
                <div className="col-sm-8">
                  <div className="select-wrapper">
                    <select 
                      value={bankType} 
                      onChange={e => setBankType(e.target.value)}
                    >
                      <option value="US">US Bank Account</option>
                      <option value="IBAN">Non US Bank Account - IBAN Supported</option>
                      <option value="NONUSNONIBAN">Non US Bank Account - IBAN Not Supported</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="card" id="dvBankAccountUS">
                <div className="card-header">
                  <h5>Account Details</h5>
                </div>

                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-3">Account Number:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="baAccountNumber" 
                        value={accountNumber} 
                        onChange={e => setAccountNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Routing Number:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="baRoutingNumber" 
                        value={routingNumber} 
                        onChange={e => setRoutingNumber(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" id="dvBankAccountIBAN" style={{ display: 'none' }}>
                <div className="card-header">
                  <h5>Account Details</h5>
                </div>

                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-3">IBAN:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="baIBAN" 
                        value={iban} 
                        onChange={e => setIban(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" id="dvBillingDetails">
                <div className="card-header">
                  <h5>Billing Details</h5>
                </div>

                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-3">Name:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="bdName" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">City:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="bdCity" 
                        value={billCity} 
                        onChange={e => setBillCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Country:</label>
                    <div className="col-sm-6">
                      <div className="select-wrapper">
                        <CountryDropdown
                          value={billCountry}
                          onChange={country => setBillCountry(country)} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Region or State:</label>
                    <div className="col-sm-6">
                      <div className="select-wrapper">
                        <RegionDropdown
                          disableWhenEmpty={true}
                          country={billCountry}
                          value={billRegion}
                          onChange={region => setBillRegion(region)} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3">Postal Code:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="bdPostalCode" 
                        value={billPostcode} 
                        onChange={e => setBillPostcode} 
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Address Line 1:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="bdLine1" 
                        value={billAddress1}
                        onChange={e => setBillAddress1(e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3">Address Line 2:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="bdLine2" 
                        value={billAddress2}
                        onChange={e => setBillAddress2(e.target.value)} 
                      />
                      </div>
                  </div>

                </div>
              </div>

              <div className="card" id="dvBankAddress">
                <div className="card-header">
                  <h5>Bank Address</h5>
                </div>
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-3">Bank Name:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="badBankName" 
                        value={bankName} 
                        onChange={e => setBankName(e.target.value)}
                      />
                      </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">City:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="badCity" 
                        value={bankAddress2} 
                        onChange={e => setBankAddress2(e.target.value)} 
                      />
                      </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Country:</label>
                    <div className="col-sm-6">
                      <div className="select-wrapper">
                        <CountryDropdown
                          value={bankCountry}
                          onChange={country => setBankCountry(country)} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Region or State:</label>
                    <div className="col-sm-6">
                      <div className="select-wrapper">
                        <RegionDropdown
                          disableWhenEmpty={true}
                          country={bankCountry}
                          value={bankRegion}
                          onChange={region => setBankRegion(region)} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Postal Code:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="badPostalCode" 
                        value={bankPostcode} 
                        onChange={e => setBankPostcode} 
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Address Line 1:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="badLine1" 
                        value={bankAddress2} 
                        onChange={e => setBankAddress2(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3">Address Line 2:</label>
                    <div className="col-sm-6">
                      <input 
                        type="text" 
                        name="badLine2" 
                        value={bankAddress2} 
                        onChange={e => setBankAddress2(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-12">
                  <button 
                    type="button" 
                    className="submitWireTransfer" 
                    onClick={handleWireTransfer}
                  >
                    Submit Bank Account
                  </button>
                </div>
              </div>

            </div>
          </li>

        </ul>
      </div>

      <br/>
      <div className="card" id="dvPayment" style={{ display: 'none' }}>
        <div className="card-header">Payment</div>
        <div className="card-body">

          <div id="dvPaymentInstructions"></div>

          <button type="button" id="btnCheckWirePayment" name="btnCheckWirePayment" data-action="btnCheckWirePayment" style={{ display: 'none' }}>Check Payments</button>
          <button type="button" id="btnSubmitPayment" name="btnSubmitPayment" data-action="btnSubmitPayment">Submit</button>
        </div>
      </div>

      <div id="modalPmtWindow" className="modal fade" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <strong>Payment Validation Error</strong>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div data-action="modal-alert" className="alert alert-danger"></div>
            </div>
            <div className="modal-footer">
              <button type="button" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <div className="card" style={{ display: 'none' }}>
        <div className="card-header">
          Response
        </div>
        <div className="card-body">
          <div id="xResp"></div>
        </div>
      </div>
      <br/>
    </form>

  )
}

export default WireTransferForm;