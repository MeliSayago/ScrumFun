import React from 'react'
import './ResultsAll.css'
import { Table, ListGroupItem} from 'reactstrap';


const ResultsAll = ({ storiesList,sendEmail,dropDB }) => (
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
    <button onClick={(e) => sendEmail(e)}>Enviar resultados</button>
    <button onClick={dropDB}>Delete</button>
    </div>

)

export default ResultsAll;