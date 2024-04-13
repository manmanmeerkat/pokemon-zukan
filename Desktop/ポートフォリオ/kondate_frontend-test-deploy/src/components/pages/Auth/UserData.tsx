import axios from "axios";
import { useEffect, useState } from "react";
import useUserId from "../../../hooks/useUserId";

interface UserData {
  id: number;
  name: string;
}

export const GetUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null); // ユーザー情報を格納するステート
  const userId = useUserId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const response = await axios.get<UserData>(`http://localhost:8000/api/user/${userId}`);
          setUserData(response.data);
        }
        console.log("userData", userData);
      } catch (error) {
        console.error('ユーザー情報の取得エラー:', error);
      }
    };

    fetchData();
  }, [userId]); // userIdが変更された時だけ再実行するように

  return {
    userData
  };
};
