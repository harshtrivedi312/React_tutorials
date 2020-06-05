import React from "react";

const ButtonChange = () => {
    const[toggle,SetToggle] = React.useState(true)

    const FlipTheToggle = () => {
        return SetToggle(!toggle);
    };

//itenary operator allowed inside the return jsx

return(
    <div>
        {toggle ? (
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla itaque deleniti, dolor molestiae ullam, dolores soluta placeat, similique alias iusto? Amet iure assumenda nemo porro hic doloremque soluta quibusdam?
                </p>
                <button onClick = {FlipTheToggle}>Toggle</button>
            </div>
        ) : (
            <div>
                <p>this is Faslse</p>
                <button onClick={FlipTheToggle}>Toggle</button>
            </div>
        )}
    </div>
);


}

export default ButtonChange;
