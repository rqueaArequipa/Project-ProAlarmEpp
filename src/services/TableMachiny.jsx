import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faAdd } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
function TableMachinery({ machineries, componentNew }) {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Maquinarias</h2>
                    <div>
                        <button className='btn' onClick={() => componentNew(true)}>
                            <FontAwesomeIcon icon={faAdd} id="btn_open" /> Agregar
                        </button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Tipo-Maquinaria</th>
                            <th >Mantinimiento</th>
                            <th >Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            machineries.map((machinery, index) => (
                                <tr key={machinery.id}>
                                    <th >{index + 1}</th>
                                    <td >{machinery.type_machinery}</td>
                                    <td >{machinery.date_maintenance}</td>
                                    <td >{machinery.status}</td>
                                    <td><FontAwesomeIcon icon={faEdit} id="btn_open" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="recentCustomers">
                <div className="cardHeader">
                    <h2>Operator</h2>
                </div>
                <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
            </div>
        </div>
    )
}
export default TableMachinery