import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import '../styles/Dashboard.css'
import Header from './Header'

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res)=>{
        setData(res.data.results);
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
  },[page])
  return (
    <div className='dashboard-main' >
        <Header page={page} setPage={setPage}/>
        {
          data.map((data)=>
          (
            <Card
            key={data.id}
            image={data.image}
            name={data.name}
            status={data.status}
            origin={data.origin}
             />
          ))
        }
    </div>
  )
}

export default Dashboard
