const Display = ({name}) => {
    return <div className="content">
    <img src={require('../assets/person.png')}/>
    <p>Welcome {name}!</p>
    </div>
}

export default Display;