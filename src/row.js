function Row({row}) {
    //row consists of 3 elements of the row.
    var rowStr = "";
    for(let i =0 ; i<row.length;i++){
        if(i%3 !==2)
            rowStr += (row[i]+"|");
        else
            rowStr += row[i]
    }

    console.log(rowStr);
    return ( <div><p>{rowStr}</p></div>);
}

export default Row;
//row consists of 3 elements of the row.port default R;{r<br></br>w}