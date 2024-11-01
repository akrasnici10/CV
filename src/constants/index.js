import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Jag är en entusiastisk cybersäkerhetsstudent som snart tar examen, med en solid grund i både programmering och IT-infrastruktur. Utöver mitt fokus på säkerhet är jag kunnig i Python och har praktisk erfarenhet av ELK-stacken, där jag har hjälpt Motala Kommun att stärka sin infrastruktur. Dessutom har jag erfarenhet av att bygga webbapplikationer med frontend-teknologier som React och Next.js samt backend-ramverk som Node.js, MySQL, PostgreSQL och MongoDB. Mitt mål är att fortsätta utveckla min expertis inom cybersäkerhet, hantera komplexa säkerhetsutmaningar och bidra till att skapa säkrare digitala miljöer. `;

export const ABOUT_TEXT = `Hej!
Jag heter Adnan och är 24 år från Motala. Jag pluggar IT och älskar att lösa olika typer av problem. Jag tycker att det är kul att vrida och vända på utmaningar tills man hittar den bästa lösningen. I skolprojekt och i sociala sammanhang så trivs jag bäst när jag får bolla idéer med andra. När jag inte sitter vid datorn så håller jag mig aktiv. Jag spelar lokalfotboll, går på gym och och är i allmänhet väldigt sportintresserad. Jag tror att det är viktigt att utvecklas som person, inte bara inom IT. Därför försöker jag vara en schysst lagspelare som bidrar med bra energi, oavsett om det är på planen eller i ett projektarbete.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "IT-Säkerhetsteknikerstudent",
    company: "TUC Yrkeshögskola.",
    description: `Som IT-säkerhetstekniker har jag fått en bred kompetens inom både nätverk och säkerhet. Under utbildningen har jag jobbat mycket med praktiska övningar där vi satt upp och säkrat olika IT-miljöer. Jag har blivit särskilt duktig på att hantera nätverksutrustning som brandväggar, switchar och routrar, samt att konfigurera dem på ett säkert sätt.
En stor del av min kunskap ligger i att bygga och hantera systemlösningar med Docker och Active Directory. Jag kan även utveckla säkra skript i Python för att automatisera olika processer och säkerhetskontroller. Det roligaste med utbildningen har varit att få kombinera teori med hands-on erfarenhet, där vi fått lösa verklighetstrogna problem som IT-avdelningar stöter på dagligen.
Mina tekniska kunskaper omfattar: Nätverkssäkerhet (brandväggar, switchar, routrar) Containerhantering med Docker, Programmering i Python, Windows Server och Active Directory samt säker systemkonfiguration`,
    technologies: ["Docker", "Python", "Active Directory", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Abbonemangsförsäljare",
    company: "Elgiganten",
    description: `Under min tid som abonnemangsförsäljare på Elgiganten utvecklade jag starka kundrelationer och lärde mig konsten att verkligen lyssna på kundens behov. Det var mer än bara försäljning – det handlade om att förstå varje kunds unika situation och hjälpa dem hitta den bästa lösningen, vare sig det gällde mobil-, bredband- eller TV-abonnemang.
I rollen fick jag dagligen öva på att förklara komplexa tekniska lösningar på ett enkelt och begripligt sätt. Detta har gett mig ovärderlig erfarenhet i att kommunicera tydligt och anpassa mitt sätt att förklara beroende på vem jag pratar med. Arbetet i butiksmiljön stärkte också min förmåga att samarbeta i team och hantera stressiga situationer, särskilt under högsäsong.
Några viktiga färdigheter jag utvecklade: Stark kommunikationsförmåga, Problemlösning i kundmöten, Förmåga att förklara tekniska lösningar enkelt, Teamwork och samarbete, Stresstålighet`,
    technologies: ["Problemlösning", "Kommunikation", "Teamwork & Sammarbete ", ],
  },
  {
    year: "2019 - 2022",
    role: "Servicemedarbetare",
    company: "Elgiganten",
    description: `Som servicemedarbetare på Elgiganten fick jag mitt första riktiga hands-on med IT-problemlösning. Varje dag mötte jag kunder med olika tekniska utmaningar – allt från virus-infekterade datorer och hackade konton till krånglande nätverk och trasiga enheter. Det var här mitt intresse för IT-säkerhet verkligen växte fram, när jag såg hur många som faktiskt drabbas av olika typer av IT-problem och cyberattacker.
Jobbet gav mig värdefull erfarenhet i att felsöka tekniska problem och hitta lösningar under tidspress. Jag lärde mig snabbt att kommunicera tekniskt komplexa problem på ett sätt som kunderna förstod, samtidigt som jag fick grundläggande kunskaper i datasäkerhet och virushantering.Det var detta jobb som öppnade mina ögon för hur viktigt det är med IT-säkerhet i dagens digitala värld, vilket senare ledde mig till att utbilda mig inom området. Viktiga erfarenheter från tiden som servicemedarbetare: Praktisk erfarenhet av IT-felsökning, Grundläggande kunskaper i datasäkerhet, Problemlösning under tidspress, Teknisk kundsupport.`,
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
      "Ett verktyg för att strukturera, prioritera och följa upp dina dagliga uppgifter och projekt. Detta var ett av de första projekten jag skapade!",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfoliohemsida",
    image: project3,
    description:
      "En personlig CV-hemsida som visar mina projekt, kompetenser och kontaktinformation.",
    technologies: ["HTML", "CSS", "React",],
  },
 
];

export const CONTACT = {
  address: "Lustigkullevägen 20B",
  phoneNo: "+46760912950",
  email: "Adnankrasnici5@gmail.com",
};
