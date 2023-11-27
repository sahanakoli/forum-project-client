/* eslint-disable react/prop-types */


const TagCard = ({tags}) => {
    const {tag} = tags;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{tag}</h2>
                </div>
            </div>
        </div>
    );
};

export default TagCard;