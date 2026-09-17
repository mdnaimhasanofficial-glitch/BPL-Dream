import BannerImg from '../../Resource/banner-main.png'

const Banner = () => {
    return (
        <div className="px-3 sm:px-4">
            <div className="
                container mx-auto
                text-center
                space-y-4 sm:space-y-5
                bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
                rounded-xl sm:rounded-2xl
                mt-2
                p-5 sm:p-8 md:p-10
            ">

                {/* Banner Image */}
                <img
                    className="mx-auto w-40 sm:w-52 md:w-60 lg:w-64"
                    src={BannerImg}
                    alt="Banner"
                />

                {/* Heading */}
                <h2 className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    text-white
                    leading-tight
                ">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h2>

                {/* Description */}
                <p className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    text-gray-200
                    font-bold
                ">
                    Beyond Boundaries Beyond Limits
                </p>

                {/* Button */}
                <button className="
                    btn
                    btn-soft
                    btn-secondary
                    text-sm
                    sm:text-base
                    px-5
                ">
                    Secondary
                </button>

            </div>
        </div>
    );
};

export default Banner;