export const inputName = (value) => {
  console.log("value", value);
  return {
    type: "filters/inputName",
    payload: `${value}`,
  };
};
