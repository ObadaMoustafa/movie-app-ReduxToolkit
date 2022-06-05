import { useState } from "react";

const useFetch = link => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    setError(false);
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`Error (${response.status}): ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }
  async function performFetch() {
    try {
      const data = await fetchData();
      if (data.Response === "False") throw new Error(data.Error);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, performFetch };
};

export default useFetch;
