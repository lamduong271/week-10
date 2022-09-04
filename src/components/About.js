import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [fetchedData, setFetchedData] = useState(null);
  const { t, i18n } = useTranslation();
  const fetchApi = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const renderObj = () => {
    if (fetchedData !== null) {
      return fetchedData.map((data) => <div key={data.id}>{data.title}</div>);
    }
  };
  return <div>{renderObj()}</div>;
}
