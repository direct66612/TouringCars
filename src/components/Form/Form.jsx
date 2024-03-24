import {
  Button,
  Calendar,
  CalendarIcon,
  Description,
  FormContainer,
  Title,
} from "./Form.styled";

import sprite from "../../assets/svgSprite/sprite.svg";

import Notiflix from "notiflix";

import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

import ReactDatePicker from "react-datepicker";

import { useState } from "react";

export const FormSubmit = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "comment") setComment(e.target.value);
  };

  const validateForm = (data) => {
    let error = false;
    if (!data.name.trim()) {
      error = true;
      const notiflix = () => {
        return Notiflix.Notify.failure("Name is required");
      };
      notiflix();
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      error = true;
      const notiflix = () => {
        return Notiflix.Notify.failure("Need is correct Email");
      };
      notiflix();
    }
    if (!moment(data.date, "MM/DD/YYYY", true).isValid()) {
      error = true;
      const notiflix = () => {
        return Notiflix.Notify.failure("Need is correct data");
      };
      notiflix();
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { date, email, comment, name };
    if (!validateForm(data)) {
      window.location.reload();
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} className="form__container">
        <Title>Book your campervan now</Title>
        <Description>
          Stay connected! We are always ready to help you.
        </Description>
        <input
          className="form__input"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Name"
        />
        <input
          className="form__input"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
        />
        <Calendar>
          <CalendarIcon className="calendarIcon" width={20} height={20}>
            <use href={`${sprite}#icon-calendar`} />
          </CalendarIcon>
          <ReactDatePicker
            useWeekdaysShort={true}
            required
            calendarStartDay={1}
            name="date"
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText="Booking date"
          />
        </Calendar>
        <input
          className="form__textarea"
          name="comment"
          value={comment}
          as="textarea"
          onChange={handleChange}
          placeholder="Comment"
        ></input>
        <Button type="submit">Send</Button>
      </form>
    </FormContainer>
  );
};
