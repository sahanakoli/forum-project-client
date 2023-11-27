import AnnouncementCard from "../../../component/AnnouncementCard/AnnouncementCard";
import useAnnouncement from "../../../hooks/useAnnouncement";


const Notification = () => {
    const [announcement] = useAnnouncement();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {
               announcement.map(announce => <AnnouncementCard key={announce.id} announce={announce}></AnnouncementCard>)
            }
        </div>
    );
};

export default Notification;