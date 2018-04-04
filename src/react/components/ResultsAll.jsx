import React from 'react'
import './ResultsAll.css'
import { Table, ListGroupItem} from 'reactstrap';

const ResultsAll = ({ storiesList }) => (
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
                <td>{story.result}</td>
                <td>{story.storyName}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    </div>
)

export default ResultsAll;