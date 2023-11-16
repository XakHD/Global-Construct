import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Clients.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field:"img", headerName:"Avatar", width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];


const Clients = () => {
  const [open, setOpen] = useState(false)

  const { isLoading, data } = useQuery({
    queryKey: ["allclients"],
    queryFn: () =>
      fetch("http://localhost:8800/api/clients").then(
        (res) => res.json(),
      ),
  })


    return ( 
        <div className="clients">
            <div className="info">
                <h1>Clients</h1>
                <button onClick={()=>setOpen(true)}>Add New Client</button>
            </div>
            {isLoading ? (
               "Loading..." 
               ) : ( <DataTable slug="clients" columns={columns} rows={data}/>
              )}
            {open && <Add slug="client" columns={columns} setOpen={setOpen}/>}
        </div>
     );
}
 
export default Clients;