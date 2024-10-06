import { CDN_URL } from "./utils/constant";
const RestaurantCard = (props) => {
  const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
  return (
    <div className="res-card">
      <img
        className="resCard-img"
        src={CDN_URL+cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h6 className="delivery">{resData.info.sla.deliveryTime} minutes</h6>
    </div>
  );
};
export default RestaurantCard;