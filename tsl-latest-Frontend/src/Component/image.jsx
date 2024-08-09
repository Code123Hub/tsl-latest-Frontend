// src/App.js
import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';






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

  
  

const App = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [docUrls, setDocUrls] = useState([]);
  const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

  useEffect(() => {
    const fetchImages = async () => {
      const imageRefs = [
        ref(storage, "images/image-1.png"),
        ref(storage, "images/image-2.png"),
        ref(storage, "images/image-3.png"),
        ref(storage, "images/image-4.png"),
      ];

      const urls = await Promise.all(
        imageRefs.map((ref) => getDownloadURL(ref))
      );
      setImageUrls(urls);
    };
    const ImageCard = ({ imageUrl, imageName }) => {
        return (
          <div className="card">
            <img src={imageUrl} alt={imageName} />
            <p>{imageName}</p>
          </div>
        );
      };
    const fetchDocs = async () => {
      const docRefs = [
        ref(storage, "Templates/Document-1.DOCX"),
        ref(storage, "Templates/Document-2.DOCX"),
        ref(storage, "Templates/Document-3.DOCX"),
        ref(storage, "Templates/Document-4.DOCX"),
      ];

      const urls = await Promise.all(docRefs.map((ref) => getDownloadURL(ref)));
      setDocUrls(urls);
    };

    fetchImages();
    fetchDocs();
  }, []);

  // Array of image names
  const imageNames = [
    "Image 1",
    "Image 2",
    "Image 3",
    "Image 4",
  ];
  

  return (
    <div>
      <h1>Images</h1>
      <div className="image-cards">
        {imageUrls.map((url, index) => (
          <ImageCard key={index} imageUrl={url} imageName={imageNames[index]} />
        ))}
      </div>

      <h1>Download Documents</h1>
      <div className="download-links">
        {docUrls.map((url, index) => (
          <DownloadLink
            key={index}
            fileUrl={url}
            fileName={`Document-${index + 1}.DOCX`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
