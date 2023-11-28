/* eslint-disable react/prop-types */


const TagCard = ({tags}) => {
    const {tag} = tags;
    return (
        <div>
            <div className="card w-56 bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-slate-900">{tag}</h2>
                </div>
            </div>
        </div>
    );
};

export default TagCard;