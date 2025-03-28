import ProfileCard from "./ProfileCard"

function App() {
  return (
    <>
    <h1>componente app</h1>
    <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">personal digital assistants</p>
      </div>
    </section>

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard />
          </div>
          <div className="column is-4">
            <ProfileCard />
          </div>
          <div className="column is-4">
            <ProfileCard />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
