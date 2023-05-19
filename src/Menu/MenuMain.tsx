import React, { useState } from "react"
import { Card, Row } from "react-bootstrap"
import "./MenuMain.scss"
import MenuCard from "./component/MenuCard"

const dummyCategory = [
    {
        categoryName:"Food"
    },
    {
        categoryName:"Drink"
    },

]

const dummyMenu = [
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Nasi Lemak",
        Price:"2000"
    },
    {
        MenuName:"Plus",
        Price:"2000"
    },

]
const MenuMain = ()=>{
    const [categoryList,setCategoryList] = useState(dummyCategory)
    const [menuList,setMenuList] = useState(dummyMenu)

    return(
        <div className="menu-container">
            <Card className="category-section">
                <Card.Title>
                    MENU CATEGORY
                </Card.Title>
                <Card.Body className="d-flex justify-content-between">
                    {
                        categoryList.map((item)=>{
                            return(
                                <Card className="category-card">
                                    {item.categoryName}
                                </Card>
                            )
                        })
                    }
                    <Card  className="category-card">
                        +
                    </Card>
                </Card.Body>
            </Card>
            <Card className="menu-section">
                <Card.Title>
                    MENU
                </Card.Title>
                <Card.Body className="d-flex flex-wrap">
                    {
                        menuList.map((item)=>{
                            return(
                                <MenuCard MenuName={item.MenuName} Price={item.Price} />
                            )
                        })
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuMain