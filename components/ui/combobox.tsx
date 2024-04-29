"use client";
// import  from "font-awesome"
import * as React from "react";
import {
  Check,
  CheckCircle2,
  ChevronDown,
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


export function Combobox( { diagnosticFindings, diagnosticFinding, handlePolygonLabelChange } : {diagnosticFindings: any, diagnosticFinding: string, handlePolygonLabelChange: any} ) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Finding>({
    value: diagnosticFinding,
    label: diagnosticFinding,
    icon: CheckCircle2
  });

  const findings = diagnosticFindings.map((diagnosticFinding: string) => {
    return (
      {
        value: diagnosticFinding,
        label: diagnosticFinding,
        icon: CheckCircle2
      }
    )
  })
  console.log(findings)
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
                {value.value}
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
            {findings.map((finding: any) => (
              <CommandItem
                key={finding.label}
                value={finding.label}
                onSelect={(currentValue) => {
                  setValue(({label: finding.label, value: finding.label, icon: CheckCircle2}))
                  handlePolygonLabelChange(finding.label)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === finding.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {finding.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
