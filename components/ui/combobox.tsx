"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const implants = [
  {
    value: "crown",
    label: "Crown",
  },
  {
    value: "rct",
    label: "RCT",
  },
  {
    value: "filling",
    label: "Filling",
  },
  {
    value: "caries",
    label: "Caries",
  },
  {
    value: "restoration",
    label: "Restoration",
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between hover:border"
        >
          {value
            ? implants.find((implant) => implant.value === value)?.label
            : "Implant"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-100 text-[#21B9C6] font-bold" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Enter Info" />
          <CommandEmpty>No implant found.</CommandEmpty>
          <CommandGroup>
            {implants.map((implant) => (
              <CommandItem
                key={implant.value}
                value={implant.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === implant.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {implant.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
