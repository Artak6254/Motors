import { useState, useEffect } from 'react';
import { BlogContent } from '../components/BlogContent';
import axios from '../axios';

export function BlogPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [blogsLabel, setBlogsLabel] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    handleGetBlog();
  }, [currentLanguage])

  const handleGetBlog = async () => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));

    const responseBlogsLabel = await axios.get(`blogs_label?lang=${currentLanguage}`);
    setBlogsLabel(responseBlogsLabel.data[0]);

    const responseBlogs = await axios.get(`blogs?lang=${currentLanguage}`);
    setBlogs(responseBlogs.data);
  }

  return (
    <div>
      <BlogContent blogsLabel={blogsLabel} blogs={blogs} />
    </div>
  );
}