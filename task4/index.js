$(function(){
    const myCheckboxes =  $("input");
    let checkedCount = 0;
    myCheckboxes.on("change",function(){
        if(this.checked){
            checkedCount++;
        } else {
            checkedCount--;
        }
        if(checkedCount>=3){
            myCheckboxes.prop("disabled",true);
        } else {
            myCheckboxes.prop("disabled", false);
        }
    });
});