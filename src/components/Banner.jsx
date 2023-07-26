import PizzaBanner from "../assets/images/pizza_banner.png";

export const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 flex items-center justify-between relative mx-auto px-7">
      <div className=" banner-description w-full md:w-1/2 p-3"></div>
      <div className="banner-image w-full md:w-1/2 p-3">
        <img src={PizzaBanner} alt="banner" className="max-h-95" />
      </div>
    </div>
  );
};
