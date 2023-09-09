import React from 'react'

function Blog() {
  return (
    <div className='container blogs-section'>
      <div className='head'>
        <div>
        <h3>Recent Blogs</h3>
        <h2>New on our blog </h2>

        </div>
        <button className='button'>View More</button>
       
      </div>
      <div className='blogs'>
        <div>
          <img
            src="https://terralogic.com/wp-content/uploads/2023/06/177872176-_2_-1024x440.webp"
            alt='#'
          />
          <h3> 7 Mistakes to Avoid while Choosing a Managed IT service provider </h3>
          <a href='/'>Read More</a>
        </div>

        <div>
          <img
            src="https://terralogic.com/wp-content/uploads/2023/07/Ai-security-post-2560.1120-1024x450.webp"
            alt='#'
          />
          <h3> Guarding Your Data: How Artificial Intelligence Bolsters Data Security </h3>
          <a href='/'>Read More</a>
        </div>

        <div>
          <img src="https://terralogic.com/wp-content/uploads/2023/07/What-are-Top-7-Security-features-of-Microsoft-Cloud2-1024x448.webp"
            alt='#'
          />
          <h3> Top 7 Security features of Microsoft Cloud </h3>
          <a href='/'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Blog