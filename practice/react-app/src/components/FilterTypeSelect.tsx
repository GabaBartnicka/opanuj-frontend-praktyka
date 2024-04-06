import { Select, SelectItem } from '@nextui-org/react';
import { searchCriteria } from '../types/searchCriteria.ts';


export const FilterTypeSelect = () => {
  return (
    <>
      <Select
        label="Country search criteria"
        placeholder="Select a search criteria"
        // className="max-w-xs"
        classNames={{
          label: "group-data-[filled=true]:-translate-y-5",
          trigger: "min-h-unit-16",
          listboxWrapper: "max-h-[400px]",
        }}
        listboxProps={{
          itemClasses: {
            base: [
              "text-default-500",
            ],
          },
        }}
      >
        {searchCriteria.map((criteria) => (
          <SelectItem key={criteria.name} value={criteria.name}
                      // className="bg-gray-800 text-white"
          >
            {criteria.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};