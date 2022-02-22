import React, { useState } from "react";
import Breadcump from "../../Partials/Breadcump";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast(`${msg}`);

export default function Write() {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [sectionContent, setSectionContent] = useState([]);
  const [sectionText, setSectionText] = useState("");

  const breadcrumb = [{ name: "Home" }, { name: "Write" }];

  const updateContent = (index, content) => {
    var newContent = sectionContent;
    newContent[index] = content;
    setSectionContent(newContent);
  };

  return (
    <>
      <Breadcump items={breadcrumb} />
      <div className="row">
        <div className="col-md-3 mt-2">
          <h3>Sections</h3>
          <hr />
          <ul className="list-group">
            {sections.map((section, index) => {
              return (
                <li
                  className="list-group-item"
                  key={index}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectedSection(index);
                    setSectionText(sectionContent[selectedSection]);
                  }}
                >
                  {section}
                </li>
              );
            })}
            {newSection && (
              <li
                className="list-group-item"
                style={{
                  padding: "0",
                  margin: "0",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  style={{
                    border: "none",
                    padding: "0 !important",
                    margin: "0 !important",
                  }}
                  placeholder="Section name"
                  onChange={(e) => {
                    setSectionName(e.target.value);
                  }}
                />
              </li>
            )}
          </ul>
          <div className="d-grid gap-2">
            <button
              className="mt-3 btn btn-sm btn-primary"
              onClick={() => {
                if (newSection) {
                  if (sectionName === "") {
                    notify("Section name cannot be empty!");
                  } else {
                    setSections([...sections, sectionName]);
                    setNewSection(false);
                    setSectionName("");
                    notify("Section created");
                  }
                } else {
                  setNewSection(true);
                }
              }}
            >
              {newSection ? "Save" : "New Section"}
            </button>
            {newSection && (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => setNewSection(false)}
              >
                Cancel
              </button>
            )}
            <button
              className="btn btn-info btn-sm"
              onClick={() => {
                notify("Download");
              }}
            >
              Download
            </button>
          </div>
        </div>
        <div className="col-md-9 mt-2">
          {selectedSection !== "" && (
            <>
              <h1>{sections[selectedSection]}</h1>
              <textarea
                className="form-control"
                rows="12"
                onChange={(e) => {
                  updateContent(selectedSection, e.target.value);
                }}
              >
                {sectionText}
              </textarea>
              <button
                className="btn btn-primary mt-2"
                onClick={() => {
                  setSelectedSection("");
                }}
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}
