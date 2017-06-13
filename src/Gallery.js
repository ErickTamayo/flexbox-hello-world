import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: 'Image 1', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=1' },
                { title: 'Image 2', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=2' },
                { title: 'Image 3', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=3' },
                { title: 'Image 4', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=4' },
                { title: 'Image 5', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=5' },
                { title: 'Image 6', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=6' },
                { title: 'Image 7', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=7' },
                { title: 'Image 8', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=8' },
                { title: 'Image 9', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=9' },
                { title: 'Image 10', date: 'Apr 13, 2014', src: 'https://placem.at/things?w=200&h=200&random=10' },
            ]
        };
    }

    render() {
        return (
            <div className="gallery">
                {
                    this.state.items.map((item) => <GalleryItem key={item.title} {...item} />)
                }
            </div>
        );
    }
}

export default Gallery;