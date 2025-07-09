import React, { useState } from "react";
import "./booksky.css";
export default function Bookstore() {
  const [showInput, setShowInput] = useState(false);
  const popup = () => {
    setShowInput(true);
  }
  const [books, setBooks] = useState([
    {
      title: "The Life",
      author: "God",
      desc: "The life of humans can be vary by a person and perspectives, each and every person has a different focusing and suitions in a day to day life",
    }, 
  ]);
  const [form, setForm] = useState({ title: "", author: "", desc: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.author && form.desc) {
      setBooks([...books, form]);
      setForm({ title: "", author: "", desc: "" });
      setShowInput(false);
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };


  return (
    <div className="bookstore-container">
      <header className="bookstore-header">
        <h1>BOOKSTORE</h1>
        <nav className="bookstore-nav">
          <ul className="bookstore-nav-links">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/books">Books</a>
            <a href="/login">Login</a>
          </ul>
        </nav>
      </header>
      <main className="bookstore-main">
        <section className="bookstore-section">
          <div className="overlay" style={{ display: showInput ? "flex" : "none" }}>
            <form className="inputbox" onSubmit={handleSubmit}>
              <label>TITLE
                <input
                  type="text"
                  placeholder="Enter Book Title"
                  value={form.title}
                  onChange={handleChange}
                  name="title"
                /></label>
              <label>AUTHOR
                <input
                  type="text"
                  placeholder="Enter Book author"
                  value={form.author}
                  onChange={handleChange}
                  name="author"
                /></label>
              <label>DESCRIPTION
                <textarea
                  placeholder="Enter Book desc"
                  value={form.desc}
                  onChange={handleChange}
                  name="desc"
                /></label>
              <div className="inputbtn">
                <button className="attach" type="submit">ADD</button>
                <button className="cancel" type="button" onClick={() => setShowInput(false)}>CANCEL</button>
              </div>
            </form>
          </div>
          <div className="Addbtn" onClick={popup}>+</div>
          {books.map((book, index) => (
            <div className="eachbook" key={index}>
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
              <p>{book.desc}</p>
              <button className="deletebtn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
