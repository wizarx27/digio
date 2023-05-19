import { Card } from "react-bootstrap"
import "./MenuCard.scss"

interface MenuCardPropsInterface{
    MenuName:string;
    Price:string;
}
const MenuCard = (props:MenuCardPropsInterface)=>{
    const { MenuName, Price} = props
    return(
        <Card className="mx-3 my-2 menu-card-container">
            {
                MenuName !== "Plus" &&
                <Card.Img src="https://placehold.co/200x200">
                </Card.Img>
            }
            {
                MenuName !== "Plus" ?
                <Card.Body>
                    <div>{MenuName}</div>
                    <div>IDR. {Price}</div>
                </Card.Body>
                :
                <Card.Body className={MenuName === "Plus" ? "d-flex align-items-center" : ""}>
                    <div className="plus-menu">+</div>
                </Card.Body>
            }
        </Card>
    )
}

export default MenuCard