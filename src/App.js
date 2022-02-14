import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Student from './components/Student';

function App() {
  const [data,setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
      const dataAxios = async () => {
          const res = await axios('https://www.hatchways.io/api/assessment/students');
          setData(res.data.students);
      };
      dataAxios();
  },[]); 

  const handleChange =(e) => {
    setSearchKeyword(e.target.value.toLowerCase());
    console.log(searchKeyword);
  }

  const getName = (firstName,lastName) => {
    const text = firstName+' '+lastName;
    return text.toLocaleLowerCase();
  }

  return (
    <div className="container">
      <div className="App">
        <input type="text" className="searchBox" onChange={handleChange} placeholder="Search by name" />
        <ul>
        {
          data.filter( (student) => {
            if (searchKeyword === "" ){
                return student
            }
            else if((getName(student.firstName,student.lastName)).includes(searchKeyword)){
                return student
            }
        
            }).map( (student,key) => {
            return(
              <Student student={student} />
            );
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;

