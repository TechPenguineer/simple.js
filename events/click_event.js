var clickEvent = {
    eleid,callbacke,
    create_click_event: function(elementID,callback)
    {
        var ele = document.getElementById(`${elementID}`);
        ele.setAttribute("onclick",`${callback}`)

        this.eleid = elementID
        this.callbacke = callback
    },
    get_clicked: function(callback)
    {
        
    }

}