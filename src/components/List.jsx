import "../styles.css";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { first_name, age, image, id } = person;
        return (
          <article key={id}>
            <img src={image} alt={first_name} />
            <div className="name">
              <h4>{first_name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
