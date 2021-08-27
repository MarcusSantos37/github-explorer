import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/issues.scss";

export function RepositoryList() {
  const [issues, setIssues] = useState([]);

  console.log("issues", issues);

  useEffect(() => {
    fetch("https://github.com/facebook/react/issues")
      .then((response) => response.json())
      .then((data) => setIssues(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {issues.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
