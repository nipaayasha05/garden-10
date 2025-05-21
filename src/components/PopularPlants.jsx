import React from "react";

const PopularPlants = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-green-900 text-center font-bold">
        Green Stars of the Month
      </h3>
      <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        <div className="card bg-base-100  shadow-lime-900 shadow-md   ">
          <figure>
            <img
              className="w-[350px] h-[400px]"
              src={`https://potsforplants.ph/cdn/shop/products/areca-palm-palmera-849528.jpg?v=1697027415`}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Snake Plant (Sansevieria) </h2>
            <p className="text-xl">price:6.99$</p>
            <div className="card-actions justify-end">
              <button className="btn rounded-full bg-green-800 text-white border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-lime-900 shadow-md   ">
          <figure>
            <img
              className="w-[350px] h-[400px]"
              src={`https://www.ikea.com/bh/en/images/products/aloe-vera-potted-plant-aloe__0653978_pe708207_s5.jpg`}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Snake Plant (Sansevieria) </h2>
            <p className="text-xl">price:6.99$</p>
            <div className="card-actions justify-end">
              <button className="btn rounded-full bg-green-800 text-white border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-lime-900 shadow-md   ">
          <figure>
            <img
              className="w-[350px] h-[400px]"
              src={`https://www.houseplant.co.uk/cdn/shop/files/DSC00503.jpg?v=1724921257&width=1946`}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Peace Lily </h2>
            <p className="text-xl">price:6.00$</p>
            <div className="card-actions justify-end">
              <button className="btn rounded-full bg-green-800 text-white border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-lime-900 shadow-md   ">
          <figure>
            <img
              className="w-[350px] h-[400px]"
              src={`https://cdn.blossominggifts.com/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pink-rose-plant-dark-grey-pot_1.webp`}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rose Plant </h2>
            <p className="text-xl">price:7.05$</p>
            <div className="card-actions justify-end">
              <button className="btn rounded-full bg-green-800 text-white border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-lime-900 shadow-md   ">
          <figure>
            <img
              className="w-[350px] h-[400px]"
              src={`https://magnolia.com/images/res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/files/M10320040485_2.jpg?v=1743175269`}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mint Plant (Pudina)</h2>
            <p className="text-xl">price:7.00$</p>
            <div className="card-actions justify-end">
              <button className="btn rounded-full bg-green-800 text-white border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-lime-900 shadow-md   ">
          <figure>
            <img
              className="w-[350px] h-[400px]"
              src={`https://media.bunches.co.uk/products/pstep2-1.jpg`}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jasmine Plant </h2>
            <p className="text-xl">price:7.99$</p>
            <div className="card-actions justify-end">
              <button className="btn rounded-full bg-green-800 text-white border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPlants;
