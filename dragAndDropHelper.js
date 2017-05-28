({
	updatePickVal : function(component, recId, pField, pVal) {
        //Id recId, String kanbanField, String kanbanNewValue
		var action = component.get("c.getUpdateStage");
        action.setParams({
            "recId":recId,
            "kanbanField":pField,
            "kanbanNewValue":pVal
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                document.getElementById(recId).style.backgroundColor = "#04844b";
                setTimeout(function(){ document.getElementById(recId).style.backgroundColor = ""; }, 300);
            }
        });
        $A.enqueueAction(action);
	}
})
