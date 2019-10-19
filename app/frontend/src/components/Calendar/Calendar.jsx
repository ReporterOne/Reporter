import React, { useState } from "react";
import {
    startOfWeek,
    format,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
    parse,
    subMonths,
    addMonths,

} from "date-fns";
import {
    Header,
    Days,
    Cells 
} from './components';
import {Swipe, Position} from "react-swipe-component"
import styled from 'styled-components';


const Calendar = (props) => {
    const Container = styled.div`
        flex:1;
        background: white;
        margin:0 auto;
        display:flex;
        flex-direction:column;
    `;
    const date = new Date()
    const [currentDate, setCurrentDate] = useState(date);
    const [selectedDate, setSelectedDate] = useState(date);
    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };
    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };
    const onDateClick = day => {
        setSelectedDate(day);
    }
    return (
        <Container >
        <Swipe 
        node='Container'
        onSwipedRight={nextMonth()}
        onSwipedLeft={prevMonth()}>
            <Header currentDate={currentDate} selectedDate={selectedDate} />
            <Days currentDate={currentDate} />
            <Cells currentDate={currentDate} onDateClick={onDateClick}/>
        </Swipe>
        </Container>
    );
};
export default Calendar;