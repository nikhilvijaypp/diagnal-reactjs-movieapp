import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import fallBackImg from "../../assets/images/placeholder_for_missing_posters.png";
import { IMAGE_URL, APP_URL } from "../../services/api/constants";

function MovieCard(props) {
  const { data } = props;

  return (
    <Link to="/">
      <div className="card-item">
        <div className="card-innner">
          <div className="card-top">
            {/* <img src={`/assets/images/${data.posterImage}`} alt={data.name} /> */}
            <img
              src={`${APP_URL}assets/images/${data.posterImage}`}
              // src={`${IMAGE_URL}${data.posterImage}`}
              alt={data.name}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = fallBackImg;
              }}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.name}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
