import dreamer from "../assets/undraw_dreamer.svg"

function Goal() {
  return (
    <div>
      <span>This is a goal</span>
    </div>
  )
}

function NoGoals() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-8 text-gray-700 dark:text-gray-50">
      <img src={dreamer} alt="No goals yet" className="w-72" />
      <h1 className="text-xl font-semibold mt-4">It's empty in here...</h1>
      <p>We are ready to help you turn over a new leaf!</p>
      <button className="rounded bg-green-600 hover:bg-green-500 dark:bg-green-400 dark:hover:bg-green-300 text-white dark:text-gray-900 py-2 px-4 mt-4 transition-all">
        Create a new goal
      </button>
    </div>
  )
}

function Goals() {
  return <NoGoals />
}

export default Goals
