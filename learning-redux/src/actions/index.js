/* ACTION -> DESCRIBE WHAT YOU WANT TO DO. SIMPLE FUNCTION THAT RETURN OBJECT */
export const increment = nr => {
  return {
    type: 'INCREMENT',
    payload: nr,
  };
};
export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
