import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
    const { isLoading, data } = useContext(DataContext);

  return (
    <div className="movies-content">
        {
            !isLoading ? data.map(item => (
                <ItemMovie />
            ))
            : ""
        }
    </div>
  )
}

export default Movies