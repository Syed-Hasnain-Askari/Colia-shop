import React from 'react'
import './DropdpwnTypeOne.css'

import drop1 from '../../../assets/images/header_images/drop11.jpeg'
import drop2 from '../../../assets/images/header_images/drop2.jpeg'
import drop3 from '../../../assets/images/header_images/drop31.jpeg'

import DropdownSubsSection from './DropdownSubsSection'


function DropdpwnTypeOne() {
    return (
        <div className="dropdown">
            <DropdownSubsSection
                title="Cindy dress"
                avatar={drop1}
                price="$76.95"
                hoverImage={drop2}
            />
            <DropdownSubsSection
                title="Cindy dress"
                avatar={drop2}
                price="$76.95"
                hoverImage={drop2}
            />
            
            <DropdownSubsSection
                title="Cindy dress"
                avatar={drop3}
                price="$76.95"
                
                hoverImage={drop2}
            />
                <DropdownSubsSection
                title="Cindy dress"
                avatar={drop1}
                price="$76.95"
                
                hoverImage={drop2}
            />
        </div>
    )
}

export default DropdpwnTypeOne
