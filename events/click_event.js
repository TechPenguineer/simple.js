var clickEvent = {
    create_click_event: function(elementID,callback)
    {
        var ele = document.getElementById(`${elementID}`);
        ele.setAttribute("onclick",`${callback}`)
    }
    
}