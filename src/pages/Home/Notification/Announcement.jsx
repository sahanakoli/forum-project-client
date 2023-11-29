import AnnouncementCard from "../../../component/AnnouncementCard/AnnouncementCard";
import useAnnouncement from "../../../hooks/useAnnouncement";


const Announcement = () => {
    const announcement = useAnnouncement();
    return (
        <div>
            <h2 className=" text-4xl font-bold text-center mt-24">All Announcement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {
               announcement.map(announce => <AnnouncementCard key={announce.id} announce={announce}></AnnouncementCard>)
            }
        </div>
        </div>
    );
};

export default Announcement;