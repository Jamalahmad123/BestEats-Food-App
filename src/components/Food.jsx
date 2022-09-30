import { useState } from "react";
import { data } from "../data/data";
import Buttons from "./Buttons";
import Cards from "./Cards";

const Food = () => {
  const [items, setItems] = useState(data);

  // Categories
  const menuItems = [...new Set(data.map((val) => val.category))];

  // FilterList
  function filterList(category) {
    const newItems = data.filter((item) => {
      return item.category === category;
    });
    setItems(newItems);
  }

  return (
    <section className="pt-16">
      <div className="container mx-auto space-y-8 px-2">
        {/* Header */}
        <header>
          <h2 className="capitalize font-bold text-orange-500 text-2xl text-center md:text-3xl lg:text-4xl">
            top rated menu items
          </h2>
        </header>

        {/* Filter Content */}
        <div className="flex justify-between flex-col items-start gap-6 lg:items-center lg:flex-row lg:gap-0">
          <div className="space-y-2">
            <h3 className="text-lg text-gray-800 capitalize font-semibold">
              filter type
            </h3>
            {/* Filter Buttons */}
            <Buttons
              menuItems={menuItems}
              setItems={setItems}
              data={data}
              filterList={filterList}
            />
          </div>
        </div>
        <Cards items={items} />
      </div>
    </section>
  );
};

export default Food;
