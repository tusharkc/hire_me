
const ExperienceListItem = ({ experience }) => {
  const { companyName = "", designation = "", skills = [], id } = experience;

  return (
    <li className="border-t-[1px] border-zinc-700 py-12">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-12 gap-6">
          <p className="text-4xl font-thin col-span-2">#{id}</p>
          <div className="col-span-12 md:col-span-5">
            <p className="font-bold text-4xl tracking-wide">{companyName}</p>
            <p>{designation}</p>
          </div>
          <div className="flex items-center flex-wrap col-span-12 md:col-span-5">
            {skills?.map((skill, index) => (
              <span className="px-2 py-1 border m-1 rounded-full" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExperienceListItem;
