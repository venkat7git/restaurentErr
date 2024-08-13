import {Component} from 'react'
import {IoCartOutline} from 'react-icons/io5'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="head-container">
        <h1 className="header-heading">UNI Resto Cafe</h1>

        <div className="cart-container">
          <span>
            <IoCartOutline size={35} />
          </span>
          <sup className="cart-count">0</sup>
        </div>
      </div>
    )
  }
}

export default Header
