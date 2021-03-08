import Tile from "./Tile";

const Minefield = ({ map }) => {
   return (
      <div className="minefield">
         {map.map((row, i) => {
            return (
               <div className="minefield_row" key={"row " + map[i][0].y}>
                  {row.map((tile) => {
                     return <Tile key={tile.id} obj={tile} />;
                  })}
               </div>
            );
         })}
      </div>
   );
};
export default Minefield;
