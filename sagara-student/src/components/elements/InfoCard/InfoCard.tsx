import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid"

type CardProps = React.ComponentProps<typeof Card> & {
  title: string
  count: number
  icon?: React.ReactNode;
  iconBackground?: string;
}

function InfoCard({ className, icon, title, count, iconBackground, ...props }: CardProps) {
  return (
    <Card className={cn("w-full relative", className)} {...props}>
      {icon && (
        <div className={cn("absolute top-4 right-4 p-2 rounded-md", iconBackground)}>
          {icon}
        </div>
      )}
      <CardHeader className="items-start">
        <CardDescription className="text-sm sm:text-base">{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-start">
        <CardTitle className="text-xl sm:text-2xl">{count}</CardTitle>
      </CardContent>
      <CardFooter className="space-x-2">
        <div className="flex flex-row items-center justify-start space-x-2">
          <ArrowTrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00B69B] dark:text-[#00D9B6]" />
          <p className="text-sm sm:text-base text-[#00B69B] dark:text-[#00D9B6]">8.5%</p>
        </div>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">up from yesterday</p>
      </CardFooter>
    </Card>
  )
}

export default InfoCard
