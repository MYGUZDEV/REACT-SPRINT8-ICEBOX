import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function UserFind() {
  const [usersId, setUserId] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/usersId')
          .then(({data}) => { 
              console.log(data);
              setUserId(JSON.stringify(data));
              
              //console.log('usersId', usersId);
            })
          .catch(e=>console.log(e))
      },[])
  return (
        <>
        <form action="/api/users/" method="GET" enctype="multipart/form-data" class='user-form'>
            <select>
                <option value="1">USUARIO NRO.  1</option> 
                <option value="2">USUARIO NRO.  2</option> 
                <option value="3">USUARIO NRO.  3</option>
                <option value="4">USUARIO NRO.  4</option>
                <option value="5">USUARIO NRO.  5</option>
                <option value="6">USUARIO NRO.  6</option>
                <option value="7">USUARIO NRO.  7</option>
                <option value="8">USUARIO NRO.  8</option> 
                <option value="9">USUARIO NRO.  9</option> 
                <option value="10">USUARIO NRO. 10</option> 
                <option value="11">USUARIO NRO. 11</option> 
                <option value="12">USUARIO NRO. 12</option> 
                <option value="13">USUARIO NRO. 13</option> 
                <option value="14">USUARIO NRO. 14</option> 
                <option value="15">USUARIO NRO. 15</option> 
                <option value="16">USUARIO NRO. 16</option> 
                <option value="17">USUARIO NRO. 17</option> 
                <option value="18">USUARIO NRO. 18</option> 
                <option value="19">USUARIO NRO. 19</option> 
                <option value="20">USUARIO NRO. 20</option> 
                <option value="21">USUARIO NRO. 21</option> 
                <option value="22">USUARIO NRO. 22</option> 
                <option value="23">USUARIO NRO. 23</option> 
                <option value="24">USUARIO NRO. 24</option> 
            </select>
            
            <button type="submit" class='userFind'> ELEGIR USUARIO PARA DETALLES </button>
            
        </form>
        </>
  )
};