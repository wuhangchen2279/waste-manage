import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { STORY_PLASTIC_ID, STORY_PLASTIC_LINK } from '../constants/static_types';

const StoryGridItemComponent = (props) => {
    const {id} = props.story;

    return (
        <div className="col-md-6 col-lg-4">
            <Link 
                to={`/story/${id}`} 
                className="portfolio-item d-block mx-auto"
            >
                <img className="img-fluid story-image" src={require('../static/story_img.png')} alt="story image"></img>
            </Link>
            
        </div>
    );
}

export default StoryGridItemComponent;