import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";
import { FcSearch } from "react-icons/fc";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  function handleInput(e) {
    const { value } = e.currentTarget;
    setQuery(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (query === "") {
      toast.error("Enter the data in the form!");
      return;
    }
    onSubmit(query);
    setQuery("");
  }

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.buttonForm}>
          <IconContext.Provider value={{ className: styles.buttonIcon }}>
            <span className={styles.buttonLabel}>
              <FcSearch />
            </span>
          </IconContext.Provider>
        </button>

        <input
          onChange={handleInput}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
