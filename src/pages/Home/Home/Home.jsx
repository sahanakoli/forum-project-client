import Banner from "../Banner/Banner";
import Announcement from "../Notification/Announcement";

import Post from "../Post/Post";
import Tag from "../Tag/Tag";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tag></Tag>
            <Announcement></Announcement>
            <Post></Post>
        </div>
    );
};

export default Home;