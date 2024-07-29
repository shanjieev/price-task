import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='container' ></div>
    <div className='head'><div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal pg-info">zoho</h5>
      <nav class="my-0 my-md-0 mr-md-3">
        <a class="p-5 text-dark" href="#">Features</a>
        <a class="p-5 text-dark" href="#">Enterprise</a>
        <a class="p-5 text-dark" href="#">Support</a>
        <a class="p-5 text-dark" href="#">Pricing</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>
     </div>
     <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">PRICING</h1>
      <p class="lead">Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.
      Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.
</p>
    </div>
      <div className="container">
    <div class="row gutters">
      <div class="col-xl-4 col-lg-4">

        <div class="pricing-plan">
          <div class="pricing-header">
            <h4 class="pricing-title">Starter</h4>
            <div class="pricing-cost">$129.00</div>
            <div class="pricing-save">Save $29.00</div>
          </div>
          <ul class="pricing-features">
            <li>5GB Linux Web Space</li>
            <li>5 MySQL Databases</li>
            <li>500 Emails</li>
            <li>250Gb mothly Transfer</li>
            <li class="text-muted"><del>24/7 Tech Support</del></li>
            <li class="text-muted"><del>Daily Backups</del></li>
          </ul>
          <div class="pricing-footer">
            <a href="#" class="btn btn-primary btn-lg">Select Plan</a>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="pricing-plan">
          <div class="pricing-header red">
            <h4 class="pricing-title">Basic</h4>
            <div class="pricing-cost">$229.00</div>
            <div class="pricing-save">Save $49.00</div>
          </div>
          <ul class="pricing-features">
            <li>10GB Linux Web Space</li>
            <li>10 MySQL Databases</li>
            <li>1000 Emails</li>
            <li>750Gb mothly Transfer</li>
            <li>24/7 Tech Support</li>
            <li class="text-muted"><del>Daily Backups</del></li>
          </ul>
          <div class="pricing-footer">
            <a href="#" class="btn btn-danger btn-lg">Select Plan</a>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4">
        <div class="pricing-plan">
          <div class="pricing-header secondary">
            <h4 class="pricing-title">Ultra</h4>
            <div class="pricing-cost">$329.00</div>
            <div class="pricing-save">Save $99.00</div>
          </div>
          <ul class="pricing-features">
            <li>50GB Linux Web Space</li>
            <li>100 MySQL Databases</li>
            <li>Unlimited Emails</li>
            <li>1000Gb mothly Transfer</li>
            <li>24/7 Tech Support</li>
            <li>Daily Backups</li>
          </ul>
          <div class="pricing-footer">
            <a href="#" class="btn btn-success btn-lg">Select Plan</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  
      
      
      
  
      
 
     </>
  
  
  )
}

export default App
