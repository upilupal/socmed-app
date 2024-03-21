import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";
import React from "react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="ml-4 bg-slate-100 p-2 rounded-md">
      <h2 className="font-bold">Who To Follow</h2>
      {/* CARD USER */}
      <div className=" my-2 flex items-center justify-between rounded-md border border-gray-300 p-2">
        <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Naufal</p>
        </div>

        <UserPlus/>
      </div>
      <div className=" my-2 flex items-center justify-between rounded-md border border-gray-300 p-2">
        <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Naufal</p>
        </div>

        <UserPlus/>
      </div>
      <div className=" my-2 flex items-center justify-between rounded-md border border-gray-300 p-2">
        <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Naufal</p>
        </div>

        <UserPlus/>
      </div>
      {/* CARD USER END */}
    </div>
  );
};

export default CardWhoToFollow;
