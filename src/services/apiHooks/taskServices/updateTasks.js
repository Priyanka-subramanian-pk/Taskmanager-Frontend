import { useState } from 'react';
import axiosInstance from '../../../api/axios/Axios';

const useUpdateTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  console.log("hiiiiiiiiiiiiiii")
  const updateTask = async (url, updatedData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.put(url, updatedData);
        console.log("response",response)
      // Assuming the response contains the updated task
      setSuccess(true);
      return response?.data?.task;

     
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { updateTask, loading, error, success };
};

export default useUpdateTask;
