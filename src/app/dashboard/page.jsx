import NavLink from "@/shared/NavLink";
import { Button, Card } from "@heroui/react";

export default function DashboardPage() {
  return (
   <div className="p-5">
      <div className="space-y-1">
        <h2 className="font-bold text-4xl text-pink-600 ">DashBoard</h2>
        <p className="text-slate-500">Manage your pet adoption activities</p>
      </div>
      <Card className="m-5">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="space-x-10">
            <Button> <NavLink href={'/add-pet'}>Add Pet</NavLink> </Button>
            <Button>My Requests</Button>
            <NavLink href={'/my-listings'}>My Listings</NavLink>
        </div>

      </Card>
   </div>
  );
}