import './App.css';

function App() {
    return (
        <div className="App">
            <h2>Reminders</h2>
            <br/>
            <h2>Add Reminders</h2>
            <form>
                <div>
                    <label htmlFor="id"></label>
                    <input name={"id"} placeholder={"id"}/>
                </div>
                <div>
                    <label htmlFor="reminder"></label>
                    <input name={"reminder"} placeholder={"reminder"}/>
                </div>
                <div>
                    <label htmlFor="time"></label>
                    <input name={"time"} placeholder={"time"}/>
                </div>
                <button type={"submit"}>Add</button>

            </form>
        </div>
    );
}

export default App;
