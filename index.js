// code your solution here
function superbowlWin(record){
    const result = record.find((item)=>{
        if(item.result==="W"){
            return item
        }
 
        
    })
    return result ? result.year : undefined

}