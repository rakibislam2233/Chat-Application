/* eslint-disable react/prop-types */
import gravatarUrl from "gravatar-url";
const ParticipentProfile = ({ partner }) => {
  const { name, email, profileImage } = partner;
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="text-center space-y-2">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src={
            profileImage ||
            gravatarUrl(email || "example@gmail.com", { size: 80 })
          }
          alt=""
        />
        <h1 className="font-semibold text-xl">{name}</h1>
        <button className="px-8 py-2 bg-gray-700 rounded font-semibold">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ParticipentProfile;
