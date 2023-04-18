import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Repositories.css";

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/becastellani/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="Repositories1">
      <div class="p-4"></div>
      <h1>Meus repositórios do GitHub</h1>
      <div class="p-3"></div>
      <div className="Repositories2">
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Repositories;