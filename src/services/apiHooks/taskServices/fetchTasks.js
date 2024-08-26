import { useState, useEffect } from 'react';
import axiosInstance from '../../../api/axios/Axios';
import axios from 'axios';

const useFetchTasks = (url) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   console.log("taskksssssss",tasks)

  useEffect(() => {
    const fetchTasks = async () => {
       
      try {
        const response = await axiosInstance.get(url);

        setTasks(response?.data?.tasks);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [url]);

  return { tasks,setTasks, loading, error };
};

export default useFetchTasks;
