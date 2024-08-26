import { useState } from 'react';
import axiosInstance from '../../../api/axios/Axios';

const useAddTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const addTask = async (url, newTask) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post(url, newTask);
      
      // Assuming the response contains the newly added task
      setSuccess(true);
      return response?.data?.task;
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { addTask, loading, error, success };
};

export default useAddTask;
