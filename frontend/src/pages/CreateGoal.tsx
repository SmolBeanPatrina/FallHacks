import { Formik, Field } from "formik"

function CreateGoal() {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full flex flex-col justify-center h-12 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600 select-none text-xl py-2 text-gray-800 dark:text-white">
        Create Goal
      </div>
      <main className="mt-12 p-4 text-left w-screen max-w-lg ">
        <Formik initialValues={{ name: "", frequency: "daily" }} onSubmit={(values) => { console.log(values) }}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6"
                >
                  Goal name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    placeholder="Walk 10,000 steps..."
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="frequency"
                  className="block text-sm font-medium leading-6"
                >
                  Frequency
                </label>
                <div className="mt-2">
                  <Field
                    component="select"
                    id="frequency"
                    name="frequency"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </Field>
                </div>
              </div>
              <input
                type="submit"
                className="rounded bg-green-600 hover:bg-green-500 dark:bg-green-400 dark:hover:bg-green-300 text-white dark:text-gray-900 py-2 px-4 mt-4 transition-all text-sm"
              />
            </form>
          )}
        </Formik>
      </main>
    </>
  )
}

export default CreateGoal
