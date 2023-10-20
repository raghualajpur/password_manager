import {Component} from 'react'
import {v4 as uuIdv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const colors = [
  'red',
  'yellow',
  'green',
  'orange',
  'blue',
  'parrot-green',
  'grey',
  'blue',
]

class PasswordManager extends Component {
  state = {
    enterWebsite: '',
    enterUsername: '',
    enterPassword: '',
    initialPasswords: [],
    showPassword: false,
    searchingKey: '',
  }

  showPasswords = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeWebsite = event => {
    this.setState({enterWebsite: event.target.value})
  }

  onChangePassword = event => {
    this.setState({enterPassword: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({enterUsername: event.target.value})
  }

  addToPasswordList = event => {
    event.preventDefault()
    const {enterPassword, enterUsername, enterWebsite} = this.state
    const newPassword = {
      id: uuIdv4(),
      website: enterWebsite,
      username: enterUsername,
      password: enterPassword,
    }
    this.setState(prevState => ({
      initialPasswords: [...prevState.initialPasswords, newPassword],
      enterWebsite: '',
      enterUsername: '',
      enterPassword: '',
    }))
  }

  onClickDeletePassword = id => {
    this.setState(prevState => ({
      initialPasswords: prevState.initialPasswords.filter(
        eachPassword => eachPassword.id !== id,
      ),
    }))
  }

  onChangeSearchKey = event => {
    this.setState({searchingKey: event.target.value})
  }

  render() {
    const {
      enterPassword,
      enterWebsite,
      enterUsername,
      initialPasswords,
      showPassword,
      searchingKey,
    } = this.state
    const passwords = initialPasswords.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchingKey.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="top-card">
          <img
            className="password-img-1"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
          />
        </div>
        <div className="middle-card">
          <img
            className="password-manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <div className="form-card">
            <form className="form" onSubmit={this.addToPasswordList}>
              <h1 className="form-head">Add New Password</h1>
              <ul>
                <li key="1" className="input-container">
                  <div className="website">
                    <img
                      className="logos"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                      alt="website"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onChangeWebsite}
                    value={enterWebsite}
                    className="inputs"
                  />
                </li>
                <li key="2" className="input-container">
                  <div className="website">
                    <img
                      className="logos"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    onChange={this.onChangeUsername}
                    value={enterUsername}
                    placeholder="Enter Username"
                    className="inputs"
                    type="text"
                  />
                </li>
                <li key="3" className="input-container">
                  <div className="website">
                    <img
                      className="logos"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    onChange={this.onChangePassword}
                    value={enterPassword}
                    placeholder="Enter Password"
                    className="inputs"
                    type="password"
                  />
                </li>
              </ul>
              <div className="button-area">
                <button className="button-add" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom-card">
          <div className="box-for-horizontal-line">
            <div className="text-count">
              <h1 className="para-2">Your Passwords</h1>
              <p className="pass-count">{passwords.length}</p>
            </div>
            <div className="search-container">
              <div className="website" htmlFor="search-input">
                <img
                  className="logos"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                />
              </div>
              <input
                onChange={this.onChangeSearchKey}
                value={searchingKey}
                id="search-input"
                placeholder="Enter Website"
                className="inputs search"
                type="search"
              />
            </div>
          </div>
          <div className="checkbox-div">
            <input
              onClick={this.showPasswords}
              className="check-box"
              type="checkbox"
              id="vehicle1"
            />
            <label className="para-2" htmlFor="vehicle1">
              Show passwords
            </label>
          </div>
          <ul className="list-of-passwords">
            {passwords.map(each => (
              <PasswordItem
                showPass={showPassword}
                details={each}
                func={this.onClickDeletePassword}
                key={each.id}
                bgColor={colors[Math.floor(Math.random() * colors.length)]}
              />
            ))}
          </ul>
          {passwords.length === 0 && (
            <div className="no-pass-container">
              <img
                className="no-pass-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-pass-head">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
