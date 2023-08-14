"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { AddressAutofill } from '@mapbox/search-js-react';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)
  console.log("errors", errors)

  return (
    <div className="w-full max-w-xs py-10 m-auto">
    <form action="/api/form" method="post" onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
        First Name
      </label>
      <input type="text" placeholder="First name" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("firstName", {required: true, maxLength: 80})} />
      {errors.firstName?.type === "required" && (
        <p className="mb-4 text-gray-700" role="alert">First name is required</p>
      )}

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
        Last Name
      </label>
      <input type="text" placeholder="Last name" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("lastName", {required: true, maxLength: 100})} />
      {errors.lastName?.type === "required" && (
        <p className="mb-4 text-gray-700" role="alert">Last name is required</p>
      )}

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
        Address
      </label>
      <AddressAutofill accessToken="pk.eyJ1IjoibWFjZG9uc3QiLCJhIjoiY2xsYXg1bXQwMDFocDNkcGhseWVsYzMzOCJ9.Tq6Ko51PY40P6-idM9QlUw">
        <input type="text" placeholder="Address" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("address", {required: true})} autoComplete="address-line1"/>
      </AddressAutofill>
      {errors.address?.type === "required" && (
        <p className="mb-4 text-gray-700" role="alert">Address is required</p>
      )}

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
        City
      </label>
      <input type="text" placeholder="City" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("city", {required: true})} autoComplete="address-level2"/>
      {errors.city?.type === "required" && (
        <p className="mb-4 text-gray-700" role="alert">City name is required</p>
      )}

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
        Province
      </label>
      <input type="text" placeholder="Province" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("province", {required: true, maxLength: 12})} autoComplete="address-level1"/>
      {errors.province?.type === "required" && (
        <p className="mb-4 text-gray-700" role="alert">Province is required</p>
      )}

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
        Postal Code
      </label>
      <input type="text" placeholder="Postal Code" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("postalCode", {required: true})} autoComplete="postal-code"/>
      {errors.postalCode?.type === "required" && (
        <p className="mb-4 text-gray-700" role="alert">Postal code is required</p>
      )}

      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />
    </form>
    </div>
  );
}

/*

"use client"

import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  // action="/api/htmlForm" method="post"

  return (
    <div className="w-full max-w-xs py-10 m-auto">
      <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("firstName", { required: true, maxLength: 20 })} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("lastName", { required: true, maxLength: 20 })} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("address", { required: true, maxLength: 20 })} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
          City
        </label>
        <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("city", { required: true, maxLength: 20 })} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
          Province
        </label>
        <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("province", { required: true, maxLength: 20 })} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
          Postal Code
        </label>
        <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("postalCode", { required: true, maxLength: 20 })} />
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />
      </form>
    </div>
  )
}
*/
