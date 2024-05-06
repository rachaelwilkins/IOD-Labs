import SchoolInfo from "./SchoolInfo";
import CollegeInfo from "./CollegeInfo";
import "../App"


function UserInfo()
{

    return (
        <>
            <div>
                <h1>User Information</h1>
                <label>User Name</label><label>{props.firstName}</label><label>{props.lastName}</label>
                <br></br>
                <label>Institute:</label><label>IOD</label>
            </div>
            <div>
                <CollegeInfo></CollegeInfo>
                <SchoolInfo></SchoolInfo>
            </div>    
        
        </>
    )
}

export default UserInfo; 