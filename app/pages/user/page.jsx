import { Table } from "antd";
import React from "react";

const page = () => {
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 2,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 3,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 4,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 5,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 6,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 7,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 8,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 9,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 10,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 11,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 12,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 13,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 14,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 15,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 16,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 17,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 18,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 19,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 20,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 21,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 22,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
    {
      key: "1",
      id: 23,
      name: "Mike",
      email: "ahmad@Gmail.com",
      address: "10 Downing Street",
      price: 1234,
    },
    {
      key: "1",
      id: 24,
      name: "Arab",
      email: "raiamjad@Gmail.com",
      address: "10 Downing Street",
      price: 4500,
    },
  ];

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "Id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "Name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
    },
  ];

  return (
    <div className="py-10 px-10">
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default page;
