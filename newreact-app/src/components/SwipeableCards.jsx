import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './SwipeableCards.css';

const cards = [
  {
    id: 1,
    image: '/person.jpeg',
    title: 'Swagat Kumar',
    description: `<a href="tel:+1987654321">+1987654321</a>
    <br><a href="mailto:xyz@example.com">xyz@example.com</a><br>Blood Group: O+`,
  },
  {
    id: 2,
    image: '/person.jpeg',
    title: 'Amit Ranjan',
    description: `<a href="tel:+1987654321">+1987654321</a>
    <br><a href="mailto:xyz@example.com">xyz@example.com</a><br>Blood Group: A`,
  },
  {
    id: 3,
    image: '/person.jpeg',
    title: 'Harsh Verma',
    description: `<a href="tel:+1987654321">+1987654321</a> 
    <br><a href="mailto:xyz@example.com">xyz@example.com</a><br>Blood Group: B`,
  },
];

const SwipeableCards = () => {
  const containerRef = useRef(null);

  const handlers = useSwipeable({
    onSwiped: () => {
      if (containerRef.current) {
        const children = Array.from(containerRef.current.children);
        const scrollLeft = containerRef.current.scrollLeft;
        const cardWidth = children[0].offsetWidth + parseInt(getComputedStyle(children[0]).marginRight, 10);
        const centerCardIndex = Math.round(scrollLeft / cardWidth);
        const centerCard = children[centerCardIndex];
        containerRef.current.scrollTo({
          left: centerCard.offsetLeft - (containerRef.current.offsetWidth / 2 - centerCard.offsetWidth / 2),
          behavior: 'smooth',
        });
      }
    },
  });

  return (
    <div className="swipeable-cards" {...handlers} ref={containerRef}>
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SwipeableCards;
