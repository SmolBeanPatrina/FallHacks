import "./Profile.css"

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
              <td>Edit</td>
            </tr>
            <tr>
              <td>Password</td>
              <td className="text-xs tracking-widest">●●●●●●●●●●●●</td>
              <td>Edit</td>
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
