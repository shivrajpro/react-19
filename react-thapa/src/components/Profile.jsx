import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hello Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, Keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;
