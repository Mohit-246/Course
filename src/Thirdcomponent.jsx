import React from 'react'

function Thirdcomponent() {
    const links = ["Men", "Women", "Kids", "Home", "GenZ",]
    return (
        <div>
            {links.map((linkName, id) => (
                <div>
                    <a href='https://www.google.com/' target='blank'>{linkName}</a>
                </div>
            ))
                
            }


        </div>
    )
}

export default Thirdcomponent