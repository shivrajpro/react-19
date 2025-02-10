const ProfileCard = ({ name, age, greeting, children }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>Age: {age} </p>
      <div> Greeting: {greeting} </div>
      <div> {children} </div>
    </div>
  );
};

export default ProfileCard;
