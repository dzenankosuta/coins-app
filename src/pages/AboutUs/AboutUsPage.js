import React from "react";
import UserCard from "../../components/UserCard/UserCard";

const AboutUsPage = () => {
  return (
    <div className="mt-24 mb-20 flex flex-row justify-evenly items-center min-h-[54vh]">
      <UserCard
        name="Dženan Košuta"
        place="Novi Pazar, Serbia"
        description="Dženan is a mathematician, and he work's in center NIT as a Web developer"
        git="https://github.com/dzenankosuta"
        image="https://avatars.githubusercontent.com/u/89378479?v=4"
      />
      <UserCard
        name="Senad Đerlek"
        place="Novi Pazar, Serbia"
        description="Senad work's in center NIT as a Web developer"
        git="https://github.com/Senaddd"
        image="https://avatars.githubusercontent.com/u/100077402?v=4"
      />
      <UserCard
        name="Emir Gegić"
        place="Tutin, Serbia"
        description="Emir is a mathematician, and he work's in center NIT as a Web developer"
        git="https://github.com/gegeeem"
        image="https://pbs.twimg.com/profile_images/1167150397632462850/ogLL-HOT.jpg"
      />
      <UserCard
        name="Edin Kučević"
        place="Novi Pazar, Serbia"
        description="Edin work's in center NIT as a Web developer"
        git="https://github.com/edinkucevic"
        image="https://avatars.githubusercontent.com/u/101284406?s=400&u=0c8b65b3abdde14c7d6a573a37570d20722efad4&v=4"
      />
    </div>
  );
};

export default AboutUsPage;
