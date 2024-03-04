import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";

//React Tab import with css file
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  //create a categories.
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  //route er params teke "category" ta destructure kora hoise.
  const { category } = useParams();
  //indexOf() use korle, categories array er pottekta index pabo. [0,1,2, .....]
  const initialIndex = categories.indexOf(category);

  //initially tabIndex er value categories er index hobe.
  const [tabIndex, setTabIndex] = useState(initialIndex);

  // data load from custom hook "useMenu". Data gulu "menu" te destructure kora hoise.
  const [menu] = useMenu();

  //then sob data filter kore category wise neya hocche.
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>

      {/* React tab start. tobe must ekta state set korte hobe. then defaultIndex e "tabIndex" bosbe, and setTabIndex set kore dite hobe */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        {/* Tab e click korar por, Tabpanel er maddome data show hobe. */}
        {/* New arekta component make kora hoise, oi component e "props" er maddome filtering data patano hocche. */}
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
      {/* React tab end */}
    </div>
  );
};

export default Order;
