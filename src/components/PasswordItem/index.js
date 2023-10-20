import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  render() {
    const {key, bgColor, showPass, details, func} = this.props
    const {id, password, website, username} = details

    const onDelete = () => {
      func(id)
    }
    return (
      <li key={key} className="password-boxes">
        <div className="pass-content">
          <div className="logo">
            <h1 className={`head-logo ${bgColor}`}>
              {website.slice(0, 1).toUpperCase()}
            </h1>
          </div>
          <div className="content-of-passwords">
            <p>{website}</p>
            <p>{username}</p>
            {showPass ? (
              <p className="password-texts">{password}</p>
            ) : (
              <img
                className="stars-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            )}
          </div>
        </div>
        <button
          onClick={onDelete}
          data-testid="delete"
          className="delete-button"
          type="button"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItem
