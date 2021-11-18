import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({webformatURL, user, largeImageURL}) => {
  
    return (
        <img className={styles.img} src={webformatURL} alt={user} data-image={largeImageURL} />
    );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export { ImageGalleryItem };
