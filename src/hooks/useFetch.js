import { useEffect, useState } from "react";

export const useFetch = (promise, dependencyList = []) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState("ide");

  useEffect(() => {
    queryData();
  }, dependencyList);

  const queryData = async () => {
    try {
      setLoading(true);
      setStatus("pending");
      const res = await promise();

      setData(res);
      setStatus("success");
    } catch (err) {
      setError(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    data,
    error,
    status,
  };
};
