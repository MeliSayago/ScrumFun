import React from 'react'
import './ResultsAll.css'
import { Table, ListGroupItem} from 'reactstrap';
import ReactTooltip from 'react-tooltip'

const ResultsAll = ({ storiesList,sendEmail }) => (
    <div>
        <Table responsive>
        <thead>
            <tr>
                <th>Story Point</th>
                <th>Story Name</th>
            </tr>
        </thead>
        <tbody>
            {storiesList.map(story => (
                <tr>
                <td>{story.card}</td>
                <td>{story.storyName}</td>
                </tr>
            ))}
        </tbody>
        </Table>
        <div className="finishButton">
        <button 
        data-tip="Envia los resultados finales a tu mail!" 
        className="btn btn-primary" 
        onClick={(e) => sendEmail(e)}>Terminar sesion</button>
        <ReactTooltip />
        </div>
    </div>

)

export default ResultsAll;