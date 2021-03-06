import Tile from "./Tile";

const Minefield = ({ map }) => {
   return (
      <div className="minefield">
         {map.map((row, i) => {
            return (
               <div className="minefield_row">
                  {row.map((tile, j) => {
                     return <Tile num={tile} />;
                  })}
               </div>
            );
         })}
      </div>
   );
};
export default Minefield;
