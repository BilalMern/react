import { CDN_URL } from "../utils/constant";
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
      <h4>{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating}</h6>
      <h6 className="delivery">{resData.info.sla.deliveryTime} minutes</h6>
    </div>
  );
};
export default RestaurantCard;