import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/team-1.jpg",
      title: "Loan Officer",
      name: "Sarah Davis",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "sarahdavis@ralo.com",
    },
    {
      id: 2,
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-6.jpg",
      title: "Office Manager",
      name: "Elizabeth White",
      phone: "+1 3324 55 537",
      address: "Hilton Road, 90KY, NY, America",
      email: "elizabethwhite@ralo.com",
    },
    {
      id: 3,
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-5.jpg",
      title: "CEO at Ralo",
      name: "Richard Jackson",
      phone: "+1 3324 55 536",
      address: "Hilton Road, 90KY, NY, America",
      email: "richardjackson@ralo.com",
    },
    {
      id: 4,
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-3.jpg",
      title: "Business Manager",
      name: "Laura Martinez",
      phone: "+1 3324 55 535",
      address: "Hilton Road, 90KY, NY, America",
      email: "lauramartinez@ralo.com",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-team-name mb-4">
          Visit our professional team member for
          <br />
          your any help from us
        </h2>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            image={member.image}
            title={member.title}
            name={member.name}
            phone={member.phone}
            address={member.address}
            email={member.email}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
