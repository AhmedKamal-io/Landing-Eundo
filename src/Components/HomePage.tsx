import GridPart from "./GridPart";

const Home = () => {
  return (
    <section className="flex justify-start h-[100vb] p-15 items-center relative">
      <div className="w-[50%]">
        <h1 className="text-6xl font-bold my-7">
          Fresh Air Inside your house.
        </h1>
        <p className="text-BlackyFade w-[80%] mb-2.5">
          take fresh air directly inside your house from an air Puriffier
          crafted by our expert in the area with more than 10 years of
          experience.
        </p>
        <a
          href="$"
          className="px-4 py-2 my-2 block w-fit font-bold bg-Blacky text-Whitey rounded-full"
        >
          Buy some fresh air
        </a>
        <div>
          <h2 className="text-4xl font-bold mt-5 mb-1 text-blue-700">+500%</h2>
          <p className="text-BlackyFade text-sm">increase Air quality</p>
        </div>
      </div>
      <div className=" font-bold absolute bottom-3 left-7">
        <h2>trusted by:</h2>
        <div className="flex items-center justify-center gap-4 font-light">
          <p>apple</p>
          <p>microsoft</p>
          <p>the boring company</p>
        </div>
      </div>
      <GridPart />
    </section>
  );
};

export default Home;
