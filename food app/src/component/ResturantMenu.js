import useResturantMenu from "../utils/useResturantMenu"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines = [],
    costForTwoMessage,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards = [];

  // Try to extract standard itemCards
  const standardItemCards = regularCards.find((c) => c.card?.card?.itemCards)
    ?.card.card.itemCards;

  // If not found, check for a "carousel" with dishes
  if (standardItemCards) {
    itemCards = standardItemCards;
  } else {
    const carousel = regularCards.find((c) => c.card?.card?.carousel)?.card.card
      .carousel;
    if (carousel) {
      // Flatten all dishes from all carousel arrays (if multiple)
      itemCards = carousel.flatMap((carouselGroup) => carouselGroup.dishes);
    }
  }
  return (
    <div className="menu-container">
      <div className="info-container">
        <h1 className="reName">{name}</h1>
        <p className="reinfo">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <h2 className="resMenu">Menu</h2>
      <hr />

      <div className="card-list">
        {itemCards.map((item) => {
          const info = item.card.info;
          const price = (info.price ?? info.defaultPrice) / 100;
          return (
            <div className="item-card" key={info.id || info.name}>
              <img
                src={
                  info.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${info.imageId}`
                    : "https://via.placeholder.com/300x180"
                }
                alt={info.name}
              />

              <div className="description">
                <h3>{info.name}</h3>
                <h4>{info.category}</h4>
                <h4>₹{price}</h4>
              </div>
              <button className="menu-button">Add</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
