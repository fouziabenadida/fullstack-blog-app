import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1704165873660-884ac0494138?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          harum tenetur pariatur perferendis, recusandae magnam odit, deserunt
          obcaecati quisquam temporibus ducimus consequuntur rem molestiae iure,
          asperiores corrupti autem eligendi totam enim. Tempore commodi maxime
          ipsum repellendus placeat, provident voluptatem vitae similique
          exercitationem eos nihil excepturi veniam voluptate molestias minima
          minus officiis ducimus. Placeat optio porro nemo debitis, quibusdam
          ratione inventore, magni dolores delectus eaque rem itaque soluta
          veritatis laudantium assumenda deleniti ducimus eligendi dolor nisi?
          Laborum ducimus ab perspiciatis saepe!
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          officia molestiae alias dolores libero accusamus cumque iste!
          Officiis, harum sit!
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
