/* eslint-disable react/prop-types */
import AllCategory from "./AllCategory"
import News from "./News"
import RightSideNews from "./RightSideNews"

const AllNews = () => {
    return (
        <div className="max-w-[90%] xl:max-w-[1150px] mx-auto grid lg:grid-cols-5 gap-8 mt-10 pb-16">
            <div>
                <AllCategory></AllCategory>
            </div>

            <div className="lg:col-span-3">
                <News></News>
            </div>

            <div>
                <RightSideNews></RightSideNews>
            </div>
        </div>
    )
}

export default AllNews
