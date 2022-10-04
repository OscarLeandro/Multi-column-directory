import { useState } from "react";
import useForm from "../hooks/useForm";
import {directory} from './index'

export default function RegisterForm2() {



  const [employee, setEmployee] = useState(directory)

  const {formState, onInputChange} = useForm({
    name: '',
    imageUrl: '',
    coverImageUrl: '',
    about: '',
    phone: '',
    email: '',
    title: '',
    team: '',
    location: '',
    sits: '',
    salary: '',
    birthday: '',
  });

  function onSubmit(e) {
    e.preventDefault();

    let nuevoEmployee = 
        {
          name,
          imageUrl,
          coverImageUrl,
          about,
          fields: {
            phone,
            email,
            title,
            team,
            location,
            sits,
            salary,
            birthday,
          },
        };
      

    setEmployee([...employee, nuevoEmployee])
    console.log(employee)
  }
  const {name, imageUrl, coverImageUrl, about, phone, email, title, team, location, sits, salary, birthday} = formState;

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Nombre Completo
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Ingresa tu nombre completo"
                  id="full-name"
                  autoComplete="given-name"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Telefono
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  placeholder="Ingresa tu telefono"
                  id="phone"
                  onChange={onInputChange}
                  autoComplete="family-name"
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email 
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Ingresa tu email"
                  type="email"
                  onChange={onInputChange}
                  autoComplete="email"
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Ciudad
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="location"
                  value={location}
                  placeholder="Ingresa Direccion"
                  id="location"
                  autoComplete="given-name"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="sits"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Direccion
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="sits"
                  id="sits"
                  placeholder="Ingresa tu direccion"
                  value={sits}
                  autoComplete="street-address"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="sits"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Profesion
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Ingresa tu profesion"
                  value={title}
                  autoComplete="street-address"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="sits"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Equipo
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="team"
                  id="team"
                  placeholder="Ingresa tu Equipo"
                  value={team}
                  autoComplete="team"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Salario
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="salary"
                  value={salary}
                  placeholder='ingresa tu salario'
                  id="salary"
                  autoComplete="address-level2"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Fecha de Nacimiento
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="date"
                  name="birthday"
                  value={birthday}
                  id="birthday"
                  autoComplete="address-level1"
                  onChange={onInputChange}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Acerca de ti
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  id="about"
                  name="about"
                  value={about}
                  onChange={onInputChange}
                  rows={3}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  
                />
                <p className="mt-2 text-sm text-gray-500">
                  Describe algunas palabras sobre ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Imagen de Perfil
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="imageUrl"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Subir una imagen</span>
                  <input
                    value={imageUrl}
                    id="imageUrl"
                    name="imageUrl"
                    onChange={onInputChange}
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">o arrastra aqui</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Imagen de portada
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="coverImageUrl"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Subir una imagen</span>
                  <input
                    value={coverImageUrl}
                    id="coverImageUrl"
                    name="coverImageUrl"
                    onChange={onInputChange}
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">o arrastra aqui</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={onSubmit}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}