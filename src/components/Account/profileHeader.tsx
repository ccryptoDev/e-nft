import { Link } from "react-router-dom";
import { getPublicName } from '../../utils'

const ProfileHeader = () => {
  let publicName = getPublicName();

  return (
    <div className="user-profile">
      <div className="profile-image">
        <img src="https://cdn.curios.com/3/customers/53/avatar.svg" alt="" />
      </div>
      <div className="profile-text">
        <div>
            <h2>@{publicName}</h2>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div className="profile-edit">
        <Link className="btn-base btn-medium btn-outline-white" to="/account/profile/" title="">Edit Profile</Link>
      </div>
    </div>
  )
}

export default ProfileHeader