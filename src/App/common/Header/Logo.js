import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <a href={'/'}>
                    <img src={'/images/lumidrop_logo.svg'} alt="Logotype of lumidrop" />
                </a>
            </div>
        );
    }
}

export default Logo;
