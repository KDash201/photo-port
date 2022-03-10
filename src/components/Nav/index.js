import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    {
      name: "Commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Portraits", description: "Portraits of people in my life" },
    { name: "Food", description: "Delicious delicacies" },
    {
      name: "Landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => handleClick("About")}
            >
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick("Contact")}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick(category.name);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
