export default{
    coaches(state)
    {
        return state.coaches;
    },
    hasCoaches(_,getters)
    {
        if(getters.coaches.length>0)
        {
            return true;
        }
        return false;
    }
}