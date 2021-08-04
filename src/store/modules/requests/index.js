import mutations from "./muations.js";
import actions from "./actions";

export default{
    namespaced:true,
    state(){
        return{
            requests:[]
        }
    },
    mutations,
    actions
}