import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchAllEmployees } from '../apis/fetchAllEmployees';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import { deleteEmployee } from '../apis/deleteEmployee';
import Form from './Form';


export default function DashBoard() {


    const [rows, setRows] = useState([]);

    useEffect(() => {
        const abcd = async () => {
            const data = await fetchAllEmployees();
            setRows(data.data)
        }

        abcd();
    }, [])

    const handleEdit = (e) => {
        console.log(e.target.id)
    }

    const handleDelete = async (e) => {
        console.log(e.target.id);
        const isDeleted = await deleteEmployee();
        if (isDeleted.status) {
            const elem = document.getElementById(e.target.id).parentElement.parentElement;
            elem.style.display = "none";
        }
    }

    return (

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <div>
                <h1>Employee List</h1>
                <StyledEngineProvider injectFirst>
                    <CssVarsProvider>
                        <Form />
                    </CssVarsProvider>
                </StyledEngineProvider>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell align="right">id</TableCell>
                                <TableCell align="right">firstName</TableCell>
                                <TableCell align="right">lastName</TableCell>
                                <TableCell align="right">email</TableCell>
                                <TableCell align="right">gender</TableCell>
                                <TableCell align="right">phone</TableCell>
                                <TableCell align="right">dob</TableCell>
                                <TableCell align="right">doj</TableCell>
                                <TableCell align="right">deptId</TableCell>
                                <TableCell align="right">wstId</TableCell>
                                <TableCell align="right">roleId</TableCell>
                                <TableCell align="right">edit</TableCell>
                                <TableCell align="right">remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{row.id}</TableCell>
                                    <TableCell align="right">{row.firstName}</TableCell>
                                    <TableCell align="right">{row.lastName}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.gender}</TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                    <TableCell align="right">{row.dob}</TableCell>
                                    <TableCell align="right">{row.doj}</TableCell>
                                    <TableCell align="right">{row.deptId}</TableCell>
                                    <TableCell align="right">{row.wstId}</TableCell>
                                    <TableCell align="right">{row.roleId}</TableCell>
                                    <TableCell align="right" ><button id={row.id} onClick={(e) => handleEdit(e)} style={{ cursor: "pointer" }} >edit</button></TableCell>
                                    <TableCell align="right" ><button id={row.id} onClick={(e) => handleDelete(e)} style={{ cursor: "pointer" }}>Delete</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    );
}
