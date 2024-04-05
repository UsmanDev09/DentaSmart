import { ClipboardListIcon, Filter, Search } from "lucide-react";
import AnalyticalCard from "@/components/analytics-card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/notification-popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { cookies } from "next/headers";

export async function Dashboard() {
  const token = cookies().get("token");
  const response = await fetch(
    "http://103.217.176.51:8000/v1/dentist_dashboard",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify({ args: { checkup_type: "" } }),
    }
  );
  const dashboard = await response.json();

  const patients = dashboard.checkup;
  const dentist = dashboard.dentist;
  const patientsWithDentist = patients.map((patient: any) => ({
    ...patient,
    dentist,
  }));

  return (
    <div className="flex flex-col gap-y-10 p-10 bg-[#F5F5F5]">
      <div className="flex flex-row justify-between items-center flex-wrap">
        <AnalyticalCard />
        <AnalyticalCard />
        <AnalyticalCard />
        <AnalyticalCard />
      </div>
      <div className="bg-white p-4 border shadow rounded">
        <div className="flex justify-between items-center mb-3">
          <h2 className=" text-[#21B9C6] text-2xl font-semibold">
            Patient Listing
          </h2>
          <div className="flex items-center ">
            <input
              type="search"
              placeholder="Search"
              className="rounded-sm text-black bg-[#f0eeee] py-2 px-4 w-96 relative border border-slate-300 placeholder:text-black"
            />
            <Search className="absolute right-16 w-7 h-7" />
          </div>
        </div>
        <Table>
          <TableHeader className="text-[#fff] bg-[#21B9C6]  border-none">
            <TableRow className=" font-bold">
              <TableHead className="text-[#fff]">Sr.#</TableHead>
              <TableHead className="text-[#fff]">Patient Name</TableHead>
              <TableHead className="text-[#fff]">Assigned to</TableHead>

              <TableHead className="text-[#fff] flex items-center">
                <Popover>
                  <PopoverTrigger className="flex items-center relative">
                    Status
                    <Filter className="ml-2 h-5 w-5" />
                  </PopoverTrigger>
                  <PopoverContent className="absolute left-4">
                    <div>
                      <div className="flex items-center gap-2 my-2">
                        <Checkbox id="status" className="w-3 h-3" />
                        <label
                          htmlFor="status"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Completed
                        </label>
                      </div>
                      <div className="flex items-center gap-2 my-2">
                        <Checkbox id="status" className="w-3 h-3" />
                        <label
                          htmlFor="status"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Pending
                        </label>
                      </div>
                    </div>
                    <Button
                      variant="login"
                      className=" px-8 rounded-xl my-2 mx-[36px] text-sm"
                    >
                      Done
                    </Button>
                  </PopoverContent>
                </Popover>
              </TableHead>
              <TableHead className="text-[#fff]">Gender</TableHead>
              <TableHead className="text-[#fff]">Date of Checkup</TableHead>
              <TableHead className=" text-[#fff]">
                <Popover>
                  <PopoverTrigger className="flex items-center relative">
                    Time <Filter className="ml-2 h-5 w-5" />
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col gap-y-5 absolute left-4">
                    <h6>Select Time Range</h6>
                    <div className="flex justify-evenly">
                      <input className="w-[80px] border" type="text" /> -
                      <input className="w-[80px] border" type="text" />
                    </div>
                    <Button variant="login" className="rounded-xl">
                      Search
                    </Button>
                  </PopoverContent>
                </Popover>
              </TableHead>
              <TableHead className="text-[#fff]">Total Reports</TableHead>
              <TableHead className="text-[#fff]">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientsWithDentist.map((patient: any) => {
              return (
                <TableRow key={patient.checkup_id}>
                  <TableCell>{patient.checkup_id}</TableCell>
                  <TableCell>{patient.member_name}</TableCell>
                  <TableCell>
                    {patient.dentist.first_name} {patient.dentist.last_name}
                  </TableCell>
                  <TableCell>{patient.status}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Link
                      href={{
                        pathname: `/patient-analysis`,
                        query: { checkupId: patient.checkup_id },
                      }}
                      passHref
                    >
                      <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 </TableCell>
              <TableCell>Mitchael</TableCell>
              <TableCell>Unknown</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>3\1\2024</TableCell>
              <TableCell>15:24</TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <Link href="/patient-analysis">
                  <ClipboardListIcon className="text-[#21B9C6] cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="ml-1">Showing 10 of 10 Entries</div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
