export default [
  {
    Header: " ",
    columns: [
      {
        Header: "First Name",
        accessor: "firstname",
      },
      {
        Header: "Last Name",
        accessor: "lastname",
      },
      {
        Header: "Middle Name",
        accessor: "middlename",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        width: 300,
        Header: "Edit",
        Cell: ({ original }) => <button>{/* {original.name} */}</button>,
      },
    ],
  },
];
