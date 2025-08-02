import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const {name, cuisine, stars, delivery} = resData;

  return (
    <div className="card-container">
      <div>
        <img
          src={CDN_URL + resData.cloudinaryid}
          alt={resData.name}
        />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{stars} Stars</h4>
        <h4>{delivery}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;