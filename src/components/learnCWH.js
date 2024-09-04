
function learn(props){
    return(
        <>
            {/* The language written here is JSX and not HTML :) */}
            IT WORKS!!! {props.title}

            {props.searchBar ? "Ummm... This pops up, ok!" : "Hehe!, u wont know about it lol."}

        
        </>
    );
};
export default learn;

// learn.defaultProps = {
//     title: "Enter title here", 
//     searchBar: true 
// }

// learn.propTypes = {
//     title: propTypes.string, 
//     searchBar: propTypes.bool.isRequired
// }