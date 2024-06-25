import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { img, title, painter_name, uploaded, about } = data;
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center my-32">
      <div>
        <img
          src={img}
          className="h-[265px] lg:h-[290px] md:w-[600px] lg:rounded-l-2xl lg:rounded-r-none rounded-t-2xl"
          alt=""
        />
      </div>
      <div className="border-2 md:w-[600px] w-[400px] md:rounded-r-2xl rounded-b-2xl px-6 py-[50px]">
        <h1 className="text-3xl text-center font-semibold">{title}</h1>
        <div className="flex justify-between">
          <h3 className="text-2xl font-medium mt-6">
            Painter : {painter_name}
          </h3>
          <h3 className="text-2xl font-light mt-6">{uploaded}</h3>
        </div>
        <h1 className="font-medium text-2xl mt-8">{about}</h1>
      </div>
    </div>
  );
};

export default Details;
