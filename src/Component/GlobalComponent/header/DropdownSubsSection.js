import React from 'react'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
function DropdownSubsSection({ title, avatar , price , hoverImage }) {
    return (
        <div className="inner">
            <div className="transition__img">
                <img 
                    className="real__image" 
                    src={avatar} alt="" 
                />
                <img
                    className="hover__image"
                    src={hoverImage} alt="" 
                />
                <div className="choice__sec"><OpenInNewIcon/></div>
            </div>
            <h5> {title} </h5>
            <h5> {price} </h5>
    </div>
    )
}

export default DropdownSubsSection
