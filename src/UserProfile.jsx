import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Saritha";
  const age = 18;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
