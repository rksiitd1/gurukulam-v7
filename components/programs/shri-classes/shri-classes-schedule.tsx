"use client"

import { useState } from "react"

type ScheduleRow = { time: string; subject: string; faculty: string }
type Session = { title?: string; reportingTime: string; rows: ScheduleRow[] }
type ClassSchedule = { id: string; label: string; sessions: Session[] }

const classes: ClassSchedule[] = [
  {
    id: "9",
    label: "Class 9",
    sessions: [
      {
        reportingTime: "5:25 AM",
        rows: [
          { time: "5:30 – 6:15 AM", subject: "English", faculty: "Ratnesh Sir" },
          { time: "6:15 – 7:15 AM", subject: "Science (Physics, Chemistry & Biology)", faculty: "Vivek Sir" },
          { time: "7:15 – 8:00 AM", subject: "Hindi & Social Science (SST)", faculty: "Sanjay Sir" },
          { time: "8:00 – 9:00 AM", subject: "Mathematics", faculty: "Roshan Sir" },
        ],
      },
    ],
  },
  {
    id: "10",
    label: "Class 10",
    sessions: [
      {
        title: "Morning Session",
        reportingTime: "5:25 AM",
        rows: [
          { time: "5:30 – 6:15 AM", subject: "Hindi & History", faculty: "Sanjay Sir" },
          { time: "6:15 – 7:15 AM", subject: "Mathematics", faculty: "Ratnesh Sir" },
          { time: "7:15 – 8:15 AM", subject: "Chemistry / Biology", faculty: "Raju Sir" },
          { time: "8:15 – 9:00 AM", subject: "English", faculty: "Ratnesh Sir" },
          { time: "9:00 – 9:45 AM", subject: "Geography", faculty: "Raju Sir" },
          { time: "9:45 – 10:15 AM", subject: "Science Revision", faculty: "Ratnesh Sir" },
        ],
      },
      {
        title: "Afternoon Session",
        reportingTime: "1:45 PM",
        rows: [
          { time: "1:45 – 3:15 PM", subject: "Physics", faculty: "Ratnesh Sir" },
          { time: "3:15 – 4:15 PM", subject: "Sanskrit", faculty: "Ratnesh Sir" },
        ],
      },
    ],
  },
  {
    id: "11",
    label: "Class 11",
    sessions: [
      {
        reportingTime: "6:25 AM",
        rows: [
          { time: "6:30 – 7:15 AM", subject: "English", faculty: "Mukund (Golu) Sir" },
          { time: "7:15 – 8:00 AM", subject: "Physics", faculty: "Ratnesh Sir" },
          { time: "8:00 – 8:45 AM", subject: "Biology", faculty: "Raju Sir" },
          { time: "8:45 – 9:45 AM", subject: "Mathematics", faculty: "Ratnesh Sir" },
          { time: "9:45 – 10:30 AM", subject: "Chemistry", faculty: "Raju Sir" },
        ],
      },
    ],
  },
  {
    id: "12",
    label: "Class 12",
    sessions: [
      {
        reportingTime: "2:00 PM",
        rows: [
          { time: "2:15 – 3:15 PM", subject: "Biology", faculty: "Raju Sir" },
          { time: "3:15 – 4:15 PM", subject: "Chemistry", faculty: "Raju Sir" },
          { time: "4:15 – 5:15 PM", subject: "Physics", faculty: "Ratnesh Sir" },
          { time: "5:15 – 6:00 PM", subject: "English", faculty: "Mukund (Golu) Sir" },
          { time: "6:00 – 7:00 PM", subject: "Mathematics", faculty: "Mukund (Golu) Sir" },
        ],
      },
    ],
  },
]

export function ShriClassesSchedule() {
  const [active, setActive] = useState("9")
  const current = classes.find((c) => c.id === active)!

  return (
    <section id="schedule" className="py-16 lg:py-24 bg-[#F3EDE0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14 max-w-3xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A9812F]">
            The Actual Timetable
          </span>
          <h2 className="font-[family-name:var(--font-source-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#16284A] mt-3 mb-4 tracking-tight">
            Six Subjects. Four Classes. One Roof.
          </h2>
          <p className="text-lg text-[#3E4A61] leading-relaxed">
            Not a curated highlight — the real weekday schedule, exactly as it runs. Mathematics, Science,
            English, Hindi, Sanskrit and Social Science, each with its own teacher and its own hour.
          </p>
        </div>

        {/* Class tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {classes.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 text-sm font-medium tracking-wide transition-colors border ${
                active === c.id
                  ? "bg-[#16284A] text-[#F3EDE0] border-[#16284A]"
                  : "bg-transparent text-[#16284A] border-[#16284A]/25 hover:border-[#16284A]/60"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Schedule table(s) */}
        <div className="max-w-3xl mx-auto">
          {current.sessions.map((session, sIndex) => (
            <div key={sIndex} className={sIndex > 0 ? "mt-10" : ""}>
              {session.title && (
                <h3 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold text-[#16284A] mb-1">
                  {session.title}
                </h3>
              )}
              <p className="text-xs uppercase tracking-[0.15em] text-[#8B6B33] mb-4">
                Students report at {session.reportingTime}
              </p>
              <div className="border-t border-[#16284A]/15">
                {session.rows.map((row, rIndex) => (
                  <div
                    key={rIndex}
                    className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[10rem_1fr_auto] gap-3 sm:gap-6 items-baseline py-3 border-b border-[#16284A]/15"
                  >
                    <span className="font-[family-name:var(--font-plex-mono)] text-xs sm:text-sm text-[#A9812F] tabular-nums whitespace-nowrap">
                      {row.time}
                    </span>
                    <span className="text-sm sm:text-base text-[#16284A] font-medium">{row.subject}</span>
                    <span className="text-xs sm:text-sm text-[#6B7488] whitespace-nowrap">{row.faculty}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
