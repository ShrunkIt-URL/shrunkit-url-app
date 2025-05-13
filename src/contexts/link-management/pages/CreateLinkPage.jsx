import React, { useState, useEffect } from "react";
import { createLink, getAllLinks } from "../services/linkService";

export const CreateLinkPage = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    await createLink(url);
    setUrl("");
    fetchLinks();
  };

  const fetchLinks = async () => {
    const res = await getAllLinks();
    setLinks(res.data);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          style={{
            padding: "0.5rem",
            width: "60%",
            border: "1px solid #6d5e8e",
            borderRadius: "8px",
            marginRight: "1rem",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#6d5e8e",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Shorten
        </button>
      </form>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <strong>{link.shortCode}</strong>: {link.originalUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};
