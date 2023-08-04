import aboutImg from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod
            sunt aut ad, officia voluptatem ullam culpa pariatur distinctio?
            Soluta doloremque voluptatem placeat quo aliquam repellat tenetur
            voluptates autem quam quae recusandae natus facere ipsum alias velit
            voluptatum ducimus accusamus officiis rerum, quasi ea
            perferendis?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Minima maiores id expedita. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Amet tenetur dicta minima!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImg}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
