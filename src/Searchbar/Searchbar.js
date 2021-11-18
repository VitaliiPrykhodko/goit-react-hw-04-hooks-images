import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";
import { FcSearch } from "react-icons/fc";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleInput = (e) => {
    this.setState({
      query: e.currentTarget.value.trim(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { query } = this.state;

    if (query === "") {
      toast.error("Enter the data in the form!")
      return
    }
    this.props.onSubmit(query);
    this.setState({ query: "" })
  };

  render() {
    const {query}=this.state
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.buttonForm}>
            <IconContext.Provider value={{ className: styles.buttonIcon }}>
              <span className={styles.buttonLabel}>
                <FcSearch />
              </span>
            </IconContext.Provider>
          </button>

          <input
            onChange={this.handleInput}
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Search images and photos"
            name="query"
            value={query}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
