import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  Box,
  Avatar,
  AvatarBadge,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setContactInfo } from "../featueres/contactSlice";
import { toggleModel } from "../featueres/ToggleSice";

const ContactCard = ({ contactInfo }: any) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card
        height="72"
        border="1px solid rgba(0,0, 0,0.1)"
        shadow="2xl"
        padding="5"
      >
        <CardHeader>
          <Box className="flex flex-col  items-center gap-5">
            <Avatar>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <Box className="flex flex-col items-center gap-y-1">
              <Heading size="sm">
                {contactInfo.firstName} {contactInfo.lastName}
              </Heading>
              <span className="text-sm text-gray-500">{contactInfo.email}</span>
              <span className="text-sm text-gray-500">{contactInfo.phone}</span>
            </Box>
          </Box>
        </CardHeader>
        <CardFooter display="flex" gap="10px" flexWrap="wrap">
          <Button
            colorScheme="blue"
            title="Edit"
            leftIcon={<EditIcon />}
            onClick={() => {
              dispatch(setContactInfo(contactInfo));
              dispatch(toggleModel());
            }}
          />
          <Button title="Delete" leftIcon={<DeleteIcon />} />
        </CardFooter>
      </Card>
    </>
  );
};

export default ContactCard;
