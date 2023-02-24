import React from "react";
import image from "../assets/Indianfood.jpg";
import "../styles/About.css";
function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Unexpected, understated, and fundamentally authentic. In an alchemical feat of flavor and flare, Indian Cuisine manages to be both authentic and innovative. Whereas most Indian restaurants ply you with a predictable list of Sub-Continental All Stars, Cinnamon offers a tour of almost every Indian state. - Chronogram, February 2017
                    We bring the flavors of India’s many regions to the Hudson Valley so our customers can explore the traditional dishes of our childhoods. We also offer inventive cocktails and modern plates that combine the authentic flavors, aromas and spices of India with contemporary American ingredients. Our menu relies on high-quality meats, dairy and produce, mostly sourced from local farms.
                    We're also pleased to offer an international wine list, extensive collection of artisan beers from New York State craft breweries, and house cocktails inspired by flavors of the Indian Sub-Continent.
                    Indian Cuisine is located in the center of the Village of Rhinebeck and features a comfortable dining room with a large communal table, plenty of intimate seating, and the spice room—a second floor cocktail den serving small plates.

                </p>
            </div>
        </div>
    );
}

export default About;