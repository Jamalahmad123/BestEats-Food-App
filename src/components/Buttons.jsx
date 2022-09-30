const Buttons = ({ menuItems, setItems, data, filterList }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        className="bg-white text-orange-500 border border-orange-500 px-4 py-1 hover:text-white font-medium hover:bg-orange-500"
        onClick={() => setItems(data)}
      >
        All
      </button>
      {menuItems.map((item, key) => (
        <button
          onClick={() => filterList(item)}
          key={key}
          className="bg-white text-center text-orange-500 border border-orange-500 px-4 py-1 hover:text-white font-medium hover:bg-orange-500"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
