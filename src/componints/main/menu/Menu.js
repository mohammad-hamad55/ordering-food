import React, { useState, useEffect, useCallback } from "react";
import styles from "./Menu.module.css";
import Item from "./Item";
import Backdrop from "../../UI/Backdrop";
import ReactDom from "react-dom";

const Menu = (props) => {
  const [myList, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasErorr,setErorr]=useState(null)

  const fetchData = async () => {
    setLoading(true);
    try{const responce = await fetch(
      "some url"
    );
    if(!responce.ok){
      throw new Error("somthing went rong");
    }
    const data = await responce.json();
   
    const meals = [];
    let counter = 1;
    for (const id in data) {
      const myMeal = {
        id: counter,
        name: data[id].name,
        des: data[id].des,
        price: data[id].price,
      };
      meals.push(myMeal);
      counter = counter + 1;
    }
    setList(meals);
  }
    catch(erorr){
      setErorr(erorr.message)
    }
    

    
    setLoading(false)
  };

  const fetchMyData = useCallback(fetchData, []);

  useEffect(() => {
    fetchMyData();
  }, [fetchMyData]);

  // console.log("dfsfs", myList);

  let myContent;
 if(hasErorr){
    myContent=<p>{hasErorr}</p>
  }else{
    myContent= myList.map((el) => {
      return (
        <Item
          price={el.price}
          des={el.des}
          key={el.id}
          id={el.id}
          name={el.name}
        ></Item>
      );
    });
  }
 

  return (
    <div className={styles.contener}>
      {ReactDom.createPortal(<Backdrop></Backdrop>, document.body)}

      {isLoading ? <p>lodaing...</p>:myContent}
     
      
    </div>
  );
};

export default Menu;
