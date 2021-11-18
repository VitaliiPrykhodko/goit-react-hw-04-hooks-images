import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchApi } from "./Servis/Api";
import { Loading } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    searchQuery: "",
    isLoading: false,
    largeImage: "",
    alt: ""
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchPictures();
    }
  }

  handleInput = (query) => {
    this.setState({ searchQuery: query, page: 1, pictures: [] });
  };

  filterPictures = (pictures) => {
  const array =  pictures.map(({ id, webformatURL, user, largeImageURL }) => {
      return ({ id, webformatURL, user, largeImageURL })
  })
    return array
  }

  fetchPictures = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true })
    fetchApi(searchQuery, page).then((data) => {
      if (data.length === 0) { toast.warning("Зображення не знайдено!") }
      this.setState((prevState) => ({
        pictures: [...prevState.pictures, ...this.filterPictures(data)],
      }))
    }).catch((error) => toast.error(error.message))
      .finally(() => {
        this.setState({ isLoading: false })
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
  };

  changePage = () => {
    this.setState((prevPage) => ({
      page: prevPage.page + 1,
    }));
  };

  handleLargeImage = (img, alt) => {
    this.setState({largeImage:img, alt: alt})
  }

  closeModal = () => this.setState({largeImage: '', alt: ''});

  render() {
    const { pictures, isLoading, largeImage, alt } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleInput} />
        {isLoading && <Loading />}
        {pictures.length > 0 && <ImageGallery pictures={pictures} handleLargeImage={this.handleLargeImage}/>}
        {pictures.length > 11 && <Button onClick={this.changePage} />}
        {largeImage && <Modal largeImage={largeImage} alt={alt} onClose={this.closeModal}/>}
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
}

export default App;
