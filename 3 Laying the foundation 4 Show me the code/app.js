import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          height={80}
          width={120}
          src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-abstract-logo-for-cafe-or-restaurant-graphic-food-icon-symbol-for-png-image_4316818.jpg"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj={
    "info": {
      "id": "660675",
      "name": "Cafe Amudham",
      "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
      "locality": "5th Block Kormangala",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "396620",
      "avgRatingString": "4.6",
      "totalRatingsString": "12K+",
      "promoted": true,
      "adTrackingId": "cid=19254741~p=0~adgrpid=19254741#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=660675~eid=efe706d4-3f3f-4e67-9181-37af15b28cbe~srvts=1727862201272~collid=45826",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "description": "",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      "campaignId": "19254741"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=660675",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }

const RestaurantCard = (props) => {
    const {resData}=props;
  return (
    <div className="res-card">
      <img
        className="resCard-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"
        alt=""
      />
      <h3>{resData.info.name}</h3>
      <h5>cuisine</h5>
      <h5>4.4 stars</h5>
      <h5 className="delivery">38 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-center">
        <div className="search">Search</div>
      </div>
      <div className="res-container">
        <RestaurantCard resData = {resObj}/>
        
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
