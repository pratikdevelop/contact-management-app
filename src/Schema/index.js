import * as Yup from "yup";
const  validateSchema = Yup.object().shape({
    firstName: Yup.string().required("Please Enter The First Name"),
    lastName: Yup.string().required('Please Enter The Last Name'),
    email: Yup.string().email("Please Enter a Valid Email").required("Please Enter The Email"),
    isActive: Yup.boolean().required("Please Choose Status ").default("true"),
    phone: Yup.number().required("please Enter Your Phone Number")
});

export default validateSchema;
