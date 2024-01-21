
const MessageDiv = (props) => {

  return (
    <div className="User-Message">
      <img alt="Profile Pic"></img>
      <div className="Message-Formatter">
          <div className="Name-Time">
              <h5>{props.name}</h5>
              <p>{props.time}</p>
          </div>
          <p>{props.text}</p>
      </div>
    </div>


  );
}

export default MessageDiv;
