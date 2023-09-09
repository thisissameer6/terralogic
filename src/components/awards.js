import React from 'react'

function Awards() {
  const data = [
    { id: 1, description: "The Finest Fintech App Development Companies 2020 ", image: "https://terralogic.com/wp-content/uploads/2023/08/Inc5000.svg", byText: "By Inc" },
    { id: 2, description: "CMMI® Level3 maturity for India & Vietnam ", image: "https://terralogic.com/wp-content/uploads/2023/08/Inc5000.svg", byText: "By Inc" },
    { id: 4, description: "Redefining Trends of IoT Through Digital Transformation ", image: "https://terralogic.com/wp-content/uploads/2022/09/ceo-1.png", byText: "BY CEO Magazine" },
    { id: 5, description: "The Finest Fintech App Development Companies 2020", image: "https://terralogic.com/wp-content/uploads/2022/09/top-developers.png", byText: "BY TOP DEVELOPERS" },
    { id: 6, description: "CMMI® Level3 maturity for India & Vietnam", image: "https://terralogic.com/wp-content/uploads/2022/09/cmmi.png", byText: "By CMMI Level3" },
    { id: 7, description: "Most Promising Enterprise Information Security Provider ", image: "https://terralogic.com/wp-content/uploads/2022/09/cio.png", byText: "BY CIO Review" },
    { id: 8, description: "Top Mobile App Development Companies of 2020", image: "https://terralogic.com/wp-content/uploads/2022/09/top-developers-1.png", byText: "BY TOP DEVELOPERS" },
    { id: 9, description: "UX UI Design Leader Companies of 2020", image: "https://terralogic.com/wp-content/uploads/2022/09/clutch.png", byText: "BY Clucth.co" },
    { id: 10, description: "DNA Paris Design Winner Award of 2021", image: "https://terralogic.com/wp-content/uploads/2022/09/DNA-Icon.png", byText: "BY DNA PARIS DESIGN" },
    { id: 11, description: "Interface Design Europe Award Winner of 2019", image: "https://terralogic.com/wp-content/uploads/2022/09/circle.png", byText: "BY RED DOT" }



  ]

  return (
    <div className='container awards'>
      <h2>
        Awards and recognition
      </h2>
      <div className='cards'>
        {data.map(s => (
          <div key={s.id} >
            <div className='award-img'><img src={s.image} alt="s"/></div>
            <p>{s.description}</p>
            <span>⎯⎯ {s.byText}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Awards