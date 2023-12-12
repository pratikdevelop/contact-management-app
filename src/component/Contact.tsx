import ContactForm from "./ContactForm";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import { useQuery } from "react-query";
import { Alert, AlertIcon, CircularProgress, Spinner } from "@chakra-ui/react";
import { db } from "../config";

const Contacts = () => {
  // useState
  const fetchContacts =  async() => {
    try {
      return await db.collection('contacts').orderBy('createdAt', 'desc').get();
    } catch (error) {
      console.error(
        "error founded in calling api for contacts , error:",
        error
      );
    }
  };
  // Feth all contact list

  // const { data, isLoading } = useQuery("contact", fetchContacts);

  console.log(fetchContacts());

  return (
    <>
      {/* {
        isLoading ? (
          <div className="flex w-full h-[100vh] items-center justify-center">
            <CircularProgress size="200px" isIndeterminate color="blue" />{" "}
          </div>
        ) :
          data?.data.length > 0 ? (
            <div className="grid grid-cols-4 gap-8 p-12">
              {data?.data.map((_contact: any, index: number) => {
                return (
                  <div key={index}>
                    <ContactCard contactInfo={_contact} />
                  </div>
                );
              })}
            </div>
          )
          :
          (
            <div className=" m-auto w-1/2 relative">
              <Alert className="mx-auto w-52 text-xl font-bold text-red-500" variant='solid' alignItems="center" status='error'>
                <AlertIcon />
                No Contact Found, Please add contact from create contact Button
              </Alert>
            </div>
          )
      } */}
    </>
  );
};

export default Contacts;
