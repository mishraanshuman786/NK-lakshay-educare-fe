import React from "react";

interface Teacher {
  _id: string;
  name: string;
  city: string;
  pincode: string;
  qualification: string;
  photoUrl?: string;

  language?: string[];
  classMode?: string[];
  course?: string[];
  subject?: string[];
  experience?: string;

  userId?: {
    _id: string;
    email: string;
    phone: string;
    roles: string[];
    isActive: boolean;
    isVerified: boolean;
  };
}

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-6 bg-white px-6 py-4">
      {/* Image */}
      <div>
        <img
          src={teacher.photoUrl || "/profile.png"}
          alt={teacher.name}
          className="w-full h-44 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div>
        {/* Name */}
        <div className="flex gap-2 items-center mb-2">
          <h2 className="text-xl font-semibold">
            {teacher.name}
          </h2>

          <h5 className="text-gray-500">
            ({teacher.qualification})
          </h5>
        </div>

        {/* Course */}
        <div className="bg-background-secondary p-2 text-white rounded">
          <h2>
            Course/Class:{" "}
            {teacher.course?.length
              ? teacher.course.join(", ")
              : "-"}
          </h2>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-2 text-sm mt-3">
          <h3>
            Class Mode:{" "}
            {teacher.classMode?.length
              ? teacher.classMode.join(", ")
              : "-"}
          </h3>

          <h3>
            Subject:{" "}
            {teacher.subject?.length
              ? teacher.subject.join(", ")
              : "-"}
          </h3>

          <h3>
            Language:{" "}
            {teacher.language?.length
              ? teacher.language.join(", ")
              : "-"}
          </h3>

          <h3>
            Experience: {teacher.experience || "-"}
          </h3>

          <h3>
            Preferred Area: {teacher.pincode}
          </h3>

          <h3>
            City: {teacher.city}
          </h3>
        </div>

        {/* View More */}
        <div className="mt-3">
          <h3 className="cursor-pointer text-black font-semibold">
            View More
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;