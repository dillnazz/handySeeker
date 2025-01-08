import { useState } from 'react';
import './reviewComponent.scss';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    { id: 1, title: "Best site I’ve ever been on", text: "Very knowledgeable about any question, and they answer within minutes.", author: "Shirley", likes: 10 },
    { id: 2, title: "Great service", text: "I had a complicated question and a real lawyer replied within 2 minutes.", author: "Kristen", likes: 7 },
    { id: 3, title: "A valuable asset to my business", text: "The appraisers at JustAnswer are professional, friendly, and very knowledgeable.", author: "Rich", likes: 5 },
    { id: 4, title: "Can save you a lot of money and trouble", text: "We were able to fix the problem with little fuss. Definitely worth starting with JustAnswer.", author: "Jennifer", likes: 8 },
    { id: 5, title: "I talked to a live person", text: "Got me on the road within a few minutes. I will definitely use this service again.", author: "Robin", likes: 12 },
    { id: 6, title: "I talked to a live person", text: "Got me on the road within a few minutes. I will definitely use this service again.", author: "Robin", likes: 12 }
  ]);

  const [newReview, setNewReview] = useState({ title: '', text: '', author: '' });

  // Функция добавления нового отзыва
  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.title && newReview.text && newReview.author) {
      setReviews([...reviews, { ...newReview, id: Date.now(), likes: 0 }]);
      setNewReview({ title: '', text: '', author: '' });
    }
  };

  // Функция для увеличения лайков
  const handleLike = (id) => {
    setReviews(reviews.map((review) =>
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    ));
  };

  return (
    <div className="review-container">
    <div className="reviewInput">
      <h2>Мы помогаем людям находить проверенных специалистов</h2>
        <form onSubmit={handleAddReview} className="review-form">
          <h3>Оставьте свой отзыв</h3>
          {/* <input
            type="text"
            placeholder="Заголовок отзыва"
            value={newReview.title}
            onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
            required
          /> */}
          <textarea
            placeholder="Ваш отзыв"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Ваше имя"
            value={newReview.author}
            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
            required
          />
          <button type="submit">Добавить отзыв</button>
        </form>
    </div>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <span onClick={() => handleLike(review.id)} className="like-button">❤️ {review.likes}</span>
            <h3>{review.title}</h3>
            <p>{review.text}</p>
            <p className="author">— {review.author}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ReviewComponent;
