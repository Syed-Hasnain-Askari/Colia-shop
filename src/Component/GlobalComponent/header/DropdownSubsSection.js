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
            <h3> {title} </h3>
            <h4> {price} </h4>
    </div>
    )
}

export default DropdownSubsSection
