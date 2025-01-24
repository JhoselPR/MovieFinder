import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SingleMovie = () => {
    const { id } = useParams();
    const {isLoading, error, data} = useFetch(`&i=${id}`);

  return (
    <div>SingleMovie</div>
  )
}

export default SingleMovie;