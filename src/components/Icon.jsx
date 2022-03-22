import React from 'react'
import { ReactComponent as DoneIconSGV } from '../images/check_circle_black_24dp.svg'
import { ReactComponent as DeleteIconSGV } from '../images/close_black_24dp.svg'
import { ReactComponent as UndoneIconSGV } from '../images/circle_black_24dp.svg'


const iconTypes = {
  "delete" : <DeleteIconSGV className="Icon-svg Icon-svg--delete"/>,
  "done": <DoneIconSGV className="Icon-svg" fill="#4caf50"/>,
  "undone": <UndoneIconSGV className="Icon-svg Icon-svg--check"/>,
}


function Icon({ type, color, onClick}) {
  return (
    <div>
      {iconTypes[type]}  
    </div>
  )
}


export default Icon