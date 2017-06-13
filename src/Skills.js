import React, { Component } from 'react';
import SkillItem from './SkillItem'
import './Skills.css';
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    iconClass: 'devicon-react-original',
                    title: 'React',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    iconClass: 'devicon-css3-plain',
                    title: 'CSS',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    iconClass: 'devicon-php-plain',
                    title: 'PHP',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    iconClass: 'devicon-javascript-plain',
                    title: 'Javascript',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
            ]
        };
    }

    render() {
        return (
            <div className="skills">
                {
                    this.state.items.map((item) => <SkillItem key={item.title} {...item} />)
                }
            </div>
        );
    }
}

export default Skills;