"use client"

import React from "react";
import { Formik, Field, Form } from "formik";
import dynamic from 'next/dynamic'

const AddressAutofill = dynamic(
    () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
    { ssr: false }
  )

function validatePostalCode(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z] [0-9][ABCEGHJ-NPRSTV-Z][0-9]$/i.test(value)) {
    error = 'Invalid postal code';
  }
  return error;
}

export default function App() {

  return (
    <div className="w-full max-w-xs py-10 m-auto">
    <h1 className="text-xl">Formik</h1>

    <Formik
        initialValues={{ firstName: "", lastName: "", address: "", city: "", province: "", postalCode: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <Field name="firstName" type="text" placeholder="First name" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <Field name="lastName" type="text" placeholder="Last name" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <AddressAutofill accessToken="pk.eyJ1IjoibWFjZG9uc3QiLCJhIjoiY2xsYXg1bXQwMDFocDNkcGhseWVsYzMzOCJ9.Tq6Ko51PY40P6-idM9QlUw">
              <Field name="address" type="text" placeholder="Address" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  autoComplete="address-line1"/>
            </AddressAutofill>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <Field name="city" type="text" placeholder="City" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  autoComplete="address-level2"/>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
              Province
            </label>
            <Field name="province" type="text" placeholder="Province" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  autoComplete="address-level1"/>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
              Postal Code
            </label>
            <Field name="postalCode" type="text" placeholder="Postal Code" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  autoComplete="postal-code" validate={validatePostalCode}/>
            {errors.postalCode && touched.postalCode && <div className="text-gray-700">{errors.postalCode}</div>}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
