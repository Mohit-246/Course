import { useState } from "react";

function FirstComponent() {
    const [view ,setview] = useState(false)
    let isloggedIn = true;
    return (

        <>
            

            <h2>Hi !! Welcome to my profile</h2>
         {view &&   <div className="profileCard">
                <img className="profileImg" src="photo.jpg" />
                <div>
                    <h4>Mohit</h4>
                    <p>Education : B. Tech.</p>
                    <p>Mobile no. ********17</p>
                    <p>Job: Software Enginner</p>
                    <p>Address: Delhi, India</p>
                    <p>Hobbies: Reading, Travelling</p>
                    <p>Skills: React, Node.js, JavaScript</p>
                </div>
            </div>}
<button onClick={()=> setview((prev)=> prev ===true? false:true)}>Show profile</button>
            <br />

            {/* conditional rendering */}
            {isloggedIn ?(
                <>
                    <div className="logginmsg">
                        <div>
                            Hi, Wlecome to CompileIT.
                        </div>

                        <div>
                            what is your purpose of coming here?????
                        </div>
                    </div>
                </>) :
                
                (

                <>
                <div>
                    you are not logged in 

             </div>
             </> )}
        </>
    )

}

export default FirstComponent;