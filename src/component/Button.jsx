export default function ClickButton(){
    function handleClick(){
        alert("button clicked");
    }
    return(
        <button onClick={handleClick}>click me</button>
    );
}


