import { useEffect, useState } from "react"
import ShowNews from "./ShowNews";

const News = () => {

    const [newses, setNewses] = useState([]);

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNewses(data));
    }, [])

    return (
        <div>
            <h1 className="font-bold text-xl mb-4">Dragon News Home</h1>
            {newses.map((news, index) => <ShowNews key={index} news={news}></ShowNews>)}
        </div>
    )
}

export default News
