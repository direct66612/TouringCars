import {
  Button,
  Calendar,
  CalendarIcon,
  Description,
  FormContainer,
  Title,
} from "./Form.styled";

import sprite from "../../assets/svgSprite/sprite.svg";

import * as Yup from "yup";

import { Formik, Form, Field } from "formik";

import "react-datepicker/dist/react-datepicker.css";

import ReactDatePicker from "react-datepicker";
import { useState } from "react";

export const FormSubmit = () => {
  const supportSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email is required!"),
    name: Yup.string().required("Name is required!"),
    date: Yup.string().required("Date is required!"),
  });

  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (ev) => {
    if (ev.target.name === "name") setName(ev.target.value);
    if (ev.target.name === "email") setEmail(ev.target.value);
    if (ev.target.name === "comment") setComment(ev.target.value);
  };
  const handleSubmit = (value, { resetForm }) => {
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={supportSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form__container">
          <Title>Book your campervan now</Title>
          <Description>
            Stay connected! We are always ready to help you.
          </Description>
          <Field
            className="form__input"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Name"
          />
          <Field
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
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Booking date"
            />
          </Calendar>
          <Field
            className="form__textarea"
            name="comment"
            value={comment}
            as="textarea"
            onChange={handleChange}
            placeholder="Comment"
          ></Field>
          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
