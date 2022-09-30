const Cards = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow-lg hover:scale-105 duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
          <div className="flex items-center justify-between p-3">
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-xl font-medium text-orange-500">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
