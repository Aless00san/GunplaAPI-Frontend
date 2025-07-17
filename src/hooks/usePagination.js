import { useState, useEffect } from 'react';
import { gunplaList } from '../services/GunplaService.js';

const usePagination = (pageSize = 10) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (page) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await gunplaList(page, pageSize);
      
      const result = response.data;
      
      if (!result || !result.content) {
        throw new Error('No data received');
      }
      
      setData(result.content);
      setTotalPages(result.totalPages);
      setTotalElements(result.totalElements);
      setCurrentPage(result.number); 
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, pageSize]);

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);
  const firstPage = () => goToPage(0);
  const lastPage = () => goToPage(totalPages - 1);

  return {
    data,
    currentPage,
    totalPages,
    totalElements,
    loading,
    error,
    goToPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    hasNext: currentPage < totalPages - 1,
    hasPrev: currentPage > 0,
    refresh: () => fetchData(currentPage)
  };
};

export default usePagination;