import { useState } from "react";
import Breadcump from "../../Partials/Breadcump";

export default function Write() {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [sectionContent, setSectionContent] = useState([]);

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
                  onClick={() => {
                    setSelectedSection(index);
                  }}
                >
                  {section}
                </li>
              );
            })}
            {newSection && (
              <li className="list-group-item">
                <input
                  type="text"
                  className="form-control"
                  style={{ border: "none" }}
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
                  setSections([...sections, sectionName]);
                  setNewSection(false);
                } else {
                  setNewSection(true);
                }
              }}
            >
              {newSection ? "Save" : "New Section"}
            </button>
            <button className="btn btn-info btn-sm">Download</button>
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
                {sectionContent[selectedSection]}
              </textarea>
              <button
                className="btn btn-sm btn-primary mt-2"
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
    </>
  );
}
