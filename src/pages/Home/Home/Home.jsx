import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Announcement from "../Notification/Announcement";

import Post from "../Post/Post";
import Tag from "../Tag/Tag";
import Rules from "../Rules/Rules";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Forum | Home</title>
            </Helmet>
            <Banner></Banner>
            <Rules></Rules>
            <Tag></Tag>
            <Announcement></Announcement>
            <Post></Post>
        </div>
    );
};

export default Home;