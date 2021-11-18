import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, handleLargeImage }) => {
  return (
    <ul className={styles.gallery}>
      {pictures.map(({ id, webformatURL, user, largeImageURL }) => {
        return (
          <li
            onClick={() => handleLargeImage(largeImageURL, user)}
            key={id}
            className={styles.galleryItem}
          >
            <ImageGalleryItem
              webformatURL={webformatURL}
              user={user}
              largeImageURL={largeImageURL}
              handleLargeImage={handleLargeImage}
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.node,
    })
  ),
  handleLargeImage: PropTypes.func.isRequired,
};

export { ImageGallery };
