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

import { Clipboard } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-10 p-10 bg-[#F5F5F5]">
      <div className="flex flex-row justify-around items-center">
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <Clipboard />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <Clipboard />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <Clipboard />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>
              <Clipboard />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="text-[#fff] bg-[#21B9C6]  border-none">
          <TableRow className=" font-bold">
            <TableHead className="text-[#fff]">Sr.#</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Assigned to</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Date of Checkup</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Total Reports</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=""></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className=""></TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
  );
};

export default Dashboard;
