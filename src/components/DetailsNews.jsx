import { Link, useLoaderData, useParams } from "react-router-dom"
import RightSideNews from "./RightSideNews";

const DetailsNews = () => {

    const {_id} = useParams();
    const newses = useLoaderData();
    const news = newses.find(news => news._id == _id);
    const {image_url,title, details} = news;

    return (
        <div className="max-w-[90%] xl:max-w-[1150px] mx-auto grid lg:grid-cols-5 gap-8 mt-10 pb-16">
            <div className="col-span-4">
                <img src={image_url} alt="" />
                <h1 className="font-bold text-2xl mt-3 mb-3">{title}</h1>
                <p>{details}</p>
                <Link to='/'>
                    <button className="bg-blue-600 py-3 px-10 rounded-md text-white font-semibold mt-4">Back to All News</button>
                </Link>
            </div>

            <div>
                <RightSideNews></RightSideNews>
            </div>
        </div>
    )
}

export default DetailsNews
