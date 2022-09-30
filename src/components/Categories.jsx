import { categories } from "../data/data";

const Categories = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-2 space-y-6">
        {/* Header */}
        <header>
          <h2 className="capitalize font-bold text-orange-500 text-2xl text-center md:text-3xl lg:text-4xl">
            top rated menu Categories
          </h2>
        </header>
        {/* Categories Container */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            return (
              <div
                className="flex items-center justify-between p-4 bg-gray-200"
                key={category.id}
              >
                <h2 className="text-gray-800 text-lg md:text-xl">
                  {category.name}
                </h2>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-14"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
