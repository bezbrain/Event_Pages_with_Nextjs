import EventItem from "./eventItem";

import styles from "./event-list.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((each, i) => (
        <EventItem
          key={i}
          id={each.id}
          title={each.title}
          location={each.location}
          date={each.date}
          image={each.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
