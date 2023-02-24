import React from "react";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem";

import PaneerBiriyani from "../assets/PaneerBiriyani.jpeg";
import ShahiBiriyani from "../assets/ShahiBiriyani.webp";
import ShahiPaneerBiriyani from "../assets/ShahiPaneerBiriyani.webp";
import Veg_meals from "../assets/Veg_meals.jpeg";
import CarrierMeals from "../assets/CarrierMeals.jpeg";
import FriedchickenKebab from "../assets/FriedchickenKebab.jpeg";


function Menu() {

    const MenuList = [
        {
            name: "Paneer Biriyani",
            image: PaneerBiriyani,
            price: 200,
        },
        {
            name: "Shahi Biriyani",
            image: ShahiBiriyani,
            price: 235,
        },
        {
            name: "Shahi Paneer Biriyani",
            image: ShahiPaneerBiriyani,
            price: 300,
        },
        {
            name: "Veg-Meals",
            image: Veg_meals,
            price: 350,
        },
        {
            name: "Carrier-Meals",
            image: CarrierMeals,
            price: 500,
        },
        {
            name: "Fried Chicken Kebab",
            image: FriedchickenKebab,
            price: 200,
        },
    ];


    return (

        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem) => {
                    return (<MenuItem
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                    />
                    );
                })}
            </div>
        </div>

    );
}

export default Menu;