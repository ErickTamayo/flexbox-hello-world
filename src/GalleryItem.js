import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    render() {
        return (
            <div className="gallery__item">
                <img className="gallery__item__image" src={this.props.src} alt="" />
                <div className="gallery__item__title">{ this.props.title }</div>
                <div className="gallery__item__date">{ this.props.date }</div>
            </div>
        );
    }
}

export default GalleryItem;