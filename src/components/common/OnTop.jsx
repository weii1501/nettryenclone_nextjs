import React from 'react'
import { 
    faChevronUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OnTop() {
    return (
        <button className="w-auto h-auto fixed bg-transparent border-[1px] border-white rounded bottom-9 right-4">
            <div 
                className="px-3 py-2 text-[#e92c72]"
                onClick={() => {window.scrollTo(0, 0)}}
            >
                <FontAwesomeIcon icon={faChevronUp} size="lg" />
            </div>
        </button>
    )
}
