import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  username,
  email,
  id,
  address: { street, suite, city, zipcode },
  phone,
  website,
  company: { name, catchPhrase, bs },
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 rounded-2xl shadow-2xl p-6 m-4 transition-transform hover:scale-105 hover:shadow-pink-300">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">{username}</h3>
        <h4 className="text-lg font-semibold text-pink-100">{name}</h4>
        <p className="text-sm text-white mb-2 italic">{catchPhrase}</p>
        <div className="bg-black bg-opacity-20 rounded-lg p-2 mb-2">
          <p className="text-white">
            <span className="font-semibold">Address:</span> {street}, {suite}, {city}, {zipcode}
          </p>
          <p className="text-white">
            <span className="font-semibold">Phone:</span> {phone}
          </p>
          <p className="text-white">
            <span className="font-semibold">Website:</span>
            <a
              href={`http://${website}`}
              className="underline hover:text-yellow-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </p>
        </div>
        <p className="text-xs text-pink-200 mb-1">{bs}</p>
      </div>
      <p className="text-white font-medium">{email}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-white">
        <span className="bg-pink-600 px-2 py-1 rounded-full">User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;