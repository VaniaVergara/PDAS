import ProfileCard from "./ProfileCard"

function App() {
 

  return (
    <>
      
     <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">Personal Digital Assistans</p>
      </div>
     </section>

     <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard 
              title="Alexa"
              handle="@alexa24"
              image="data:image/png;base64,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"
            />
          </div>
          <div className="column is-4">
            <ProfileCard 
            title="cortana"
            handle="@cortana001"
            image="https://i.pinimg.com/736x/ac/3f/12/ac3f12acc6c4270794298b82b7a09e6f.jpg"
            />
          </div>
          <div className="column is-4">
            <ProfileCard 
               title="siri"
               handle="@siri05"
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlf76syoG0LJRhxbgjUrsBY6f-6fS-RAuXw&s"
               />
          </div>
        </div>
      </section>
     </div>
    </>
  )
}

export default App

