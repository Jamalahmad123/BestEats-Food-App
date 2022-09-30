import { headLine } from "../data/data";

const HeadLine = () => (
  <section className="pt-12">
    <div className="container mx-auto grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
      {headLine.map((card) => (
        <div className="relative w-full shadow-lg rounded-xl" key={card.id}>
          <div className="absolute w-full h-full bg-black/50 text-white p-4 rounded-xl">
            <h2 className="capitalize font-bold text-2xl pt-4">{card.title}</h2>
            <p className="capitalize">{card.desc}</p>
            <button className="capitalize font-semibold absolute bottom-4 border-white text-gray-800 bg-white px-2">
              order now
            </button>
          </div>
          <img
            src={card.img}
            alt="card-img"
            className="h-[200px] w-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  </section>
);

export default HeadLine;
