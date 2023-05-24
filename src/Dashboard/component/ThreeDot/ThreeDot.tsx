import { forwardRef } from "react"
import threeDot from "../../../assets/image/three-dots-vertical.svg"

const DropDownThreeDot = (className:string) =>{
    return forwardRef<any,any>((x,ref)=>{
        return(
            <img src={threeDot} alt="" ref={ref} onClick={(e)=>{x.onClick(e)}} className={className}/>
        )
    })
}

export default DropDownThreeDot