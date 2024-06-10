"use client";
import Alert from "@/components/Alert";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import api from './api/axiosConfig'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


export default function Home() {
  const [homepage, setHomepage] = useState();
  const getHomepage = async () => {
    try{
      const response = await api.get("http://localhost:8080/api/homepage");
      console.log(response.data);
      setHomepage(response.data);
      
    }catch(err){
      console.log(err);
    } 
  }

  useEffect(() => {
    getHomepage();
  })

  
  return (
    <div>
    <NavBar />
    <Banner header = "hello nhat"/>
    <Alert text = "hello nhat again" />
    <p>whatever</p>
    </div>
  );
}
