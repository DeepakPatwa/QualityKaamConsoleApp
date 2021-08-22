export class SharedConstants {
    // entity details
    public static USER_ENTITY_NAME = "user";
    public static USER_ENTITY_EDIT_TITLE = "Edit User";
    public static ADDRESS_ENTITY_NAME = "address";
    public static ADDRESS_ENTITY_EDIT_TITLE = "Edit Address";
    public static TICKET_ENTITY_NAME = "ticket";
    public static TICKET_ENTITY_EDIT_TITLE = "Edit Ticket";


    // urls
    public static API_BASE_URL = "http://ec2-18-116-86-142.us-east-2.compute.amazonaws.com:3000";
    public static ADDRESS_UPDATE_URL = SharedConstants.API_BASE_URL + "/updateAddress";
    public static TICKET_UPDATE_URL = SharedConstants.API_BASE_URL + "/updateTicket";
}