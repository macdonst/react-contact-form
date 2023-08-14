import { useForm } from "react-hook-form"

export default function Input({ name, label }) {
    const { register, formState: { errors } } = useForm()

    return <>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input type="text" placeholder="First name" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register(name, {required: true, maxLength: 80})}
      aria-invalid={errors.firstName ? "true" : "false"}/>
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
    </>
  }
