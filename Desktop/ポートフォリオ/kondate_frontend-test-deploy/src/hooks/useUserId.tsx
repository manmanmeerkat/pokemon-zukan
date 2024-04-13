// useUserId.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const csrfResponse = await axios.get('http://localhost:8000/api/sanctum/csrf-cookie');
        const csrfToken = csrfResponse.data.csrfToken;

        const userResponse = await axios.get('http://localhost:8000/api/user', {
          withCredentials: true,
          headers: {
            'X-CSRF-TOKEN': csrfToken,
          },
        });
console.log('userResponse', userResponse);
        const fetchedUserId = userResponse.data.id;
        setUserId(fetchedUserId);
        console.log('fetchedUserId', fetchedUserId);
        console.log('userId', fetchedUserId); // ここでログに表示
      } catch (error) {
        console.error('ユーザー情報の取得エラー:', error);
      }
    };

    fetchUserData();
  }, []);

  return userId;
};

export default useUserId;
