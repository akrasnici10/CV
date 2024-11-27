import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import bild5 from "../assets/projects/bild5.png";

export const HERO_CONTENT = "Jag är en cybersäkerhetsstudent som snart tar examen, med en bra grund inom programmering och IT-infrastruktur. Jag har erfarenhet av att jobba med Python och ELK-stacken och har hjälpt Motala Kommun att stärka sin infrastruktur. Jag kan också bygga webbapplikationer med verktyg som React, Next.js, Node.js, MySQL, PostgreSQL och MongoDB. Mitt mål är att utvecklas inom cybersäkerhet och bidra till säkrare digitala miljöer" ;

export const ABOUT_TEXT = `Hej!
Jag heter Adnan och är 24 år från Motala. Jag pluggar IT och älskar att lösa olika typer av problem. Jag tycker att det är kul att vrida och vända på utmaningar tills man hittar den bästa lösningen. I skolprojekt och i sociala sammanhang så trivs jag bäst när jag får bolla idéer med andra. När jag inte sitter vid datorn så håller jag mig aktiv. Jag spelar lokalfotboll, går på gym och och är i allmänhet väldigt sportintresserad. Jag tror att det är viktigt att utvecklas som person, inte bara inom IT. Därför försöker jag vara en schysst lagspelare som bidrar med bra energi, oavsett om det är på planen eller i ett projektarbete.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "IT-Säkerhetsteknikerstudent",
    company: "TUC Yrkeshögskola.",
    description: "Som IT-säkerhetstekniker har jag byggt en bred kompetens inom nätverk och säkerhet. Under utbildningen har jag jobbat med praktiska övningar för att sätta upp och säkra olika IT-miljöer. Jag är van vid att hantera nätverksutrustning som brandväggar, switchar och routrar och att konfigurera dem säkert. Jag har också erfarenhet av att bygga och hantera system med Docker och Active Directory, samt att skriva säkra skript i Python för att automatisera processer och säkerhetskontroller. Det roligaste har varit att kombinera teori med praktiska övningar för att lösa verkliga problem inom IT-säkerhet.",
    technologies: ["Docker", "Python", "Active Directory", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Abbonemangsförsäljare",
    company: "Elgiganten",
    description: "Som abonnemangsförsäljare på Elgiganten byggde jag starka kundrelationer och lärde mig att lyssna på kundens behov. Det handlade om att förstå varje kunds situation och hitta den bästa lösningen, oavsett om det gällde mobil-, bredbands- eller TV-abonnemang. Jag fick öva på att förklara tekniska lösningar på ett enkelt sätt, vilket gav mig värdefull erfarenhet i tydlig kommunikation och anpassning efter kunden. Arbetet i butiksmiljö stärkte också min samarbetsförmåga och stresstålighet, särskilt under högsäsong.",
    technologies: ["Problemlösning", "Kommunikation", "Teamwork & Sammarbete ", ],
  },
  {
    year: "2019 - 2022",
    role: "Servicemedarbetare",
    company: "Elgiganten",
    description: "Som servicemedarbetare på Elgiganten fick jag min första riktiga erfarenhet av IT-problemlösning. Jag mötte kunder med olika tekniska problem – från virusinfekterade datorer och hackade konton till krånglande nätverk och trasiga enheter. Det var här mitt intresse för IT-säkerhet började, när jag såg hur många som drabbas av IT-problem och cyberattacker. Jobbet lärde mig att felsöka snabbt under tidspress och att förklara tekniska problem på ett sätt som kunderna förstod. Jag fick också grundläggande kunskaper i datasäkerhet och virushantering, vilket inspirerade mig att utbilda mig inom IT-säkerhet.",
    technologies: ["Praktisk erfarenhet av IT-felsökning", "Problemlösning under tidspress",],
  },
  {
    year: "2016 - 2019",
    role: "Ekonomi Programmet",
    company: "Platen Gymnasiet",
    description: `På Platenskolan läste jag ekonomiprogrammet där jag fick en bred grund inom företagsekonomi och entreprenörskap. Under de tre åren jobbade vi mycket med praktiska case och projekt som gav en bra inblick i hur företag fungerar. Ett av de mest lärorika momenten var när vi drev UF-företag, där vi fick testa på hela processen från affärsidé till bokslut.
Utöver företagsekonomi läste vi kurser i redovisning, marknadsföring och juridik vilket gav mig en bra förståelse för hur olika delar i ett företag hänger ihop. Programmet utvecklade också min analytiska förmåga och mitt sinne för siffror, något som jag har stor nytta av än idag.`,
    technologies: ["Företagsekonomi", "Juridik", "Entreprenörskap",],
  },
];

export const PROJECTS = [
  {
    title: "E-handelswebbplats",
    image: project1,
    description:
      "En fullt fungerande e-handelswebbplats med funktioner som produktlistning, kundvagn och användarverifiering. Denna skapade till en bekant som hade startat eget.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "Ett verktyg för att strukturera, prioritera och följa upp dina dagliga uppgifter och projekt. Det unika med denna appen är att den är skapad med python för både front och backend samt user authentication genom användning av 'Flask' och 'SQLAlchemy' ",
    technologies: ["Python", "Flask", "SQLAlchemy",],
  },
  {
    title: "Portfoliohemsida",
    image: project3,
    description:
      "En personlig CV-hemsida som visar mina projekt, kompetenser och kontaktinformation.",
    technologies: ["HTML", "CSS", "React",],
  },
  {
    title: "ELK Stack Optimering för Kommunens Infrastruktur",
    image: bild5,
    description:
      "Som praktikant hos Motala kommun så arbetade jag med ELK stack. Där satte jag upp nya regler, förbättrade alerts, och filtrerade bort falska larm. Dessutom använde jag machine learning för att göra systemet ännu mer träffsäkert.",
    technologies: ["ELK-Stack", "SIEM", "EDR",],
  }
 
];

export const CONTACT = {
  address: "Lustigkullevägen 20B",
  phoneNo: "+46760912950",
  email: "Adnankrasnici5@gmail.com",
};
