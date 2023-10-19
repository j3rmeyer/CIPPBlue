import React from 'react'
import { CFooter, CImage, CLink } from '@coreui/react'
import { Link } from 'react-router-dom'
import huntressLogo from 'src/assets/images/huntress_teal.png'

//todo: Add darkmode detection and change logos accordingly.
const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-between align-items-center" position="sticky">
      <div className="sponsors">
        <p>
          Our Partners{' '}
          <CLink href="https://www.huntress.com/">
            <CImage src={huntressLogo} alt="Huntress" />
          </CLink>{' '}
        </p>
      </div>
      <nav className="footer-nav">
        <Link to="/license">License</Link>
      </nav>
    </CFooter>
  )
}

export default React.memo(AppFooter)
