/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ShowNews = ({news}) => {

    const {id, author, title, thumbnail_url, details, rating, total_view} = news;

    return (
        <div className="mb-5">
            <div className="flex justify-between items-center bg-gray-200 p-3 rounded-t-lg">
                <div className="flex gap-3 items-center">
                    <div>
                        <img className="h-10 rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">{author.name}</h3>
                        <p>{author.published_date}</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <img className="h-5" src="https://img.icons8.com/?size=48&id=82461&format=png" alt="" />
                    <img className="h-5" src="https://img.icons8.com/?size=60&id=98959&format=png" alt="" />
                </div>
            </div>

            <div className="border rounded-b-lg border-gray-300 p-4">
                <h1 className="font-bold text-2xl">{title}</h1>
                <div>
                    <img className="w-full h-[300px] mt-3" src={thumbnail_url} alt="" />
                </div>

                <div>
                    <p className="mt-3 border-b border-gray-300 pb-4">
                        {details && details.slice(0, 200)}
                        <Link to={`/detailsNews/:${id}`}><span className="text-red-500 font-bold"> Read More</span></Link>
                    </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-2">
                            <img className="h-5" src="https://img.icons8.com/?size=96&id=qdQpy48X3Rjv&format=png" alt="" />
                            <img className="h-5" src="https://img.icons8.com/?size=96&id=qdQpy48X3Rjv&format=png" alt="" />
                            <img className="h-5" src="https://img.icons8.com/?size=96&id=qdQpy48X3Rjv&format=png" alt="" />
                            <img className="h-5" src="https://img.icons8.com/?size=96&id=qdQpy48X3Rjv&format=png" alt="" />
                            <img className="h-5" src="https://img.icons8.com/?size=96&id=qdQpy48X3Rjv&format=png" alt="" />
                        </div>
                        <div>
                            {rating.number}
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <img className="h-5" src="https://img.icons8.com/?size=48&id=85130&format=png" alt="" />
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShowNews
