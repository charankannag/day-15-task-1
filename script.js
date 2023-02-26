// CREATE A TABLE ELEMENT
const headings = ['Id', 'Name', 'Email', 'age'];
const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');

const people = [
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    }
];

function renderHeading(data = []) {
   const headingNodes= [];
   for(let i = 0; i < data.length; i++) {
      const headingTag = document.createElement('td');
      const para = document.createElement('p');
      para.innerText = headings[i];
      headingTag.appendChild(para);
      headingNodes.push(headingTag)
   }
   return headingNodes;
}

function renderRow(data = {}) {
   const tableRow = document.createElement('tr');
   const values = Object.values(data);
   for(let i = 0; i < values.length; i++) {
      const tableCell = document.createElement('td');
      tableCell.innerText = values[i];
      tableRow.append(tableCell);
   }
   return tableRow;
}

function renderRows(data = []) {
   let rows = [];
   if(data.length > 0) {
     for(let i = 0; i < data.length; i++) {
        const item = renderRow(data[i]);
        rows.push(item);
     }
   }
   return rows;
}

tablehead.append(...renderHeading(headings));
table.appendChild(tablehead);
// CREATING TABLE BODY
tablebody.append(...renderRows(people));
// APPENMDING TABLE BODY
table.appendChild(tablebody);
document.body.appendChild(table);
    