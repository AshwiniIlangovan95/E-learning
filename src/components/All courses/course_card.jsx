import React, { useEffect }  from "react";
import { courseCard, getLoggedInUser } from "../../dummydata";
import "./courses.scss"
import { Button, Card } from "react-bootstrap";


function CourseCard(props){
    
        
    const loggedUser = getLoggedInUser()
    
    return(
        <div>
            <section >
                <div className="outer-container">
                    {courseCard.map((val)=>{
                        return(
                            <div>
                                <div className="category" >
                                    <h4>{val.course_Head}</h4>
                                    {/* {val.cover}  */}
                                </div>
                                <div >
                                    {val.courses.map((course)=>{
                                        return(
                                            <div  >
                                                <div className="category-items">
                                                    <Card style={{width: '18rem'}}>
                                                        {/* <div className="img">{course.cover}</div> */}
                                                    
                                                        <Card.Body>
                                                            <Card.Title><h4>{course.course_Name}</h4></Card.Title>
                                                            <Card.Text>
                                                            <h5>{course.Course_Duration}</h5>
                                                            <h5>{course.No_of_Lecture}</h5>
                                                            <h5>{course.Price}</h5>
                                                            </Card.Text>
                                                            <Button variant="primary" disabled={!loggedUser?.length} onClick={() =>{ props.setCourses([...props.courses, course])}}>Add to cart</Button>
                                                        </Card.Body>   
                                                    </Card> 
                                                </div>
                                            </div>               
                                            )
                                            })}
                                </div> 
                                <div>
                                    
                                </div>
                                </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default CourseCard;