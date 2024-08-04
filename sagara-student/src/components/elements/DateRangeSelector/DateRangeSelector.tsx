import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@heroicons/react/24/outline";

const DateRangeSelector = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center justify-between w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[280px] justify-start text-left font-normal bg-white-background dark:bg-background text-foreground">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? date.toDateString() : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white-background text-foreground">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className="bg-white-background text-foreground dark:bg-background "
          />
        </PopoverContent>
      </Popover>

      <Select>
        <SelectTrigger className="w-[100px] bg-white-background dark:bg-background text-foreground">
          <SelectValue placeholder="Daily" />
        </SelectTrigger>
        <SelectContent className="bg-white-background dark:bg-background text-foreground">
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateRangeSelector;
