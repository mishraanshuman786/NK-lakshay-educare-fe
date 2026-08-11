"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type RegisterDialogProps = {
  children: React.ReactElement;
};
export default function RegisterDialog({children}:RegisterDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleTeacherRegister = () => {
    setOpen(false);
    router.push("/teacher-sign-up");
  };

  const handleStudentRegister = () => {
    setOpen(false);
    router.push("/student-sign-up");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={children}
      />

      <DialogContent
        className="
          w-[calc(100%-2rem)]
          sm:!max-w-xl
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <DialogHeader>
          <DialogTitle>What Are You Looking For?</DialogTitle>

          <DialogDescription className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/RegisterDialog/teacherImage.webp"
                alt="Teacher Selection"
                className="h-48 w-full object-contain"
              />

              <h4 className="text-center text-black">
                Are You a Teacher?
              </h4>

              <Button
                type="button"
                onClick={handleTeacherRegister}
                className="rounded-2xl bg-background-secondary hover:bg-background-primary"
              >
                Create Account As A Tutor
              </Button>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src="/RegisterDialog/studentImage.webp"
                alt="Student Selection"
                className="h-48 w-full object-contain"
              />

              <h4 className="text-center text-black">
                Are You a Student / Parent?
              </h4>

              <Button
                type="button"
                onClick={handleStudentRegister}
                className="rounded-2xl bg-background-secondary hover:bg-background-primary"
              >
                Create Account As A Student
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}