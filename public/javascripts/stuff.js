function send_rfid_tag()
{
    // Ensure tag_val is handled as string, because leading zeros are 
    // important
    var tag_val = $( "#rfid-tag" ).val() + "";
    var wait_msg = $( "#wait-msg" );
    var sent_msg = $( "#sent-msg" );
    var err_msg = $( "#err-msg" );

    wait_msg.show();

    $.ajax({
        url: "/user/" + tag_val,
        success: function( data, status, xhr ) {
            wait_msg.hide();
            sent_msg.show();
        },
        error: function( xhr, err_str, exception ) {
            wait_msg.hide();
            err_msg.show();
        },
    });
}
