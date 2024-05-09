import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center md:justify-center">
        <div className="h-screen flex items-center justify-center mx-14" >
          <Link to="/create" >
          <Card name="Create Entity" 
          imgadd="https://img.freepik.com/premium-photo/3d-cartoon-boy-avatar_113255-5410.jpg"
          linkadd=""
          />
          </Link>
        </div>
        <div className="h-screen flex items-center justify-center">
          <Link to="/detail" >
          <Card name="Details" 
          imgadd="https://static.vecteezy.com/system/resources/previews/004/853/320/non_2x/book-read-library-study-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
          />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
