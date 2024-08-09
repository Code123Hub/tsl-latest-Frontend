import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import com from "../../../assets/image/com.png";
import "./Document.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRecoilValue } from "recoil";
import { jwtTokenState } from "../../auth/atoms";

function Document() {
  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const [categoryData, setCategoryData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [fileUrl, setFileUrl] = useState([]);
  const cameFromPackagesPage =
    location.state && location.state.from === "/packages";

  const firebaseConfig = {
    apiKey: "AIzaSyAmYW34aeloiKr03bvxECKfnrW8TMRk-7k",
    authDomain: "nitin-app-78a8e.firebaseapp.com",
    databaseURL: "https://nitin-app-78a8e-default-rtdb.firebaseio.com",
    projectId: "nitin-app-78a8e",
    storageBucket: "nitin-app-78a8e.appspot.com",
    messagingSenderId: "557626042730",
    appId: "1:557626042730:web:b7128c9e6b619a1681dd13",
    measurementId: "G-PLNYD6ZFTY",
  };

  const storage = getStorage();

  useEffect(() => {
    fetchUploadedImages();
  }, []);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const handleDownload = () => {
    if (jwtToken) {
      if (cameFromPackagesPage) {
        downloadFiles();
      } else {
        navigate("/package");
      }
    } else {
      navigate("/login");
      console.log("User not logged in. Please login to download.");
    }
  };

  const fetchUploadedImages = async () => {
    try {
      const subCategoriesRef = ref(storage, "TSLDocumentSection");
      const subCategoryItems = await listAll(subCategoriesRef);

      const folderNames = subCategoryItems.prefixes.map(
        (folderRef) => folderRef.name
      );

      const categoryPromises = folderNames.map(async (folderName) => {
        const folderRef = ref(storage, `TSLDocumentSection/${folderName}`);
        const folderItems = await listAll(folderRef);

        const subFolderNames = folderItems.prefixes.map(
          (subFolderRef) => subFolderRef.name
        );

        const subDocuments = await Promise.all(
          folderItems.items.map(async (item) => item.name)
        );

        const documents = await Promise.all(
          subFolderNames.flatMap(async (subFolderName) => {
            const subFolderRef = ref(
              storage,
              `TSLDocumentSection/${folderName}/${subFolderName}`
            );
            const subFolderItems = await listAll(subFolderRef);
            return subFolderItems.items.map((item) => item.name);
          })
        );

        return {
          folderName,
          subFolderNames,
          subDocuments,
          documents,
        };
      });

      const categoryData = await Promise.all(categoryPromises);

      console.log("Category Data:", categoryData);

      setCategoryData(categoryData);
    } catch (error) {
      console.error("Error fetching folder names:", error);
    }
  };

  const truncateFileName = (fileName) => {
    let fileNameStr = "";
    if (typeof fileName === "string") {
      fileNameStr = fileName;
    } else {
      fileNameStr = fileName.toString();
    }

    const words = fileNameStr.split(" ");
    return words.length > 3 ? `${words.slice(0, 3).join(" ")}...` : fileNameStr;
  };

  const downloadFiles = async () => {
    try {
      const downloadURLs = await Promise.all(
        categoryData.flatMap((item) =>
          item.subDocuments.map(async (fileName) => {
            const fileRef = ref(
              storage,
              `TSLDocumentSection/${item.folderName}/${fileName}`
            );
            return await getDownloadURL(fileRef);
          })
        )
      );

      downloadURLs.forEach((url, index) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `file${index}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } catch (error) {
      console.error("Error downloading files:", error);
    }
  };

  const handleBrowseMore = () => {
    if (jwtToken) {
      navigate("/templates");
    } else {
      navigate("/login");
      console.log("User not logged in. Please login to download.");
    }
  };

  return (
    <div className="card-container1" id="DocSection">
      <div className="card-container">
        <div>
          <h3>
            Whatever Business <span>or </span>Legal Document You Need,
            <span> We Have a Template </span> for You.
          </h3>
          <p>
            we offer 200+ templates in different categories | Register with Us |
            Download templates
          </p>
        </div>
        <div className="grid slice-grid">
          {categoryData.slice(0, 24).map((item, index) => (
            // *******************
            <div key={index} className="card">
              <img
                src={com}
                style={{
                  marginRight: "20px",
                  alignText: "center",
                  color: "#02244a",
                  width: "35px",
                  marginLeft: "20px",
                }}
                alt="icon"
              />
              <h4>{item.folderName}</h4>
              <div
                className="chevron-icon"
                onClick={() => toggleCategory(index)}
              >
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </div>

              {expandedCategory === index && (
                <div className="dropdown-options">
                  {/* Render sub-folder names as headings if there are any sub-folders */}

                  {item.subFolderNames.length > 0 && (
                    <>
                      {item.subFolderNames.map((subFolderName, subIndex) => (
                        <div key={subIndex}>
                          <div
                            key={subFolderName}
                            onClick={() => navigate("/Package")}
                            className="subcategory-div"
                          >
                            {truncateFileName(subFolderName)}
                          </div>
                        </div>
                      ))}

                      {/* Render documents inside each sub-folder */}
                      {/* {item.subFolderNames.map((subFolderName, subIndex) => (
                      <div key={subIndex}>
                        {item.documents.map((document, docIndex) => (
                          <div key={docIndex} 
                          onClick={() => navigate('/templateSampleVarieties')} 
                          className="subcategory-div">
                            {truncateFileName(document)}
                          </div>
                        ))}
                      </div>
                    ))} */}
                    </>
                  )}

                  {/* If there are no sub-folders, render all files directly under the category name */}
                  {item.subFolderNames.length === 0 && (
                    <>
                      {item.subDocuments.map((document, docIndex) => (
                        <div
                          key={docIndex}
                          onClick={() => navigate("/templateSampleVarieties")}
                          className="subcategory-div"
                        >
                          {truncateFileName(document)}
                        </div>
                      ))}
                    </>
                  )}

                  <div className="drop-down-div-fa">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="drop-down-fa-icon"
                      onClick={handleDownload}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <p style={{ fontSize: "22px" }}>
          Buy TSL Toolkit{" "}
          <spa style={{ fontSize: "26px", color: "#000000", fontWeight: 500 }}>
            <del>₹7,999</del>
          </spa>
          <span
            style={{ fontSize: "36px", color: "#000000", fontWeight: "bold" }}
          >
            &nbsp;₹3,499
          </span>
          &nbsp;/year
        </p>

        <div className="center-button">
          <button onClick={handleDownload}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Document;
