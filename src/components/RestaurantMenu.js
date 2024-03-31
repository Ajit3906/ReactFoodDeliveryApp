import { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import "./restaurant-menu.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        MENU_URL+resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null || resInfo === undefined) return <ShimmerCards />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

  console.log(itemCards);

  return (
    <div className="menu-container">
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines?.join(", ")} - Rs.{costForTwo/100}
        </p>
      </div>
      <div>
        <h2>Menu</h2>
      </div>
      <ul>
        {itemCards.map((item, index) => {
          return (
            <li key={index}>
              <h3>
                {item?.card?.info?.name} -{" Rs."}
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
