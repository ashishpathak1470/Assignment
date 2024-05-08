import React from "react";
import Card from "./Card";
function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <div className="h-screen flex items-center justify-center mx-14" >
          <Card name="Create Entity" 
          imgadd="https://img.freepik.com/premium-photo/3d-cartoon-boy-avatar_113255-5410.jpg"
          />
        </div>
        <div className="h-screen flex items-center justify-center">
          <Card name="Read Attributes" 
          imgadd="https://static.vecteezy.com/system/resources/previews/004/853/320/non_2x/book-read-library-study-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
