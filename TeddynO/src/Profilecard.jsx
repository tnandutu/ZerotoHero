const ProfileCard = ({ name, role, bio, image, children }) => { 
    return (
        <div className="Profile-card">
            <img src={image} alt={`${name}'s profile`} className="profile-image" />  
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{bio}</p>
            <div className="custom-message">{children}</div>
        </div>
    );
}

export default ProfileCard;