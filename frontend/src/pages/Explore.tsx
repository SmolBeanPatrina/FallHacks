import { Link } from "react-router-dom"

function Card({
  to = "/explore/goal",
  title = "Lorem Ipsum",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum viverra ante, eget pretium augue.",
}) {
  return (
    <Link
      to={to}
      className="inline-block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 whitespace-normal mr-4"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
    </Link>
  )
}

function Explore() {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full flex flex-col justify-center h-12 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600 select-none text-xl py-2 text-gray-800 dark:text-white">
        Explore
      </div>
      <main className="flex flex-col mt-12 text-left w-screen max-w-lg p-4 gap-6">
        <div>
          <h1 className="text-2xl font-extrabold">Get Inspired</h1>
          <p>Minute self care routines for your wellbeing</p>
          <div className="overflow-x-auto w-full whitespace-nowrap mt-2">
            <Card to="/explore/daily-meditation" title="Daily Meditation" desc="Let your thoughts flow and live in the moment. Take a minute to relax every day." />
            <Card to="/explore/stay-hydrated" title="Stay Hydrated" desc="Replenish water supply to your body periodically. Take a break from your busy life and care for your body." />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold">Get Motivated</h1>
          <p>Top goals from the AppName community</p>
        </div>
      </main>
    </>
  )
}

export default Explore
