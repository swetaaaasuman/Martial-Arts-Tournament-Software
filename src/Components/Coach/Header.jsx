import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return alert("Please select an Excel file to upload.");
    } else {
      setIsOpen(false);
      return alert("Successfully uploaded");
    }
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   // Process the uploaded Excel data (e.target.result)
    //   console.log("Excel data:", e.target.result);
    // };
    // reader.readAsText(selectedFile);
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12.5 12l-.45 9.05q-.025.4-.312.675T10.95 22q-.4 0-.687-.275t-.313-.675L9.5 13l-3.175-1.825l-.35 1.3L7.5 15.15q.2.35.088.75t-.463.6q-.35.2-.75.1t-.6-.45l-1.75-3.025q-.1-.175-.125-.375t.025-.4L5 8.45l5.75-3.3L8.7 3.1q-.275-.275-.288-.687T8.7 1.7q.275-.275.7-.275t.7.275l2.975 2.95q.35.35.288.838t-.488.737L10.4 7.65l1.2 1.05l7.5-6.125q.275-.25.663-.212t.687.387q.225.275.213.625T20.4 4zM5 7q-.825 0-1.412-.587T3 5q0-.825.588-1.412T5 3q.825 0 1.413.588T7 5q0 .825-.587 1.413T5 7"
            ></path>
          </svg>
          <a className="btn btn-ghost text-xl">Martial Tour</a>
        </div>
        <div>
          <button onClick={() => setIsOpen(true)}>Upload Excel File</button>
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-90 z-50">
              <div className="container mx-auto p-4 bg-white rounded shadow-md">
                <form onSubmit={handleUpload}>
                  <label
                    htmlFor="participant-list-upload"
                    className="block my-3 font-bold"
                  >
                    Upload Participant List (Excel):
                  </label>
                  <div className="flex items-center mb-3">
                    <input
                      type="file"
                      id="participant-list-upload"
                      name="participantList"
                      className="block w-full p-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                      onChange={handleFileChange}
                      accept=".xlsx, .xls, .csv"
                      required
                    />
                    <button
                      type="submit"
                      className="ml-3 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    >
                      Upload
                    </button>
                  </div>
                  {selectedFile && (
                    <p className="text-gray-500">
                      Selected file: {selectedFile.name}
                    </p>
                  )}
                </form>
                <button
                  onClick={handleClose}
                  className="bg-black text-white p-2 rounded-lg mt-4"
                >
                  X Close
                </button>
              </div>
            </div>
          )}
        </div>
        {/* upload */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            {/* approve request */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">1</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow"
            >
              <div className="card-body">
                <div className="flex flex-row">
                  <div>
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-lg w-16"
                    />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm">S12345 Sanhvi Dayal 18yrs Female</p>
                    <p className="text-sm">Hello Martial Arts Club</p>
                    <p className="text-sm">Cuttack,Odisha</p>
                  </div>
                </div>
                <div className="flex justify-between mt-2 ">
                  <button className="btn bg-green-600 text-white hover:bg-green-700">
                    Accept
                  </button>
                  <button className="btn bg-red-600 text-white hover:bg-red-700">
                    Reject
                  </button>
                  <button className="btn bg-yellow-600 text-white hover:bg-yellow-700">
                    Keep on hold
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/coach-profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to={"/login"}>Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
