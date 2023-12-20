import './App.css'
import { useSelector } from 'react-redux'

const App = () => {
  const animals = useSelector((state) => state.animals);
  console.log(animals)

  return (
    <>
      <div className='container mt-3'>
        <h2>Animals List</h2>
        <button>Create</button>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal, index) => (
              <tr key={index}>
                <td>{animal.id}</td>
                <td>{animal.name}</td>
                <td>{animal.color}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
