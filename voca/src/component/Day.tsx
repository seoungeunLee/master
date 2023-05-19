import React from 'react'
import dummy from '../DB/data.json'


export default function Day() {
  // dummy.words
  return (
    <div>
      <table>
        {dummy.words.map(word => (
        <tr>
          <td>
            {word.eng}
          </td>
          <td>
            {word.kor}
          </td>
        </tr>
        ))}
      </table>
    </div>
  )
}
