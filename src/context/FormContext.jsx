import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

const initForm = {
  formId: "",
  firstName: "",
  lastName: "",
  avatar: "",
  phone: "",
  email: "",
  lineId: "",
  facebook: "",
  discord: "",
  occupation: "",
  address: "",
  district: "",
  province: "",
  zipcode: "",
  portfolio: [],
  expectations: "",
  accept: ""
};

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState(initForm);

  const addFormOne = (
    formId,
    firstName,
    lastName,
    address,
    district,
    province,
    zipcode
  ) => {
    const newForm = {
      ...form,
      formId,
      firstName,
      lastName,
      address,
      district,
      province,
      zipcode,
    };
    localStorage.setItem("formOne", JSON.stringify(newForm));
    setForm(newForm);
  };

  const addFormTwo = (phone, email, lineId, facebook, discord, occupation) => {
    const newForm = {
      ...form,
      phone,
      email,
      lineId,
      facebook,
      discord,
      occupation,
    };
    localStorage.setItem("formTwo", JSON.stringify(newForm));
    setForm(newForm);
  };

  const addFormThree = (avatar, portfolio) => {
    const newForm = {
      ...form,
      avatar,
      portfolio: [...form.portfolio, ...portfolio],
    };
    localStorage.setItem("formThree", JSON.stringify(newForm));
    setForm(newForm);
  };

  const addFormFour = (expectations) => {
    const newForm = {
      ...form,
      expectations,
    };
    localStorage.setItem("formFour", JSON.stringify(newForm));
    setForm(newForm);
  };

  return (
    <FormContext.Provider
      value={{ form, addFormOne, addFormTwo, addFormThree, addFormFour }}
    >
      {children}
    </FormContext.Provider>
  );
};
