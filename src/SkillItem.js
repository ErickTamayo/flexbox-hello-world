import React, { Component } from 'react';
import './SkillItem.css';

class SkillItem extends Component {
    render() {
        return (
            <div className="skill__item">
                <div className="skill__item__icon">
                    <i className={this.props.iconClass}></i>
                </div>
                <div className="skill__item__title">
                    {this.props.title}
                </div>
                <div className="skill__item__description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default SkillItem;