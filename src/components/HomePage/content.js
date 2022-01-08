export const cardArray = [
    {
        title: "Introduction",
        contentStyle: "p",
        contentArray: [
            { content: `Hi, I'm Eugene. 
            I'm a Frontend Engineer with Fullstack experience currently working at Deloitte. 
            I have around 
            ${new window.Date(Date.now()).getFullYear() - new window.Date(2019,12,26).getFullYear()} 
            years of professional software engineering experience so far.
            Thanks for visiting my webpage and please navigate to the Contact section if you'd like to leave me a message.` }
        ]
    },
    {
        title: "Coding Skills",
        contentStyle: "ul",
        contentArray: [
            { content: "Primary: JavaScript, Node, Express, React, Sass/CSS" },
            { content: "Secondary: MySQL, Oracle, PostgreSQL, Java, Spring, Python, Shellscript" },
        ]
    },
    {
        title: "Career",
        contentStyle: "ul",
        contentArray: [
            { content: "Lead Senior Fullstack Engineer on GPS Citizen Identity SGO team at Deloitte (Aug 2021 - present)" },
            { content: "Senior Frontend Engineer on GPS IOWA SGO team at Deloitte (Dec 2021 - present)" },
            { content: "Backend/Database Engineer on Digital Retail Supply Chain RAD team at T-Mobile" },
            { content: "Contract Frontend Engineer at AT&T Cricket" },
            { content: "React Intern at HearBK" }
        ]
    },
    {
        title: "Education",
        contentStyle: "ul",
        contentArray: [
            { content: "Johns Hopkins University, Baltimore, MD (MS in Biotechnology, currently attending, GPA: 3.5)" },
            {
                content: "DigitalCrafts FullStack Immersive Coding Bootcamp (Summer 2019)",
                href: "https://www.linkedin.com/school/digitalcrafts/"
            },
            { content: "University of Maryland Baltimore County, Baltimore, MD (BA in Biology, GPA: 3.296)" },
            { content: "Howard Community College, Columbia, MD" },
            { content: "Boston College, Chestnut Hill, MA" },
            {
                content: "Gilman High School, Baltimore, MD (former recipient of William S. Thomas Prize)",
                href: "https://en.wikipedia.org/wiki/Gilman_School#Awards",
            }
        ]
    },
    {
        title: "Noteworthy",
        contentStyle: "ul",
        contentArray: [
            { content: "Sigma Alpha Lambda National Leadership and Honors Organization (UMBC)" },
            { content: "Golden Key International Honors Society (UMBC)"},
            { content: "SATs (May 2002): 800 Math (perfect score), 630 English, 1430 overall" }
        ]
    }
];