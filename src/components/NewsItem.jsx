import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        <span className="badge rounded-pill bg-danger">{source.name}</span>
          </div>
          <img src={!imageUrl ? "https://i.gadgets360cdn.com/large/starlink_terminal_rooftop_image_spacex_1633352693206.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
