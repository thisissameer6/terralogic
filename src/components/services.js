import React from 'react'

function Services() {

  const data = [
    { id: 1, title: " Design", description: "A dedicated team of UX/UI designers unveiling the full potential of being design-driven", image: "https://terralogic.com/wp-content/uploads/2022/09/ui-ux-design-services.svg" },
    { id: 2, title: "Application Development", description: "We build stunning apps that capture the users' imaginations.", image: "https://terralogic.com/wp-content/uploads/2022/09/custom-application-development-services.svg" },
    { id: 3, title: "Cloud", description: "Cloud hosting services that perfectly fit small and large businesses.", image: "https://terralogic.com/wp-content/uploads/2022/09/cloud-solution-provider.svg" },
    { id: 4, title: "Cybersecurity", description: "Our holistic security solutions help you identify, protect, and recover from cyber threats.", image: "https://terralogic.com/wp-content/uploads/2022/09/cloud-solution-provider.svg" },
    { id: 5, title: "IT Services", description: "Our full range of IT services is a one-stop solution for your business.", image: "https://terralogic.com/wp-content/uploads/2022/09/it-services.svg" },
    { id: 6, title: "System and Software", description: "Creating scalable engineering solutions with an agile architectural backbone.", image: "https://terralogic.com/wp-content/uploads/2022/09/embedded-systems-and-software-solutions.svg" },
    { id: 7, title: "Document Management Systems", description: "Simplified solutions for a paperless office.", image: "https://terralogic.com/wp-content/uploads/2022/12/Document-management-systems.svg" },
    { id: 8, title: "Strategy Services", description: "Analyze your business goals, and acquire a thorough technology roadmap.", image: "https://terralogic.com/wp-content/uploads/2022/12/Strategy-services.svg" },
    { id: 9, title: "Fintech Services", description: "Grow your business to the pinnacle while we handle your finance & accounting.", image: "https://terralogic.com/wp-content/uploads/2022/12/Fintech-Services-1.svg" },
  ]

  const data2 = [
    { id: 1, title: "IoT", description: "Connected solutions for products, devices, wearables and vehicles", image: "https://terralogic.com/wp-content/uploads/2022/09/iot-solutions-1.svg" },
    { id: 2, title: "AR/VR", description: "An end-to-end cutting edge technology to create immersive experiences.", image: "https://terralogic.com/wp-content/uploads/2022/09/ar-vr.svg" },
    { id: 3, title: "AI/ML", description: "AI/ML impelled solutions to deliver accuracy to your business judgements", image: "https://terralogic.com/wp-content/uploads/2022/09/ai-solutions-companies.svg" },
    { id: 4, title: "Data Science", description: "Solutions to extract precise business insights to let you make informed decisions", image: "https://terralogic.com/wp-content/uploads/2022/09/data-science-services-and-consulting.svg" },
    { id: 5, title: "Blockchain", description: "Leading technology coupled with AI to revolutionise your business transactions.", image: "https://terralogic.com/wp-content/uploads/2022/09/block-chain-solutions.svg" }
  ]
  return (
    <section className='container services'>
      <div>
        <div className='head'>
          <h3>OUR SERVICES</h3>
          <h2>Services that connect you to your users </h2>
        </div>
        <div className='services-cards'>
          {data.map(s => (
            <div key={s.id} >
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href='/'>Know More</a>
            </div>
          ))}
        </div>
      </div>
      <div className='techs'>
        <h3 className='title'>Learn more about the technologies we work for:</h3>
        <div className='card'>
          {data2.map(t => (
            <div key={t.id} >
              <img src={t.image} alt={t.title} />
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services