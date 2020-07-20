// For area options in the following link:
// https://data.bls.gov/cew/apps/data_views/data_views.htm#tab=Tables

function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

const l = document.querySelectorAll("select#selectArea option");

var dict = [];

l.forEach(function(item){
    const obj = item.innerHTML.split("-")
    dict.push({
        key: obj[0].toString().trim(),
        value: obj[1].toString().trim()
    })
})

downloadObjectAsJson(dict, "areacodes")