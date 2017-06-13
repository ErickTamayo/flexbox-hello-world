import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">Hello Flexbox World</div>
                <div className="header__subtitle">This is a flexbox example</div>
            </div>
        );
    }
}

export default Header;