import React from 'react'

function ErrorHero({heroName}) {
    if(heroName === "Joker"){
        throw new Error("Not found the data")
    }
  return (
    <div>
        {heroName}
    </div>
  )
}

export default ErrorHero