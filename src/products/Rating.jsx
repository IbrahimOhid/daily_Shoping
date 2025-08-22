import  Star  from "../assets/product_image/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(Star);
  return (
    <div className="flex items-center space-x-1 mt-2">
      {stars.map((star, index) => (
        <img key={index} src={star} width={14} height={14} alt="star" />
      ))}
    </div>
  );
};

export default Rating;
