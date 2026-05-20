import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20
    },

    input:{
        display:"flex",
        flexDirection:"row",
        height:50,
        borderColor:"gray",
        borderWidth:1,
        width:"100%",
        marginBottom:15,
        paddingHorizontal:10,
        alignItems:"center"
    },

    inputText:{
        marginRight:10,
        minWidth:80
    },

    textInput:{
        flex:1,
        paddingVertical:8,
        fontSize:16
    },

    paymentContainer:{
        width:"100%",
        marginTop:15
    },

    radioButtonRow:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:8,
        paddingHorizontal:10
    }
})