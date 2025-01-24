import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("");
    const { setQuery, error } = useContext(DataContext);

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
        //console.log("title: ", title);
    }

    return (
        <div className="form-search">
            <h2>Movie Finder</h2>
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <input type="text" placeholder="Title movie" onChange={e => setTitle(e.target.value)} />
                    <input type="submit" value="Search" />
                </div>
            </form>
            {error && <p className="error">The movie doesn't exist.</p>}
        </div>
    )
}

export default FormSearch;