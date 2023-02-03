import GardenColors from "../../config/colors";

export default function Input(props) {
    return (
        <div
            style={{
                display: "flex",
                margin: "10px auto",
                flexDirection: "column",
                marginBottom: "15px",
                marginTop: "15px",
                textAlign: "center"
            }}
        >
            <label style={{ fontSize: 16, color: GardenColors.primaryTextColor, }}>
                {props.labelName}
            </label>
            <input
                style={{
                    borderRadius: 7,
                    outline: "none",
                    margin: "auto",
                    marginTop: "15px",
                    border: `1px solid ${GardenColors.primaryTextColor}`,
                    padding: "7px 10px",
                }}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div >
    );
}