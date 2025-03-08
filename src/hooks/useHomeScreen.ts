import { useEffect, useState } from 'react';
import env from '../config/env';
import BookType from '../utils/types/book';
import axios from 'axios';
import categories from '../common/categories';

const useHomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [books, setBooks] = useState<Array<BookType>>([]);

  const handleSelectedCategoryPress = (id: number) => {
    setSelectedCategory(id);
  };

  const handleGetGoogleBooks = async () => {
    const API_KEY = env.API_KEY;

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${categories[selectedCategory]}&maxResults=20&key=${API_KEY}`,
    );

    const data = response.data.items.map((item: any) => {
      return {
        id: item.id,
        bookThumbnail: item.volumeInfo.imageLinks.thumbnail,
        bookAuthor: item.volumeInfo.authors[0],
        bookTitle: item.volumeInfo.title,
        bookDescription: item.volumeInfo.description,
      };
    });

    setBooks(data);
  };

  useEffect(() => {
    handleGetGoogleBooks();
  }, [selectedCategory]);

  return {
    books,
    selectedCategory,
    handleSelectedCategoryPress,
  };
};

export default useHomeScreen;
