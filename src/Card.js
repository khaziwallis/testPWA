import React from 'react';
import CardAction
 from './CardAction';
const Card = (props) => {
    const image = props.image;
    return (
        <div className="ui card">
            <div className="content">
                <div className="ui container comments">
                    <div className="comment"></div>
                    <a href="/" className="avatar">
                        <img alt="avatar" src={image.urls.regular} />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            {image.user.first_name}
                        </a>
                        <div className="metadata">
                            <span className="date">
                            Today at: {image.created_at}
                            </span>
                        </div>
                        <div className="text">{image.alt_description}</div>
                    </div>
                </div>
            </div>
            <CardAction />
        </div>
    );
};


export default Card;