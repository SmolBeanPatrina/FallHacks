import "./Profile.css"

function EditIcon() {
  return (
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 21"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
      />
    </svg>
  )
}

function Profile() {
  return (
    <div className="flex flex-col items-start w-screen max-w-lg p-8">
      <div className="flex flex-col items-start mt-12">
        <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
        <p>No goals accomplished... yet!</p>
      </div>
      <div className="mt-8 w-full">
        <table className="w-full">
          <tbody>
            <tr className="border-b dark:border-gray-400">
              <td>Email</td>
              <td>lipsum@example.com</td>
              <td><EditIcon /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td className="text-xs tracking-widest">●●●●●●●●●●●●</td>
              <td><EditIcon /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="rounded border dark:border-gray-400 text-red-600 dark:text-red-400 py-2 px-4 mt-8">
        Sign out
      </button>
    </div>
  )
}

export default Profile
