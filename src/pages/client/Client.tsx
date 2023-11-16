import Single from "../../components/single/Single";
import { singleClient } from "../../data";
import "./client.scss"

const Client = () => {
  
   // fetch f=data and send to single component
    return ( 
        <div className="client">
            <Single {...singleClient} />
        </div>
     );
}
 
export default Client;