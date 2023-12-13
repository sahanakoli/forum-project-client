import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";


const RulesPage = () => {
    return (
        <div>
            <h2 className=" text-3xl font-bold underline text-center mt-16">Forum Rules and Guidelines </h2>
            <div className="mt-16 mb-6">
                <div className="ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">General Guidelines</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Emphasize the importance of treating all members with respect and courtesy.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Encourage the use of inclusive and non-discriminatory language.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Promote constructive criticism and discourage personal attacks.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Content Posting Rules</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Prohibit spamming and unauthorized advertising.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Encourage users to post high-quality and relevant content.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Strictly prohibit the use of plagiarized content.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Moderation Policies</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Clarify the authority and role of moderators.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Provide instructions on how users can report inappropriate content or behavior.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Privacy and Security</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Advise users not to share personal information.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Remind users to review and adjust privacy settings as needed.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Community Contributions</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Encourage users to contribute positively to the forum community.</h3>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Invite users to provide suggestions for improving the forum.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesPage;