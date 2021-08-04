export default{
    contactCoach(context,payload)
    {
        const newRequest = {
            id:this.$uuid.v1(),
            coachId:payload.coachId,
            userEmail:payload.email,
            message:payload.message
        }

        context.commit('addContact',newRequest);
    }
}