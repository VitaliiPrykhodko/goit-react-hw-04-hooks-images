import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchApi } from "./Servis/Api";
import { Loading } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    function fetchPictures() {
      setIsLoading(true);
      fetchApi(searchQuery, page)
        .then((data) => {
          if (data.length === 0) {
            toast.warning("Зображення не знайдено!");
          }
          setPictures((prev) => [...prev, ...filterPictures(data)]);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => {
          setIsLoading(false);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
    if (searchQuery) {
      fetchPictures();
    }
  }, [searchQuery, page]);

  function handleInput(query) {
    setSearchQuery(query);
    setPage(1);
    setPictures([]);
  }

  function filterPictures(pictures) {
    const array = pictures.map(({ id, webformatURL, user, largeImageURL }) => {
      return { id, webformatURL, user, largeImageURL };
    });
    return array;
  }

  function changePage() {
    setPage((prev) => prev + 1);
  }

  function handleLargeImage(img, alt) {
    setLargeImage(img);
    setAlt(alt);
  }

  function closeModal() {
    setLargeImage("");
    setAlt("");
  }

  return (
    <div className="App">
      <Searchbar onSubmit={handleInput} />
      {isLoading && <Loading />}
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} handleLargeImage={handleLargeImage} />
      )}
      {pictures.length > 11 && <Button onClick={changePage} />}
      {largeImage && (
        <Modal largeImage={largeImage} alt={alt} onClose={closeModal} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default React.memo(App);
