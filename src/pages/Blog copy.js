// src/pages/Blog.js
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Blog = () => {
  const { language, toggleLanguage, languages } = useContext(LanguageContext);

  return (
    <div className="container mx-auto px-4 py-8 font-['Outfit']">
      <h1 className="gradient-text text-4xl font-bold mb-6">
        {languages[language].blog}
      </h1>
      <button onClick={toggleLanguage} className="zuzzuu-button-outline mb-6">
        {languages[language].switchLanguage}
      </button>
      <div className="prose lg:prose-xl">
        <p className="text-gray-700">
          {language === "en"
            ? "Welcome to our blog page. Here you'll find the latest updates and insights."
            : "Blog sayfamıza hoş geldiniz. Burada en son güncellemeleri ve içgörüleri bulacaksınız."}
        </p>
      </div>
    </div>
  );
};

export default Blog;
