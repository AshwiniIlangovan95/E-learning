import React from "react";
import Back from "../Back";
import CourseCard from "./course_card";
import "./courses.scss"


function CourseHome(props){
    return(
        <div className="course-home">
            <Back title= "Explore Courses"/>
            <CourseCard courses={props.courses} setCourses={props.setCourses}/>
        </div>
    )
}

export default CourseHome;