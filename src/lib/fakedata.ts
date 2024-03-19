import { ICustomer, IProject, ITask, IUser } from "../types/type";

export const users: IUser[] = [
  {
    _id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    phone_number: "1234567890",
    username: "johndoe",
    role: "admin",
    password: "password",
    confirm_password: "password",
    father_name: "Michael Doe",
    nid_number: "1234567890123",
    birth_date: new Date("1990-01-01"),
    gender: "male",
    marital_status: "married",
    marriage_date: new Date("2015-06-15"),
    permanent_address: "123 Main St, City, Country",
    current_address: "456 Second St, City, Country",
    bank_name: "Example Bank",
    branch_name: "Main Branch",
    account_name: "John Doe",
    account_number: "9876543210",
    swift_code: "SWIFT123",
    routing_number: "123456789",
    mobile: "9876543210",
    primary_payment_options: "bank",
  },
  {
    _id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    phone_number: "9876543210",
    username: "janesmith",
    role: "manager",
    password: "password",
    confirm_password: "password",
    father_name: "David Smith",
    nid_number: "9876543210987",
    birth_date: new Date("1985-05-20"),
    gender: "female",
    marital_status: "unmarried",
    permanent_address: "789 Third St, City, Country",
    current_address: "101 Fourth St, City, Country",
    bank_name: "Sample Bank",
    branch_name: "Downtown Branch",
    account_name: "Jane Smith",
    account_number: "1234567890",
    swift_code: "SWIFTXYZ",
    routing_number: "987654321",
    mobile: "1234567890",
    primary_payment_options: "bkash",
    bkash: "0123456789",
  },
];

export const projects: IProject[] = [
  {
    _id: "384756982761",
    customer: "Abul Kalam",
    duration: "50 minutes",
    location: "Dhaka",
    project_title: "Ecommerce",
    project_value: "1000",
  },
  {
    _id: "384756982762",
    customer: "Abul karim",
    duration: "40 minutes",
    location: "Rajshahi",
    project_title: "Web Development",
    project_value: "2000",
  },
  {
    _id: "384756982763",
    customer: "Md Hasibul",
    duration: "30 minutes",
    location: "Khulna",
    project_title: "App  development",
    project_value: "1500",
  },
];

export const customers: ICustomer[] = [
  {
    _id: 1,
    first_name: "Fatima",
    last_name: "Pollard",
    email: "kota@mailinator.com",
    phone_number: "+1 (492) 223-7109",
    company_name: "Newton Pearson Plc",
    father_name: "Laith Monroe",
    nid_number: "738",
    birth_date: new Date("2005-07-02"),
    gender: "male",
    bin: "Recusandae Placeat",
    advance_balance: 700,
    permanent_address: "Adipisicing similiqu",
    current_address: "Debitis aut laborum",
  },
  {
    _id: 2,
    first_name: "Sophia",
    last_name: "Watkins",
    email: "sophia@mailinator.com",
    phone_number: "+1 (123) 456-7890",
    company_name: "Smith & Co.",
    father_name: "John Watkins",
    nid_number: "123",
    birth_date: new Date("1998-05-15"),
    gender: "female",
    bin: "Lorem Ipsum",
    advance_balance: 500,
    permanent_address: "123 Main St",
    current_address: "456 Elm St",
  },
];

export const tasks: ITask[] = [
  {
    _id: "1",
    customer: "ABC Corp",
    project: "Website Redesign",
    task: "Design landing page",
    task_date: new Date("2024-03-20T08:00:00Z"),
    task_alert_date: new Date("2024-03-19T08:00:00Z"),
    alert_type: "Email",
    note: "This task involves creating the visual design for the landing page.",
  },
  {
    _id: "2",
    customer: "XYZ Corp",
    project: "App Development",
    task: "Implement user authentication",
    task_date: new Date("2024-03-25T10:00:00Z"),
    task_alert_date: new Date("2024-03-24T10:00:00Z"),
    alert_type: "SMS",
    note: "This task involves setting up user authentication functionality using OAuth.",
  },
  {
    _id: "3",
    customer: "LMN Corp",
    project: "Marketing Campaign",
    task: "Create social media graphics",
    task_date: new Date("2024-03-22T12:00:00Z"),
    task_alert_date: new Date("2024-03-21T12:00:00Z"),
    alert_type: "Popup",
    note: "This task involves designing engaging graphics for social media platforms.",
  },
  {
    _id: "4",
    customer: "PQR Corp",
    project: "Product Launch",
    task: "Finalize product packaging",
    task_date: new Date("2024-03-18T15:00:00Z"),
    task_alert_date: new Date("2024-03-17T15:00:00Z"),
    alert_type: "Notification",
    note: "This task involves making the final decisions on product packaging design.",
  },
];

export const expenses = [
  {
    _id: "328971566",
    payment_method: "Bank",
    project: "Admin panel",
    amount: 500,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    _id: "323487587",
    payment_method: "Bkash",
    project: "Ecommerce",
    amount: 1500,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    _id: "3289715663847",
    payment_method: "Bank",
    project: "Admin panel",
    amount: 2500,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];
