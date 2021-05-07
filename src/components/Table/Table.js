import React, { useState } from 'react';

//Components
import { Button, ButtonEvent, InputText, ButtonExit } from '../../lib/style/generalStyle';
import { Grid } from '../../lib/style/generalStyle';
import Modal from '../../components/Modal/Modal';
import { FaTrash } from 'react-icons/fa'

import {
    Row,
    Cell,
    TableContainer,
    TableBody,
    TableHead,
    Header,
    NoEventMessage
} from './TableStyle'

const Table = (props) => {

    const [content, setContent] = useState(null);
    const [rowId, setRowId] = useState(1);

    const[showForm, setShowForm] = useState(false);

    const setForm = () => {
        setShowForm(!showForm);
    }

    const deleteRow = (id) => {
        console.log(id);
        setContent(content.filter(row => row.stateId !== id))
    }

    const gatherInformation = (title, description, category, date, timeFrom, timeTo, capacity, firm) => {
        const newList = [
          {
              stateId: rowId,
              stateTitle: title,
              stateDescription: description,
              stateCategory: category,
              stateDate: date,
              stateTimeFrom: timeFrom,
              stateTimeTo: timeTo,
              stateCapacity: capacity,
              stateFirm: firm,
          },
      ];
      content === null ? setContent(newList) : setContent(content.concat(newList));
      setRowId(rowId + 1);
    }

    return (
        <>
                
                    <ButtonEvent onClick={setForm}>Add Event</ButtonEvent>
                    { content !== null && content.length !== 0
                        ? <TableContainer>
                                <TableHead>
                                    <Row>
                                        <Header column={1}>Id</Header>
                                        <Header column={2}>Title</Header>
                                        <Header column={3}>Description</Header>
                                        <Header column={4}>Category</Header>
                                        <Header column={5}>Date</Header>
                                        <Header column={6}>Time from</Header>
                                        <Header column={7}>Time to</Header>
                                        <Header column={8}>Capacity</Header>
                                        <Header column={9}>Firm</Header>
                                        <Header column={10}/>
                                    </Row>
                                </TableHead>
                            <TableBody>
                        {content.map(row =>
                            <Row key={row.stateId}>
                                <Cell column={1}>{row.stateId}</Cell>
                                <Cell column={2}>{row.stateTitle}</Cell>
                                <Cell column={3}>{row.stateDescription}</Cell>
                                <Cell column={4}>{row.stateCategory}</Cell>
                                <Cell column={5}>{row.stateDate}</Cell>
                                <Cell column={6}>{row.stateTimeFrom}</Cell>
                                <Cell column={7}>{row.stateTimeTo}</Cell>
                                <Cell column={8}>{row.stateCapacity}</Cell>
                                <Cell column={9}>{row.stateFirm}</Cell>
                                <Cell column={10}><ButtonExit onClick={() => { deleteRow(row.stateId)} }><FaTrash/></ButtonExit></Cell>
                            </Row>
                        )}
                            </TableBody>
                        </TableContainer>
                        : <NoEventMessage>There are no events yet!</NoEventMessage> 
                    }
                
            {showForm && <Modal setForm={setForm} gatherInformation={gatherInformation}/>}
        </>
    );
}

export default Table;