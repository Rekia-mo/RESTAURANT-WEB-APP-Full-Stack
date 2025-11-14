import React from 'react';
// import data from "../";
import { DataTable } from "@/admin/components/data-table";

const NavMenu = () => {
  return (
    <div>
      <DataTable data={
        [
          {
            "id": 1,
            "header": "Cover page",
            "type": "Cover page",
            "status": "In Process",
            "target": "18",
            "limit": "5",
            "reviewer": "Eddie Lake"
          },
          {
            "id": 2,
            "header": "Table of contents",
            "type": "Table of contents",
            "status": "Done",
            "target": "29",
            "limit": "24",
            "reviewer": "Eddie Lake"
          }
        ]
      } />
    </div>
  )
}

export default NavMenu