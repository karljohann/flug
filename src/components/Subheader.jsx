import React, { Component } from 'react';
import Tab from './Tab';
import './Subheader.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'popular', // TODO: Add router
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(path) {
    this.setState({ activeTab: path });
  }

  render() {
    const tabs = [
      {
        title: 'Popular',
        path: 'popular',
      },
      {
        title: 'Valflokkur #1',
        path: 'valflokkur1',
      },
      {
        title: 'Valflokkur #2',
        path: 'valflokkur2',
      },
      {
        title: 'Valflokkur #3',
        path: 'valflokkur3',
      },
      {
        title: 'Valflokkur #4',
        path: 'valflokkur4',
      },
    ];
    const isActive = tab => (this.state.activeTab === tab.path);

    return (
      <div className="flugleidir-subheader">
        <div className="flugleidir-content">
          <div className="flugleidir-search-box-wrapper">
            <input
              className="flugleidir-search-box"
              placeholder="Search for thousands of questions"
            />
          </div>
        </div>
        <div className="flugleidir-content">
          <div className="flugleidir-subheader-tabs">
            {tabs.map(tab => (
              <Tab
                key={tab.path}
                {...tab}
                active={isActive(tab)}
                onClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
