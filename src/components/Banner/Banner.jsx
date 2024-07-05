

const Banner = () => {
    return (
        <div className="hero bg-slate-200 max-w-6xl mx-auto mt-12 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
                <div>
                <img
                src="/src/assets/pngwing 1.png"
                className="max-w-sm rounded-lg" />
                </div>
                <div>
                <h1 className="text-5xl font-bold lg:mb-12">Books to freshen up <br /> your bookshelf</h1>
                
                <button className="btn btn-success text-white font-bold">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;