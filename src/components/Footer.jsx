import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-14 bg-orange-500">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between py-6 px-2">
        <h1 className="text-gray-800 text-xl capitalize">
          Best <span className="font-bold">Eats</span>
        </h1>
        <p className="font-bold text-gray-800 text-lg md:text-xl">
          developed ❤ nerdware hub
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/nerdwarehub"
            className="text-gray-800"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.facebook.com/nerdwarehub"
            className="text-gray-800"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://www.facebook.com/nerdwarehub"
            className="text-gray-800"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
