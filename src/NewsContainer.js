import React from "react";

const NewsContainer = () => {
  const newsArticles = [
    {
      id: 1,
      title: "NYC Housing Plan: 'City of Yes' Initiative",
      summary:
        "The 'City of Yes' plan aims to construct 80,000 new housing units over 15 years, with zoning changes and a $5 billion investment to address the housing crisis.",
    },
    {
      id: 2,
      title: "Welfare Assistance Expansion in NYC",
      summary:
        "Welfare assistance has reached its highest level in two decades, with 787,400 residents receiving aid. Mayor Adams allocated $2.46 billion, a 19.1% increase from the last fiscal year.",
    },
    {
      id: 3,
      title: "Migrant Shelter Adjustments in NYC",
      summary:
        "NYC plans to close several emergency migrant shelters by January 15, 2025, amidst decreasing arrivals and federal policy changes, raising concerns among advocacy groups.",
    },
    {
      id: 4,
      title: "ACCESS NYC: A Resource for Assistance",
      summary:
        "ACCESS NYC provides information on over 30 assistance programs, including SNAP, Medicaid, and HEAP, helping residents apply for essential benefits online.",
    },
    {
      id: 5,
      title: "'Money in Your Pocket' Initiative Launched",
      summary:
        "Mayor Adams' initiative trains staff and students to assist underserved communities in accessing benefits, targeting NYCHA buildings and low-income neighborhoods.",
    },
  ];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Latest News</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {newsArticles.map((article) => (
          <li key={article.id} style={{ marginBottom: "10px" }}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsContainer;