import React from 'react'

export default function RowTable({ title, length, rating, genres, awards}) {
  return (
    <tr>
        <th scope="row">{title}</th>
        <td>{length}</td>
        <td>{rating}</td>
        <td>
            <ul>
                {
                genres.map((elem, i) => <li key={i}>{elem}</li>)
                }
            </ul>
        </td>
        <td>{awards}</td>
    </tr>
  )
}