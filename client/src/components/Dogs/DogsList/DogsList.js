import  {useState, useEffect} from 'react'
import Dog from "../Dog/Dog.js"

function DogsList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('/api/dogs')
      .then(response => response.json())
      .then(data => setDogs(data));
  }, []);


  return (
    <div>
      {dogs
        .map(dog => {
        return (
          <Dog key={dog.id} dog={dog} />
        );
      })}
    </div>
  )
}

export default DogsList