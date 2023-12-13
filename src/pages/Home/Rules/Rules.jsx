import { Link } from "react-router-dom";


const Rules = () => {
    return (
        <div className=" text-center mt-16">
            <h2 className=" text-4xl font-bold mb-4">Forum Rules and Guidelines</h2>
            <p className=" text-base font-normal">Start with a brief introduction expressing the importance of maintaining a positive and respectful community. Thank users for being part of the forum.</p>
            <Link to='rulesPage'><button className="btn bg-blue-400 mt-5 text-white ">Forum Rules</button></Link>
        </div>
    );
};

export default Rules;