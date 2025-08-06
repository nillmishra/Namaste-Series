import useResturantMenu from "../utils/useResturantMenu"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CardList from "./CardList";


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
    <CardList itemCards = {itemCards}/>
    </div>
  );
};

export default RestaurantMenu;
