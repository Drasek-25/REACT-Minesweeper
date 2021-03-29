const mapTypes = {
   small: {
      name: "Small",
      height: 8,
      width: 8,
      totalSquares: 64,
      safeSquares: 54,
      mines: 10,
   },
   medium: {
      name: "Medium",
      height: 13,
      width: 15,
      totalSquares: 195,
      safeSquares: 155,
      mines: 40,
   },
   large: {
      name: "Large",
      height: 16,
      width: 30,
      totalSquares: 480,
      safeSquares: 381,
      mines: 99,
   },
};
export default mapTypes;
