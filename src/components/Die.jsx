export default function Die(prop){
    
    return(
        <>
         <button
            style={prop.isHeld ? { backgroundColor: "#59E391" } : {}}
            onClick={()=> prop.hold(prop.id)}
         >
            {prop.value}
         </button>
        </>
        
    )
}