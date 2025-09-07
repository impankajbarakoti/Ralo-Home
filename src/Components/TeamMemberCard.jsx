import { Phone, MapPin, Mail } from "lucide-react";

const TeamMemberCard = ({ image, title, name, phone, address, email }) => {
  return (
    <div className="bg-team-card-bg border border-green-700 border-team-card-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="mb-4">
        <img
          src={image}
          alt={`${name} - ${title}`}
          className="w-full h-52 sm:h-60 object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        {/* Name & Title */}
        <div>
          <p className="text-team-title text-sm font-medium">{title}</p>
          <h3 className="text-team-name text-lg font-bold">{name}</h3>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-team-contact text-sm">
          <div className="flex items-start">
            <Phone className="w-4 h-4 mr-2 mt-[2px] flex-shrink-0" />
            <span>{phone}</span>
          </div>

          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-2 mt-[2px] flex-shrink-0" />
            <span>{address}</span>
          </div>

          <div className="flex items-start break-words">
            <Mail className="w-4 h-4 mr-2 mt-[2px] flex-shrink-0" />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
