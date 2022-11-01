import React from 'react'

// Import Hooks
import  { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';

// Import Components

// Import CSS
import styles from './Dashboard.module.css'

const Dashboard = () => {
  
  const [tag, setTag] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
       <h1>Histórias compartilhadas recentemente</h1>

    </div>
  )
}

export default Dashboard