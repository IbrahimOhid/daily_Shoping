export const getImageUrl = (name) => {
  return new URL(`../assets/product_image/${name}`, import.meta.url).href
};