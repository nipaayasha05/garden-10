import React from "react";

const LowMaintain = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-green-900 text-center font-bold drop-shadow-emerald-200 drop-shadow-sm pt-10">
        Low-Maintenance Heroes
      </h3>
      <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        <div className="card bg-base-100  shadow-lime-500 shadow-md ">
          <figure>
            <img
              className="w-full h-[350px]"
              src={`https://m.media-amazon.com/images/I/61ti7i9zNgL.jpg`}
              alt=""
            />
          </figure>
          <div className="p-5 bg-lime-50 ">
            <div className="flex items-center justify-between ">
              <h2 className="card-title text-green-800 text-xl font-bold">
                Aparajita (Butterfly Pea){" "}
              </h2>
              <p className="text-end text-green-500 font-semibold   ">Flower</p>
            </div>

            <p className="text-xl text-gray-700">
              Aparajita is a fast-growing, flowering climber with vibrant blue
              blooms. Thrives in small tubs with a trellis and needs minimal
              watering. Its flowers are edible and ornamental, blooming almost
              year-round. Easy to grow, beautiful to look at — ideal for adding
              charm with low effort.
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-lime-500 shadow-md   ">
          <figure>
            <img
              className="w-full h-[350px]"
              src={`https://preview.redd.it/my-green-chilli-plant-has-grown-a-single-tiny-red-one-v0-9y6lhyy5xs5c1.jpeg?width=1080&crop=smart&auto=webp&s=fdfd259352ec9936f5fb03f86b9e253d2d14f348`}
              alt=""
            />
          </figure>
          <div className="p-5 bg-lime-50  ">
            <div className="flex items-center justify-between ">
              <h2 className="card-title text-green-800 text-xl font-bold">
                Chili Pepper (green){" "}
              </h2>
              <p className="text-end text-green-500 font-semibold   ">
                {" "}
                Vegetable
              </p>
            </div>
            <p className="text-xl text-gray-700">
              Chilli plants grow well in pots, need little watering, and love
              sun. They produce fresh chillies for months with minimal care.
              Perfect for balconies, they don’t need daily attention but give
              regular harvests. A spicy, space-saving pick for busy plant
              lovers.
            </p>
          </div>
        </div>

        <div className="card bg-base-100  shadow-lime-500 shadow-md   ">
          <figure>
            <img
              className="w-full h-[350px]"
              src={`https://cdn.treehouse.co/mieta-w-doniczce-uprawa-w-domu.jpg`}
              alt=""
            />
          </figure>
          <div className="p-5 bg-lime-50  ">
            <div className="flex items-center justify-between ">
              <h2 className="card-title text-green-800 text-xl font-bold">
                Mint (Pudina){" "}
              </h2>
              <p className="text-end text-green-500 font-semibold   ">Herb</p>
            </div>
            <p className="text-xl text-gray-700">
              Mint spreads fast in small pots, even in partial shade. Needs
              occasional watering and trimming. Once planted, it grows back
              quickly and offers fresh leaves for tea or chutney anytime. A
              great pick for small balconies and beginner gardeners who want
              green with zero stress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowMaintain;
