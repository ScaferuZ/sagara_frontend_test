import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusIcon, AdjustmentsHorizontalIcon, CogIcon } from "@heroicons/react/24/outline";

interface TableInfoProps {
  searchInput?: React.ReactNode
  dropdownMenu?: React.ReactNode
}

const TableInfo: React.FC<TableInfoProps> = ({ searchInput, dropdownMenu }) => {
  const [filterValue, setFilterValue] = useState('');
  const [selectedColumns, setSelectedColumns] = useState({
    fullName: false,
    emailAddress: true,
    phoneNumber: true,
    instance: true,
    createdAt: true,
  });

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-4">
      <div className="flex items-cemnter space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-1 bg-white-background dark:bg-background">
              <AdjustmentsHorizontalIcon className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <div className="p-2">
              <Select onValueChange={setFilterValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instance">Instance</SelectItem>
                  {/* Add more filter options here */}
                </SelectContent>
              </Select>
              <Input
                className="mt-2"
                placeholder="Enter condition"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <Button className="mt-2 w-full bg-red hover:bg-rose-900 text-primary-foreground">Add Filter</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="bg-red text-white-background hover:bg-rose-900 ">
          <PlusIcon className="h-4 w-4 mr-1" />
          Add User
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        {searchInput ? searchInput : <Input placeholder="Search" />}

        {dropdownMenu ? dropdownMenu : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className='bg-white-background dark:bg-background'>
                <CogIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(selectedColumns).map(([key, value]) => (
                <DropdownMenuCheckboxItem
                  key={key}
                  checked={value}
                  onCheckedChange={(checked) =>
                    setSelectedColumns(prev => ({ ...prev, [key]: checked }))
                  }
                >
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

        )}
      </div>
    </div>
  );
};

export default TableInfo;
