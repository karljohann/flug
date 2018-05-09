import React, { Component, Fragment } from 'react';
import Pill from './Pill';
import Modal from './Modal';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    // FIXME: Move up to parent for re-use
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <header className="flugleidir-header">
          <div className="flugleidir-header-content">
            <img
              src={logo}
              className="flugleidir-no-url-horiz-cmyk"
              alt="Icelandair logo"
            />
            <div className="flugleidir-header-right">
              <Pill
                title="Ask question"
                onClick={this.toggleModal}
              />
            </div>
          </div>
        </header>

        <Modal
          show={this.state.modalIsOpen}
          onClose={this.toggleModal}
        >
          <h3>You have a question?</h3>
          <form>
            <label htmlFor="inputElement">
              <input
                id="inputElement"
                placeholder="What's on your mind?"
              />
            </label>
            <input
              type="submit"
              value="Ask"
            />
          </form>
        </Modal>
      </Fragment>
    );
  }
}

export default Header;
