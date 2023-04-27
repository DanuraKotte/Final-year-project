import React, { useState } from "react";
import "../App.css";

function EventForm() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numVoters, setNumVoters] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [numCandidates, setNumCandidates] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your code to submit the form data to your backend or do whatever you need to do with the data
  };

  return (
    <>
      <div className="justify-content-center px-4 mt-5">
        <div className="py-5 px-2">
          <div className="d-flex service-flex ms-5 gap-5">
            <div className="col-5 bg-light p-3">
              <div className="service-h mb-3">New Voting Event</div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  className="mx-4"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="startDate">Start date:</label>
                <input
                  className="mx-4"
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <label htmlFor="endDate">End date:</label>
                <input
                  className="mx-4"
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <br />
                <label htmlFor="numVoters">Number of voters:</label>
                <input
                  className="mx-4"
                  type="number"
                  id="numVoters"
                  value={numVoters}
                  onChange={(e) => setNumVoters(e.target.value)}
                />
                <label htmlFor="timeZone">Time zone:</label>
                <input
                  className="ms-2"
                  type="text"
                  id="timeZone"
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                />
                <br />
                <label htmlFor="numCandidates">Number of candidates:</label>
                <select
                  className="mx-4"
                  id="numCandidates"
                  value={numCandidates}
                  onChange={(e) => setNumCandidates(e.target.value)}>
                  <option value="">--Select--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <br />
                <label htmlFor="startTime">Start time:</label>
                <input
                  className="mx-4"
                  type="time"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <br />
                <label htmlFor="endTime">End time:</label>
                <input
                  className="mx-4"
                  type="time"
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
                <br />
                <label htmlFor="eventDesc">Event description:</label>
                <div className="ms-5">
                  <textarea
                    className="my-4"
                    id="eventDesc"
                    value={eventDesc}
                    onChange={(e) => setEventDesc(e.target.value)}
                  />
                </div>
                <button className="btn-2 float-end" type="submit">
                  Create event
                </button>
              </form>
            </div>
            <div className="col-7 bg-light p-3">
              {" "}
              <div className="service-h mb-3">
                Event Default Rules and Regulations
              </div>
              <ul className="fs-5">
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventForm;
