import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import { Clipboard, ClipboardListIcon, File } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-10 p-10 bg-[#F5F5F5]">
      <div className="flex flex-row justify-around items-center">
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <ClipboardListIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            {/* <Clipboard /> */}
            <h3 className="text-[#21B9C6] text-xl font-bold mt-4">113,008</h3>
            <span className="text-xs text-slate-400">
              Total number of Patients
            </span>
          </CardContent>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <ClipboardListIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            {/* <Clipboard /> */}
            <h3 className="text-[#21B9C6] text-xl font-bold mt-4">18,008</h3>
            <span className="text-xs text-slate-400">
              Total number of Doctors
            </span>
          </CardContent>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <ClipboardListIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            {/* <Clipboard /> */}
            <h3 className="text-[#21B9C6] text-xl font-bold mt-4">12,008</h3>
            <span className="text-xs text-slate-400">Pending Jobs</span>
          </CardContent>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <ClipboardListIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            {/* <Clipboard /> */}
            <h3 className="text-[#21B9C6] text-xl font-bold mt-4">300,008</h3>
            <span className="text-xs text-slate-400">
              Total number of Reports
            </span>
          </CardContent>
        </Card>
      </div>
      <Table>
        <TableHeader className="text-[#fff] bg-[#21B9C6]  border-none">
          <TableRow className=" font-bold">
            <TableHead className="text-[#fff]">Sr.#</TableHead>
            <TableHead className="text-[#fff]">Patient Name</TableHead>
            <TableHead className="text-[#fff]">Assigned to</TableHead>
            <TableHead className="text-[#fff]">Gender</TableHead>
            <TableHead className="text-[#fff]">Date of Checkup</TableHead>
            <TableHead className="text-[#fff]">Time</TableHead>
            <TableHead className="text-[#fff]">Total Reports</TableHead>
            <TableHead className="text-[#fff]">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1 </TableCell>
            <TableCell>Mitchael</TableCell>
            <TableCell>unknown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>3\1\2024</TableCell>
            <TableCell>15:24</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <File />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1 </TableCell>
            <TableCell>Mitchael</TableCell>
            <TableCell>unknown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>3\1\2024</TableCell>
            <TableCell>15:24</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <File />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1 </TableCell>
            <TableCell>Mitchael</TableCell>
            <TableCell>unknown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>3\1\2024</TableCell>
            <TableCell>15:24</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <File />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1 </TableCell>
            <TableCell>Mitchael</TableCell>
            <TableCell>unknown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>3\1\2024</TableCell>
            <TableCell>15:24</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <File />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1 </TableCell>
            <TableCell>Mitchael</TableCell>
            <TableCell>unknown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>3\1\2024</TableCell>
            <TableCell>15:24</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <File />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1 </TableCell>
            <TableCell>Mitchael</TableCell>
            <TableCell>unknown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>3\1\2024</TableCell>
            <TableCell>15:24</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <File />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex flex-row justify-between">
        <div>Showing 1 of 1 Entry</div>
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
};

export default Dashboard;
