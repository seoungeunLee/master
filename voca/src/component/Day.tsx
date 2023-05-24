import React from 'react'
import dummy from '../DB/data.json'


export default function Day() {
  // dummy.words

  const day = 1;
  const wordList = dummy.words.filter(word => (
    word.day === day
  ))
  console.log(wordList);

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        {wordList.map(word => (
        <tr key={word.id}>
          <td>{word.eng}</td>
          <td>{word.kor}</td>
        </tr>
        ))}
      </table>
    </div>
  )
}
