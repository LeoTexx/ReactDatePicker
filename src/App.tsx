import { useState } from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/react_dates_overrides.css";

import { DateRangePicker, FocusedInputShape } from "react-dates";

import LogoImg from "./assets/logo.svg";
import styled from "styled-components";

import { Moment } from "moment";

export function App() {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  );

  return (
    <Container>
      <ContentField>
        <article>
          <img src={LogoImg} alt="logo" />
          <h2>Fanimal</h2>
        </article>
        <h1>Select when you want to have the best experience of your life!</h1>
        <DateRangePicker
          startDate={startDate}
          startDateId="start_date_id"
          endDate={endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        />
      </ContentField>
    </Container>
  );
}
const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--pink);
`;

const ContentField = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 100%;
  max-width: 40rem;

  background-color: var(--background);
  border-radius: 4rem;
  border-style: solid;
  border-width: 2px;
  border-color: black;

  h1 {
    margin-top: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 50%;
    text-align: center;
  }
  article {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 2rem;
    }
  }
`;
