import validateSchema from "../Schema/index";
import { useDispatch, useSelector } from "react-redux";
import { toggleModel } from "../featueres/ToggleSice";
import { Radio, RadioGroup, Stack, UseToastOptions } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { RootState } from "../store";
import { ContactInfo, setContactInfo } from "../featueres/contactSlice";
import { useMutation } from "react-query";

const CreateContact = async (data: {
  values: ContactInfo;
  id: number;
}): Promise<any> => {
  if (data.id) {
    return axios.put(`http://localhost:3030/contacts/${data.id}`, data.values);
  }
  return axios.post("http://localhost:3030/contacts", data.values);
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  // Get Store Value
  const { toggle, contact }: any = useSelector((state: RootState) => state);
  const { mutate } = useMutation(CreateContact, {
    onSuccess: () => cancel("contact created successfully.", "success"),
    onError: () => cancel("error in contact creation.", "error"),
  });
  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
      isActive: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      mutate({ values, id: contact.id });
    },
  });

  if (Object.keys(contact).length > 0) {
    values.email = contact.email;
    values.firstName = contact.firstName;
    values.lastName = contact.lastName;
    values.phone = contact.phone;
    values.isActive = contact.isActive;
  }

  const cancel = (
    title: string | null = null,
    status: UseToastOptions["status"] | null = null
  ) => {
    if (title && status) {
      toast({ title, status, isClosable: true });
    }
    dispatch(toggleModel());
    dispatch(setContactInfo({}));
  };
  return (
    <>
      <Modal isOpen={toggle.isOpen} onClose={cancel}>
        <ModalOverlay />
        <ModalContent width="90rem">
          <form method="post" onSubmit={handleSubmit}>
            <ModalHeader>Contact Form </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="space-y-6">
              <FormControl className="flex items-center">
                <FormLabel className="text-sm font-bold w-20 ">
                  First name {values.firstName}
                </FormLabel>
                <Input
                  name="firstName"
                  isInvalid={errors.firstName ? true : false}
                  variant="outline"
                  onChange={handleChange}
                  value={values.firstName}
                  placeholder="First name"
                />
              </FormControl>

              <FormControl className="flex items-center" mt={4}>
                <FormLabel className="text-sm font-bold w-20 ">
                  Last name
                </FormLabel>
                <Input
                  name="lastName"
                  isInvalid={errors.lastName ? true : false}
                  variant="outline"
                  onChange={handleChange}
                  value={values.lastName}
                  placeholder="Last name"
                />
              </FormControl>

              <FormControl className="flex items-center" mt={4}>
                <FormLabel className="text-sm font-bold w-20 ">
                  {" "}
                  user email{" "}
                </FormLabel>
                <Input
                  name="email"
                  isInvalid={errors.email ? true : false}
                  variant="outline"
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  placeholder="email address"
                />
              </FormControl>
              <FormControl className="flex items-center" mt={4}>
                <FormLabel className="text-sm font-bold w-20 ">phone</FormLabel>
                <Input
                  name="phone"
                  isInvalid={errors.phone ? true : false}
                  variant="outline"
                  onChange={handleChange}
                  value={values.phone}
                  type="number"
                  placeholder="phone number"
                />
              </FormControl>
              <FormControl mt={4} className="flex items-center">
                <FormLabel className="text-sm font-bold w-20">
                  {" "}
                  status:{" "}
                </FormLabel>
                <RadioGroup
                  onChange={(e: any) => {
                    values.isActive = e;
                  }}
                  value={values.isActive}
                >
                  <Stack direction="row">
                    <Radio value="true">Active </Radio>
                    <Radio value="false">inActive </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </ModalBody>
            <ModalFooter className="border-t-2 mt-5 bg-slate-300">
              <Button color="gray" mr={3} onClick={() => cancel(null, null)}>
                Close
              </Button>
              <Button
                variant="solid"
                type="submit"
                colorScheme="blue"
                color="blue"
              >
                {" "}
                {Object.keys(contact).length > 0 ? "Edit" : "Create"} contact
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;
