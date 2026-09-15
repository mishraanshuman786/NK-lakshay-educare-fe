import React from "react";
import { Input } from "@/components/ui/input";

const languages = [
  "Hindi",
  "English",
  "Bangali",
  "Punjabi",
  "Marathi",
  "Urdu",
  "Others",
];

const classes = [
  "Day Care At Home",
  "Pre-Schooler and Toddler",
  "CS Preparation",
  "CA Preparation",
  "CLAT",
  "IAS",
  "PCS",
  "SSC Banking",
  "MCA",
  "BCA",
  "MCOM",
  "BCOM",
  "MSC",
  "BSC",
  "KG",
  "Nursery",
  "Competitive Exam",
  "IIT JEE",
  "NEET Preparation",
  "Music",
  "Dance",
  "Yoga",
  "Language and Spoken",
  "Hobby Course",
];

const subjects = [
  "Yoga",
  "Dance & Music",
  "Social Study",
  "Others",
  "Basic Learning Of Preschool",
  "General Knowledge",
  "Bengali",
  "Commerce",
  "French",
  "Urdu",
  "Hindi",
  "Personal Trainer",
  "Social Science",
  "Computer & Software",
  "Art & Drawing",
];

interface FilterSectionProps {
  search: string;
  setSearch: (value: string) => void;

  languages: string[];
  setLanguages: React.Dispatch<React.SetStateAction<string[]>>;

  courses: string[];
  setCourses: React.Dispatch<React.SetStateAction<string[]>>;

  subjects: string[];
  setSubjects: React.Dispatch<React.SetStateAction<string[]>>;

  onSearch: () => void;
  onClear: () => void;
}

const FilterSection = ({
  search,
  setSearch,
  languages: selectedLanguages,
  setLanguages,
  courses: selectedCourses,
  setCourses,
  subjects: selectedSubjects,
  setSubjects,
  onSearch,
  onClear,
}: FilterSectionProps) => {
  return (
    <div>
      {/* Search */}
      <div className="shadow-md p-2">
        <Input
          placeholder="Name/Id/City/Pincode"
          className="rounded-md h-10 text-md border border-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />

        <div className="flex gap-2 mt-2">
          <button
            onClick={onSearch}
            className="bg-background-secondary text-white px-4 py-2 rounded-md"
          >
            Search
          </button>

          <button
            onClick={onClear}
            className="border border-gray-400 px-4 py-2 rounded-md"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Language Search */}
      <div className="my-4">
        <h4 className="text-xl my-1">By Language</h4>

        {languages.map((language) => {
          const normalizedLanguage = language.trim().toLowerCase();

          return (
            <div key={language} className="my-1">
              <input
                type="checkbox"
                id={`language-${normalizedLanguage}`}
                checked={selectedLanguages.includes(normalizedLanguage)}
                onChange={() =>
                  toggleFilter(language, selectedLanguages, setLanguages)
                }
              />

              <label
                htmlFor={`language-${normalizedLanguage}`}
                className="ml-1 text-gray-700 cursor-pointer"
              >
                {language}
              </label>
            </div>
          );
        })}
      </div>

      {/* Class Search */}
      <div className="my-4">
        <h4 className="text-xl my-1">By Class</h4>

        <div className="h-50 overflow-auto">
          {classes.map((cl) => {
            const normalizedCourse = cl.trim().toLowerCase();

            return (
              <div key={cl} className="my-1">
                <input
                  type="checkbox"
                  id={`course-${normalizedCourse}`}
                  checked={selectedCourses.includes(normalizedCourse)}
                  onChange={() => toggleFilter(cl, selectedCourses, setCourses)}
                />

                <label
                  htmlFor={`course-${normalizedCourse}`}
                  className="ml-1 text-gray-700 cursor-pointer"
                >
                  {cl}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subject Search */}
      <div className="my-4">
        <h4 className="text-xl my-1">By Subject</h4>

        <div className="h-50 overflow-auto">
          {subjects.map((subject) => {
            const normalizedSubject = subject.trim().toLowerCase();

            return (
              <div key={subject} className="my-1">
                <input
                  type="checkbox"
                  id={`subject-${normalizedSubject}`}
                  checked={selectedSubjects.includes(normalizedSubject)}
                  onChange={() =>
                    toggleFilter(subject, selectedSubjects, setSubjects)
                  }
                />

                <label
                  htmlFor={`subject-${normalizedSubject}`}
                  className="ml-1 text-gray-700 cursor-pointer"
                >
                  {subject}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

const toggleFilter = (
  value: string,
  selectedValues: string[],
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const normalizedValue = value.trim().toLowerCase();

  if (selectedValues.includes(normalizedValue)) {
    setSelectedValues(
      selectedValues.filter((item) => item !== normalizedValue),
    );
  } else {
    setSelectedValues([...selectedValues, normalizedValue]);
  }
};
