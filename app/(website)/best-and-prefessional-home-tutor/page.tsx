"use client";

import React, { useEffect, useState } from "react";

import FilterSection from "@/components/website/BestAndProfessionalHomeTutor/FilterSection";
import TeacherCard from "@/components/website/BestAndProfessionalHomeTutor/TeacherCard";

import { UserController } from "@/api/userController";

interface Teacher {
  _id: string;
  name: string;
  city: string;
  pincode: string;
  qualification: string;
  photoUrl?: string;

  userId?: {
    _id: string;
    email: string;
    phone: string;
    roles: string[];
    isActive: boolean;
    isVerified: boolean;
  };
}

const BestAndProfessionalHomeTutor = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const [languages, setLanguages] = useState<string[]>([]);
  const [courses, setCourses] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);

  const [totalPages, setTotalPages] = useState(1);

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // -----------------------------------------
  // Fetch Teachers
  // -----------------------------------------

  const fetchTeachers = async (
    currentPage = page,
    currentLimit = limit,
    currentSearch = search,
    currentLanguages= languages,
    currentCourses= courses,
    currentSubjects= subjects
  ) => {
    try {
      setLoading(true);
      setError("");

      const response = await UserController.getTeachers({
        page: currentPage,
        limit: currentLimit,
        search: currentSearch || undefined,
        language: currentLanguages.length >0
                  ? currentLanguages : undefined,
        course: currentCourses.length >0
                 ? currentCourses : undefined,
        subject: currentSubjects.length >0
                ? currentSubjects : undefined
      });

      if (response.success) {
        setTeachers(response.data);

        setTotal(response.pagination.total);

        setTotalPages(response.pagination.totalPages);
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);

      setError("Unable to load teachers.");

      setTeachers([]);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // Initial API call
  // -----------------------------------------

  useEffect(() => {
    fetchTeachers();
  }, []);

  // -----------------------------------------
  // Search
  // -----------------------------------------

const handleSearch = (
  currentLanguages = languages,
  currentCourses = courses,
  currentSubjects = subjects
) => {
  setPage(1);

  fetchTeachers(
    1,
    limit,
    search,
    currentLanguages,
    currentCourses,
    currentSubjects
  );
};

  // -----------------------------------------
  // Clear
  // -----------------------------------------

  const handleClear = () => {
    setSearch("");
    setLanguages([]);
    setCourses([]);
    setSubjects([]);

    setPage(1);

    fetchTeachers(1, limit, "",[],[],[]);
  };

  // -----------------------------------------
  // Previous Page
  // -----------------------------------------

  const handlePrevious = () => {
    if (page <= 1) {
      return;
    }

    const newPage = page - 1;

    setPage(newPage);

    fetchTeachers(newPage, limit, search, languages, courses, subjects);
  };

  // -----------------------------------------
  // Next Page
  // -----------------------------------------

  const handleNext = () => {
    if (page >= totalPages) {
      return;
    }

    const newPage = page + 1;

    setPage(newPage);

    fetchTeachers(newPage, limit, search, languages, courses, subjects);
  };

  // -----------------------------------------
  // Change limit
  // -----------------------------------------

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value);

    setLimit(newLimit);

    setPage(1);

    fetchTeachers(1, newLimit, search, languages, courses, subjects);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-background-lightblue py-14">
        <h1 className="text-center">Professional Home Tutors</h1>

        <h3 className="text-center">Home // All Tutor</h3>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-[1fr_3fr] gap-4 my-10">
        {/* Filter */}
        <div className="shadow-lg h-fit p-4">
          <FilterSection
            search={search}
            setSearch={setSearch}
            languages={languages}
            setLanguages={setLanguages}
            courses={courses}
            setCourses={setCourses}
            subjects={subjects}
            setSubjects={setSubjects}
            onSearch={handleSearch}
            onClear={handleClear}
          />
        </div>

        {/* Teachers */}
        <div className="bg-gray-100 flex flex-col gap-4">
          {/* Result Header */}
          <div className="bg-white px-6 py-4 flex justify-between items-center">
            <div>
              <h2 className="font-semibold">Professional Tutors</h2>

              <p className="text-sm text-gray-500">{total} tutors found</p>
            </div>

            {/* Limit */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Show</span>

              <select
                value={limit}
                onChange={handleLimitChange}
                className="border rounded-md px-2 py-1"
              >
                <option value={5}>5</option>

                <option value={10}>10</option>

                <option value={20}>20</option>

                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="bg-white p-10 text-center">
              <p>Loading teachers...</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="bg-white p-10 text-center text-red-500">
              {error}
            </div>
          )}

          {/* No Data */}
          {!loading && !error && teachers.length === 0 && (
            <div className="bg-white p-10 text-center">
              <p>No teachers found.</p>
            </div>
          )}

          {/* Teacher Cards */}
          {!loading && !error && teachers.length > 0 && (
            <>
              {teachers.map((teacher) => (
                <TeacherCard key={teacher._id} teacher={teacher} />
              ))}

              {/* Pagination */}
              <div className="bg-white px-6 py-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={page === 1 || loading}
                    className="border px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, index) => index + 1)
                      .slice(
                        Math.max(0, page - 3),
                        Math.min(totalPages, page + 2),
                      )
                      .map((pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => {
                            setPage(pageNumber);

                            fetchTeachers(pageNumber, limit, search, languages, courses, subjects);
                          }}
                          className={`px-3 py-2 rounded-md border ${
                            pageNumber === page
                              ? "bg-background-secondary text-white"
                              : "bg-white"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      ))}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={page === totalPages || loading}
                    className="border px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestAndProfessionalHomeTutor;
