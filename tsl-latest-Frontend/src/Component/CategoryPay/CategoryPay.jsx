import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import com from "../../assets/image/com.png";
import "../Home/Docu/Document.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useRecoilValue } from "recoil";
import { jwtTokenState, userIdState } from "../auth/atoms"; // Import userIdState
import { useNavigate } from "react-router-dom"; // Import useNavigate

function CategoryPay() {
  const jwtToken = useRecoilValue(jwtTokenState);
  const userId = useRecoilValue(userIdState); // Get userId
  const [categoryData, setCategoryData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  useEffect(() => {
    // Check if user is authenticated
    if (!jwtToken) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      fetchUploadedImages(); // Fetch images only if authenticated
    }
  }, [jwtToken, navigate]); // Include navigate in dependency array

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
    setSelectedFolder(expandedCategory === index ? null : index);
  };

  const handleDownload = async () => {
    // Assume `isPaidUser` is stored in sessionStorage or fetched from an API
    const isPaidUser = JSON.parse(sessionStorage.getItem("isPaidUser")); // Get isPaidUser state

    if (!isPaidUser) {
      navigate("/package"); // Redirect to package page if not a paid user
      return;
    }

    if (selectedFolder !== null) {
      try {
        const folder = categoryData[selectedFolder];
        const zipFileName = `${folder.folderName}.zip`; // Name for the zip file
        const zipFileRef = ref(
          storage,
          `TSL-templates-zip-files/${zipFileName}`
        );
        const zipFileURL = await getDownloadURL(zipFileRef); // Get the download URL

        const link = document.createElement("a");
        link.href = zipFileURL;
        link.setAttribute("download", zipFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading zip file:", error);
      }
    }
  };

  const fetchUploadedImages = async () => {
    try {
      const subCategoriesRef = ref(storage, "SubCategories");
      const subCategoryItems = await listAll(subCategoriesRef);

      const folderNames = subCategoryItems.prefixes.map(
        (folderRef) => folderRef.name
      );

      const categoryPromises = folderNames.map(async (folderName) => {
        const folderRef = ref(storage, `SubCategories/${folderName}`);
        const folderItems = await listAll(folderRef);
        return {
          folderName,
          subDocuments: folderItems.items.map((item) => item.name),
        };
      });

      const categoryData = await Promise.all(categoryPromises);
      setCategoryData(categoryData);
    } catch (error) {
      console.error("Error fetching folder names:", error);
    }
  };

  const truncateFileName = (fileName) => {
    const words = fileName.split(" ");
    return words.length > 3 ? `${words.slice(0, 3).join(" ")}...` : fileName;
  };

  return (
    <div className="card-container1">
      <div className="card-container">
        <div>
          <h3>
            Whatever Business <span>or </span>Legal Document You Need,
            <span> We Have a Template </span> for You.
          </h3>
          <p>
            Streamline Your Processes with Our Comprehensive Collection of
            Customizable Templates.
          </p>
        </div>
        {categoryData.slice(0, 24).map((item, index) => (
          <div key={index} className="card">
            <img
              src={com}
              alt="icon"
              style={{ marginRight: "20px", width: "35px" }}
            />
            <h4>{item.folderName}</h4>
            <div className="chevron-icon" onClick={() => toggleCategory(index)}>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>

            {expandedCategory === index && (
              <div className="dropdown-options">
                {item.subDocuments.map((subDocument, subIndex) => (
                  <div key={subIndex} className="subcategory-div">
                    {truncateFileName(subDocument)}
                  </div>
                ))}
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
  );
}

export default CategoryPay;
