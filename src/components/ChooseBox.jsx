import { useState, useEffect } from "react";
import { boxes } from "./../data.json";

const ChooseBox = () => {
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);

  const boxesArray = boxes;

  const removeSingleTech = (url) => {
    const newImagesUrl = imagesUrl.filter((selectedUrl) => selectedUrl !== url);

    setImagesUrl(newImagesUrl);
  };

  const reset = () => {
    setImageUrl("");
    setValue("");
    setImagesUrl([]);
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="flex flex-col mt-10">
      <form className="flex flex-col items-start gap-4 p-4">
        <div className="p-5 border bg-slate-200 border-black rounded-md w-full flex flex-row justify-between">
          <input
            className=" rounded-md p-2"
            value={value}
            onChange={(e) => {
              e.preventDefault();
              setValue(e.target.value);
            }}
            placeholder="favorite technology ???"
          />
          <img src={imageUrl} alt={value} className=" max-h-10 rounded-3xl" />
          <button
            className="bg-yellow-400 p-2 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3 pt-10 gap-20  text-center">
        {boxesArray.map((box) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              setValue(box.title);
              setImageUrl(box.url);

              if (!imagesUrl.find((url) => url === box.url)) {
                imagesUrl.push(box.url);
              }
              setImagesUrl(imagesUrl);
            }}
            key={box.id}
            className="bg-slate-200 rounded-full p-5 flex flex-col items-center gap-2"
          >
            <h2 className="text-gray-500 font-mono">{box.title}</h2>
            <img
              src={box.url}
              alt={box.title}
              className=" max-h-20 rounded-3xl  cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div>
        <div className="flex flex-row gap-20 mt-20 bg-gray-200 rounded-md p-10 h-40 items-center justify-start">
          <div className="flex">
            <label> Your Favorite(s) </label>
          </div>
          <div className=" flex  flex-row gap-4  items-center ">
            {imagesUrl.map((url) => (
              <div
                key={url}
                className="bg-yellow-100 rounded-full p-4"
                onClick={() => removeSingleTech(url)}
              >
                <img src={url} className="h-5 rounded-full " />
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-gray-500 font-mono text-center">
          To Remove a Fav.Tech just Click On It&apos;s Icon
        </h2>
      </div>
    </div>
  );
};
export default ChooseBox;
