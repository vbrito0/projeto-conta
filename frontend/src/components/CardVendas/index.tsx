import NotificationButton from '../NotificationButton';
import './styles.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import axios from 'axios';

function CardVendas() {
    
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    useEffect(() => {
        axios.get("http://localhost:8080/vendas")
            .then(response => {
                console.log(response.data);
            });
    }, []);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-vendas-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-vendas-tabela">
                    <thead>
                        <tr>
                            <th className="dsmeta-show-992">ID</th>
                            <th className="dsmeta-show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="dsmeta-show-992">Visitas</th>
                            <th className="dsmeta-show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dsmeta-show-992">#341</td>
                            <td className="dsmeta-show-576">09/08/2022</td>
                            <td>Victor</td>
                            <td className="dsmeta-show-992">15</td>
                            <td className="dsmeta-show-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show-992">#341</td>
                            <td className="dsmeta-show-576">09/08/2022</td>
                            <td>Victor</td>
                            <td className="dsmeta-show-992">15</td>
                            <td className="dsmeta-show-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show-992">#341</td>
                            <td className="dsmeta-show-576">09/08/2022</td>
                            <td>Victor</td>
                            <td className="dsmeta-show-992">15</td>
                            <td className="dsmeta-show-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CardVendas;
