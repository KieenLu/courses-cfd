import { localStorageCache, sessionStorageCache } from "@/utils/cache";
import { useEffect, useRef, useState } from "react";

export const useQuery = (options = {}) => {
  const {
    queryFn,
    queryKey,
    cacheTime,
    enabled = true,
    storeDriver = "localStorage",
    dependencyList = [],
  } = options;
  const fetchRef = useRef();
  const cache =
    storeDriver === "localStorage" ? localStorageCache : sessionStorageCache;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState("ide");
  useEffect(() => {
    if (typeof fetchRef.current === "boolean") {
      fetchRef.current = true;
    }
  }, dependencyList);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [queryKey, enabled].concat(...dependencyList));
  const fetchData = async () => {
    try {
      setLoading(true);
      setStatus("pending");
      let res;
      if (queryKey && !fetchRef.current) {
        res = cache.get(queryKey);
      }
      if (!res) {
        res = await queryFn();
      }
      setStatus("success");
      setLoading(false);
      setData(res);
      if (queryKey) {
        let expired = cacheTime;
        if (cacheTime) {
          expired += Date.now();
        }
        cache.set(queryKey, res, expired);
      }
      fetchRef.current = false;
    } catch (err) {
      setError(err);
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };
  return {
    error,
    status,
    loading,
    data,
  };
};
