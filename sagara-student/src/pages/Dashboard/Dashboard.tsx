import DateRangeSelector from "@/components/elements/DateRangeSelector"
import InfoCard from "@/components/elements/InfoCard"
import StudentChart from "@/components/elements/StudentChart"
import { PresentationChartLineIcon, UsersIcon } from "@heroicons/react/24/solid"
import { CubeIcon } from "@radix-ui/react-icons"

const cards = [
  {
    title: "Total Students",
    count: 513,
    icon: <UsersIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />,
    iconBackground: "bg-blue-100 dark:bg-blue-900",
  },
  {
    title: "Total Certified Students",
    count: 489,
    icon: <CubeIcon className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
    iconBackground: "bg-rose-100 dark:bg-rose-900",
  },
  {
    title: "Average Certification Score",
    count: 84.62,
    icon: <PresentationChartLineIcon className="h-6 w-6 text-green-500 dark:text-green-400" />,
    iconBackground: "bg-green-100 dark:bg-green-900",
  },
]

const Dashboard = () => {
  return (
    <div>
      <DateRangeSelector />
      <div className="flex flex-row justify-between space-x-16 my-11">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))
        }
      </div>
      <StudentChart />
    </div>
  )
}

export default Dashboard
