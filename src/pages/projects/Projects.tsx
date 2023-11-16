import { useState } from "react";

import "./Projects.scss"
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";


const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];







const Projects = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <div className="projects">
            <div className="info">
                <h1>Projects</h1>
                <button onClick={()=>setOpen(true)}>Add New Projects</button>
            </div>
            <DataTable slug="projects" columns={columns} rows={products}/>
            {open && <Add slug="project" columns={columns} setOpen={setOpen}/>}
        </div>
     );
}
 
export default Projects;