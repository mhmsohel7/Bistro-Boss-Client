import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";

//React Tab import with css file
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  //initially tabIndex er value 0 hobe.
  const [tabIndex, setTabIndex] = useState(0);

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
