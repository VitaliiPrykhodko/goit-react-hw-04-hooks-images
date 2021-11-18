import { Component } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";


class Modal extends Component {
    static propTypes= {
        onClose: PropTypes.func.isRequired,
        largeImage: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, alt } = this.props;
    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
  }
}

export { Modal };
