import data from './Images/data_science.jpg';
import data1 from './Images/DigitalMarketing.jpeg';
import data2 from './Images/Human_Resources.jpg';
import data3 from './Images/Technical_Courses.jpg';
import DSP from './Images/datascience_icon.png';
import prof1 from './Images/prof-1-women.jpg';
import prof2 from './Images/prof-2-women.jpg';
import prof3 from './Images/prof-3.jpg';
import prof4 from './Images/prof-4.jpg';
import prof5 from './Images/prof-5.webp';
import prof6 from './Images/prof-6.aspx';
import prof7 from './Images/prof-7.jpg';
import { Card } from 'react-bootstrap';

let loggedInUser=null;
 export const setLoggedInUser =(user)=>{
    loggedInUser=user;
 }
 export const getLoggedInUser = ()=>{
    return loggedInUser;
 }


export const homeAbout=[
    {
        id:1,
       cover:"https://img.icons8.com/dotty/80/000000/storytelling.png",
       title: "Online Courses",
       desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:2,
        cover: "https://img.icons8.com/ios/80/000000/athlete.png",
        title: "Learn with Experts",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:3,
        cover: "https://img.icons8.com/ios/80/000000/diploma.png",
        title: "Certificate",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    }

]

export const courseCard=[
    {
        
        cover:<img src={data}  className="img"  alt="125"/>,
        course_Head: "Data science",
       
        courses:[
            {
                id:1,
                cover: <Card.Img variant="top" src={DSP} className="pic" alt="125"/>,
                // cover: <img src={DSP} className="img" alt='125'/>,
                course_Name: "Data Science with Python",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000,
            },
            {
                id:2,
                course_Name: "Data science with ML/DL",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            },
            {
                id:3,
                course_Name: "Data science with SQL",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            },
            {
                id:4,
                course_Name: "Python",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            }
            ]
        },
    
        
        {
            cover:<img src={data1} className="img" alt="125"/>,
            course_Head: "Digital Marketing",
            courses:[
                {
                    id:5,
                    course_Name: "Digital Marketing-Executive",
                    Course_Duration: "Duration : 2 Months",
                    No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                    Price: 35000
                },
                {
                    id:6,
                    course_Name: "Digital Marketing-Master",
                    Course_Duration: "Duration : 2 Months",
                    No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                    Price: 35000
                }
            ]
    },
    {
        cover:<img src={data2} className="img" alt="125"/>,
        course_Head: "Human Resources",
        courses:[
            {
                id:7,
                course_Name: "Human Resource-Executive",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000   
            },
            {
                id:7,
                course_Head: "Human Resource",
                course_Name: "Human Resource-Executive",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            },
            {
                id:8,
                course_Name: "Human Resource-Master",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            },
            {
                id:9,
                course_Name: "HR - Payroll",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            },
            {
                id:10,
                course_Name: "HR SAP Module",
                Course_Duration: "Duration : 2 Months",
                No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
                Price: 35000
            },
            
        ]   
    },
    {
        cover:<img src={data3} className="img" alt="125"/>,
        course_Head: "Technical Courses",
        courses:[
            {
        id:11,
        course_Name: "Java Development",
        Course_Duration: "Duration : 2 Months",
        No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
        Price: 35000
    },
    {
        id:12,
        course_Name: "UI Development",
        Course_Duration: "Duration : 2 Months",
        No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
        Price: 35000
    },
    {
        id:13,
        course_Name: "Dot Net",
        Course_Duration: "Duration : 2 Months",
        No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
        Price: 35000
    },
    {
        id:14,
        course_Name: "SQL Developer",
        Course_Duration: "Duration : 2 Months",
        No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
        Price: 35000
    },
    {
        id:15,
        course_Name: "Testing",
        Course_Duration: "Duration : 2 Months",
        No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
        Price: 35000
    },
    {
        id:16,
        course_Name: "AWS Cloud",
        Course_Duration: "2 Months",
        No_of_Lecture: "No of Lectures : 50(50 hrs)" ,
        Price: 35000
    },

        ]
    }
    

    
]

export const Team=[
    {
        cover: <img src={prof1} className="img" alt="125"/>,
        name:"Rosafel Adriano-Nogra",
        work:"Counselor Trainee"
    },
    {
        cover:<img src={prof2} className="img" alt="125"/>,
        name:"Janice Argueta",
        work:"Operations Coordinator"
    },
    {
        cover:<img src={prof3} className="img" alt="125"/>,
        name:"Alejandra Arias",
        work:"Student Accounts Manager"
    },
    {
        cover:<img src={prof4} className="img" alt="125"/>,
        name:"Paul Ashbrook, CMPC",
        work:"Graduate Assistant, Clubs & Organizations"
    },
    {
        cover:<img src={prof5} className="img" alt="125"/>,
        name:"Ivy Al-Faqih",
        work:"Executive Assistant to the Provost"
    },
    {
        cover:<img src={prof6} className="img" alt="125"/>,
        name:"Gemma Arguelles",
        work:"Adjunct Faculty"
    },
    {
        cover:<img src={prof7} className="img" alt="125"/>,
        name:"Lucinda Allen RN BSN",
        work:"Adjunct Faculty"
    },


]

// Contact Us

export const contactUs=[
    {
        cover:"",
        contact_head: "OUR MAIN OFFICE",
        desc: "SoHo 94 BroadwaySt",
        desc2: "New York, NY1001"
    },
    {
        cover:"",
        contact_head:"PHONE NUMBER",
        desc: "234-5478-7894",
        desc2:"888-1239-7845(Toll Free)"
    },
    {
        cover:"",
        contact_head:"FAX",
        desc: "1-235-846-7946",
        desc2:""
    },
    {
        cover:"",
        contact_head:"EMAIL",
        desc: "learner@gmail.com",
        desc2:""
    },
]

export const loginDetails=[
    {
        username:"US-1",
        password:"PS-1"
    },
    {
        username:"US-2",
        password:"PS-2"
    },
    {
        username:"US-3",
        password:"PS-3"
    },
    {
        username:"US-4",
        password:"PS-4"
    },
    {
        username:"US-5",
        password:"PS-5"
    },
    {
        username:"US-6",
        password:"PS-6"
    },

]
