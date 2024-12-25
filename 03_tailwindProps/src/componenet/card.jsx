import React from "react";

function Card(props) {

  // or
  // function Card({username}){
            <h1 className="font-bold font-mono text-xl">{props.channel}</h1>

console.log(username);

    
    return (
        <>
        <div className="w-60 my-2 h-60 rounded-xl">
          <img
            src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
            alt="Giphy"
            className="rounded-xl"
          />
          <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-xl z-10">
            {/* <h1 className="font-bold font-mono text-xl">{props.channel}</h1> */}
            <h1 className="font-bold font-mono text-xl">{username}</h1>
          </div>
        </div>
        </>
    )
}

export default Card