import Single from "../../components/single/Single";
import { singleProject } from "../../data";
import "./project.scss"

const Project = () => {
  
  // fetch f=data and send to single component
    return ( 
        <div className="project">
             <Single {...singleProject}/>
        </div>
     );
}
 
export default Project