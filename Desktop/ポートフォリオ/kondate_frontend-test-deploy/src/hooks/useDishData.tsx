import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import useUserId from "./useUserId";

interface Dishes {
  id: number;
  name: string;
  genre_id: number;
  category_id: number;
  description: string;
  reference_url: string;
}

interface DishDataResponse {
  dishes: Dishes[];
}

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const useDishData = () => {
  const [dishData, setDishData] = useState<DishDataResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const userId = useUserId();

  const getDish = useCallback(() => {
    if (userId) {
      api.get<DishDataResponse>(`/user/${userId}`)
        .then((response: AxiosResponse<DishDataResponse>) => {
          const dishes: Dishes[] = response.data.dishes;
          setDishData({ dishes });
        })
        .catch((error) => console.error("ユーザー情報の取得エラー:", error))
        .finally(() => setLoading(false));
    }
  }, [userId]);  // userIdが変更された時だけ再実行するように

  useEffect(() => {
    getDish();
  }, [getDish]);

  return { loading, dishData, getDish };
};
