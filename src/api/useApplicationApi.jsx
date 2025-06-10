import React, { useMemo } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();
  const myPostPromise = useMemo(() => {
    return (email) =>
      axiosSecure.get(`/myPosts/${email}`).then((res) => res.data);
  }, [axiosSecure]);

  return {
    myPostPromise,
  };
};

export default useApplicationApi;
