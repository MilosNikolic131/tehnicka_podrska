import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { KOLONE } from './kolone';
import useFetch from '../useFetch';

export const TabelaOsoblja = (props) => {
    const radnici = props.radnici;
    console.log(radnici);
    const columns = useMemo(() => KOLONE, [])
    const podaci = useMemo(() => radnici, [])
    const tableInstance = useTable(
        {
            columns: columns,
            data: podaci
        }
    )


    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (<table {...getTableProps()} id="table">
        <thead >
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                            ))
                        }
                        <th>

                        </th>
                    </tr>
                ))
            }

        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })
                            }

                        </tr>

                    )
                })
            }

        </tbody>
    </table>
    )
}
export default TabelaOsoblja;
