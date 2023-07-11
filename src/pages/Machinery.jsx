import Admin from "../layout/PageAdmin"
import '../assets/css/styles.css'
import TableMachinery from "../services/TableMachiny"
import { useEffect, useState } from "react"
import axios from "axios"
import AddEditMachinery from "../services/AddEditMachinery"

function Machinery() {
    const apiMachinery = "https://proalarmepp.onrender.com/api/machinery/"
    const [machineries, setMachineries] = useState([])
    const [listAddMachinery, setListAddMachinery] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiMachinery)
                setMachineries(response.data)
                console.log(response.data)
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])

    const componentNew = (select) => {
        setListAddMachinery(select)
    }

    return (
        <Admin>
            {
                listAddMachinery ?
                    <AddEditMachinery/>
                    :
                    <TableMachinery
                        machineries={machineries}
                        componentNew={componentNew}
                    />
                    
            }
        </Admin>
    )
}

export default Machinery