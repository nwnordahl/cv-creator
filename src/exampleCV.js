import uniqid from "uniqid";
import Profilbilde from "./img/Profilbilde.jpeg";

const exampleCV = {
  personalInformation: {
    name: "Nicolai Warenfors Nordahl",
    title: "Aspirerende Utvikler",
    email: "nicolaiwnordahl@gmail.com",
    phoneNumber: "97189897",
    address: "Borgine Sofies Vei 6, Drammen",
    aboutMe: "Ta kontakt for referanser.",
    image: Profilbilde,
  },

  experiences: [
    {
      position: "Barnehageassistent",
      company: "Bakkefaret FUS Barnehage",
      place: "Mjøndalen",
      from: "2021",
      to: "2022",
      id: uniqid(),
    },
    {
      position: "Gruppelærer",
      company: "Universitetet i Oslo",
      place: "Oslo",
      from: "2020",
      to: "2020",
      id: uniqid(),
    },
    {
      position: "Varehusmedarbeider",
      company: "Rusta",
      place: "Krokstadelva",
      from: "2016",
      to: "2017",
      id: uniqid(),
    },
  ],
  experience: {
    position: "",
    company: "",
    place: "",
    from: "",
    to: "",
    id: uniqid(),
  },

  educations: [
    {
      school: "Universitetet i Oslo",
      place: "Oslo",
      subject: "Matematikk med informatikk",
      from: "2017",
      to: "2020",
      id: uniqid(),
    },
    {
      school: "Eiker VGS",
      place: "Hokksund",
      subject: "Studiespesialisering",
      from: "2014",
      to: "2017",
      id: uniqid(),
    },
  ],
  education: {
    school: "",
    place: "",
    subject: "",
    from: "",
    to: "",
    id: uniqid(),
  },

  knowledges: [
    {
      skill: "HTML",
      id: uniqid(),
    },
    {
      skill: "CSS",
      id: uniqid(),
    },
    {
      skill: "JavaScript",
      id: uniqid(),
    },
    {
      skill: "React",
      id: uniqid(),
    },
    {
      skill: "Node",
      id: uniqid(),
    },
    {
      skill: "Express",
      id: uniqid(),
    },
    {
      skill: "REST",
      id: uniqid(),
    },
    {
      skill: "Jest",
      id: uniqid(),
    },
    {
      skill: "Webpack",
      id: uniqid(),
    },
    {
      skill: "Linux",
      id: uniqid(),
    },
    {
      skill: "Bash",
      id: uniqid(),
    },
    {
      skill: "Git",
      id: uniqid(),
    },
    {
      skill: "GitHub",
      id: uniqid(),
    },
    {
      skill: "Python",
      id: uniqid(),
    },
    {
      skill: "Visual Studio Code",
      id: uniqid(),
    },
    {
      skill: "Firebase",
      id: uniqid(),
    },
  ],
  knowledge: {
    skill: "",
    id: uniqid(),
  },
};

export default exampleCV;
