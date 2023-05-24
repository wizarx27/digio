import { Card, Col, Dropdown, Form, FormCheck, Table } from "react-bootstrap"
import "./OrdersMain.scss"
import { useState } from "react"
import DropDownThreeDot from "../Dashboard/component/ThreeDot/ThreeDot";

interface Ordersinterface{
    tableName:string;
    orderId?:string;
    statusOrders?: "Served" | "Pending"
    statusTable:boolean
}
interface Tableinterface{
    tableName:string;
    statusOrders: "Served" | "Pending"
    OrderList:{
        MenuName:string;
        quantity:number;
        status:boolean;
    }[]

}

const dummyOrders:Ordersinterface[] = [
    {
        tableName:"Table 1",
        orderId:"#12345",
        statusOrders:"Pending",
        statusTable:true
    },
    {
        tableName:"Table 1",
        orderId:"#12345",
        statusOrders:"Pending",
        statusTable:true
    },
    {
        tableName:"Table 1",
        orderId:"#12345",
        statusOrders:"Served",
        statusTable:true
    },
    {
        tableName:"Table 1",
        orderId:"#12345",
        statusOrders:"Served",
        statusTable:true
    },
    {
        tableName:"Table 1",
        orderId:"#12345",
        statusOrders:"Served",
        statusTable:true
    },
    {
        tableName:"Table 1",
        orderId:"#12345",
        statusOrders:"Served",
        statusTable:true
    },
    {
        tableName:"Table 1",
        statusTable:false
    },
]

const dummyTable:Tableinterface[] = [
    {
        tableName:"Table 1",
        statusOrders:"Served",
        OrderList:[
            {
                MenuName:"Nasi Lemak",
                quantity:2,
                status:true
            },
            {
                MenuName:"Nasi Lemak",
                quantity:2,
                status:false
            },
        ]
    },
    {
        tableName:"Table 2",
        statusOrders:"Served",
        OrderList:[
            {
                MenuName:"Nasi Lemak",
                quantity:2,
                status:true
            },
            {
                MenuName:"Nasi Lemak",
                quantity:2,
                status:true
            },
        ]
    }
]
const OrdersMain = ()=>{
    const [tableList,setTableList] = useState(dummyOrders)
    const [selectedTables,setselectedTables] = useState(dummyTable)
    return(
        <div className="orders-container">
            <Col xxl={6} md={6} lg={6} className="me-3">
                <Card className="p-3">
                    <Card.Title>
                        TABLE LIST
                    </Card.Title>
                    <Card.Body>
                        {
                            tableList.map((item)=>{
                                return(
                                    <div className={`d-flex order-table-labels ${item.statusTable  ? "light-green" : "light-red"}`}>
                                        <div className="orders-table-name">{item.tableName}</div>
                                        <div className="orders-table-id">{item.orderId}</div>
                                        {
                                            item.statusTable && 
                                            <div className={`orders-table-status ${item.statusOrders === "Served" ? "green" 
                                            : item.statusOrders === "Pending" ? "yellow" : "light-red"}`}>
                                                {item.statusOrders}
                                            </div>
                                        }
                                        <Dropdown>
                                            <Dropdown.Toggle as={DropDownThreeDot("mb-1")}></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    Item 1
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    Item 2
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                )
                            })
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={6} md={6} lg={6} className="d-flex flex-column">
                {
                    selectedTables.map((item)=>{
                        return(
                            <Card className="w-100 selected-table-card p-3 mb-2">
                                <Card.Title className="d-flex">
                                    <div className="flex-grow-1"></div>
                                    <div className="flex-grow-1">Table 1</div>
                                    <div className={`orders-table-status ${item.statusOrders === "Served" ? "green" 
                                    : item.statusOrders === "Pending" ? "yellow" : "light-red"}`}>Status</div>
                                </Card.Title>
                                <Card.Body>
                                    <Table hover className="">
                                        <thead>
                                            <tr>
                                                <th style={{width:"10%"}}>QTY</th>
                                                <th style={{width:"70%"}}>Menu</th>
                                                <th style={{width:"20%"}}>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.OrderList.map((item2)=>{
                                                    return(
                                                        <tr>
                                                            <td>{item2.quantity}</td>
                                                            <td>{item2.MenuName}</td>
                                                            <td><Form.Check checked={item2.status}></Form.Check></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        )
                    })
                }

            </Col>


        </div>
    )
}

export default OrdersMain