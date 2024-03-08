"use client";
// import  from "font-awesome"
import * as React from "react";
import {
  Check,
  CheckCircle,
  CheckCircle2,
  CheckCircleIcon,
  ChevronDown,
  LucideCheckCircle2,
  LucideIcon,
} from "lucide-react";

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

type Finding = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const findings: Finding[] = [
  {
    value: "implant",
    label: "Implant",
    icon: CheckCircle2,
  },
  {
    value: "crown",
    label: "Crown",
    icon: CheckCircle2,
  },
  {
    value: "rct",
    label: "RCT",
    icon: CheckCircle2,
  },
  {
    value: "filling",
    label: "Filling",
    icon: CheckCircle2,
  },
  {
    value: "caries",
    label: "Caries",
    icon: CheckCircle2,
  },
  {
    value: "restoration",
    label: "Restoration",
    icon: CheckCircle2,
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Finding | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between hover:border"
        >
          <div className="flex items-center text-lg">
            {value ? (
              <>
                <value.icon className="mr-2 h-6 w-6 shrink-0 text-white bg-blue-600 rounded-full" />
                {value.label}
              </>
            ) : (
              "Select Finding ..."
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-100 text-[#21B9C6] font-bold" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Enter Info" />
          <CommandEmpty>No implant found.</CommandEmpty>
          <CommandGroup>
            {findings.map((finding) => (
              <CommandItem
                key={finding.value}
                value={finding.value}
                onSelect={(value) => {
                  setValue(
                    findings.find((priority) => priority.value === value) ||
                      null
                  );
                  setOpen(false);
                }}
              >
                {/* <finding.icon
                  className={cn(
                    "mr-2 h-4 w-4 text-red-700",
                    finding.value === finding.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                /> */}
                {finding.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
