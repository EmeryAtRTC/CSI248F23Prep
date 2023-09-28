function StyleInComponent(props) {
  const styleObject = {
    backgroundColor: "lightblue", // CSS property: background-color
    padding: "15px", // CSS property: padding
    borderRadius: "10px", // CSS property: border-radius
    boxShadow: "0px 4px 6px #000", // CSS property: box-shadow
    margin: "10px", // CSS property: margin
  };
  return (
    <>
      {/* Using style object */}
      <div style={styleObject}>
        {/* Using inline styling */}
        <h2
          style={{
            color: "darkgrey",
            textDecoration: "underline",
            padding: "20px",
          }}
          className="card-name"
        >
          {props.userName}
        </h2>
        <div className="card-body">
          <div className="card-label">Email:</div>
          <div>{props.email}</div>
          <div className="card-label">Phone:</div>
          <div>{props.phoneNumber}</div>
          <div className="card-label">Address:</div>
          <div>{props.address}</div>
        </div>
      </div>
    </>
  );
}

export default StyleInComponent;
