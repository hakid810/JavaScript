var MlabHelper;

$(document).ready(function () {
    var apiKey = "beZhgYK7lNkRmdnHlvu7-57idig-RsXB";
    MlabHelper = new MlabHelper(apiKey); //생성될 때 setter로서 실행됨.
    MlabHelper.setDbname("hakid810");
    MlabHelper.setColname("memo");
});

function searchMlabColl() {
    
    var query = $("#search_id").val() == '' ? '' : "{'title': {'$regex':'"+$("#search_id").val()+"'}}";
    
    MlabHelper.searchMlab(query, function (data) {
        drawTable("dynamicTable",data);
    });
}

function insertMlabColl() {
    var dataObj = {"title":$("#title_id").val() || '', "contents":$("#contents_id").val() || ''};

    MlabHelper.insertMlab(dataObj, function () {
        console.dir("insert success");
    });
}

function updateMlabColl() {
    var dataObj = {"title":$("#title_id").val() || '', "contents":$("#contents_id").val() || ''};

    var id = $("#selected_id").val();
    MlabHelper.updateMlab(id, dataObj, function () {
        console.dir("update success");
        searchMlabColl();
    });

}

function deleteMlabColl() {
    var id = $("#selected_id").val();
    MlabHelper.deleteMlab(id, function () {
        console.dir("delete success");
        searchMlabColl();
    });

}

function drawTable(tableId, dataObj) {
    var tableIns = $("#"+tableId);
    var inHTML = "";

    $.each(dataObj, function (index, value) {
        var newItem = "<tr>";
newItem += "<td><input type='text' id='id_"+index+"' value='"+value._id.$oid+"'></td>";
newItem += "<td><input type='text' id='title_"+index+"' value='"+value.title+"'></td>";
newItem += "<td><input type='text' id='contents_"+index+"' value='"+value.contents+"'></td>";
newItem += "<td><input type='button' value='select' onclick='selectItem("+index+")'></td>";
newItem += "</tr>";
inHTML += newItem;
});

tableIns.html(inHTML);
}

function selectItem(idx) {
    $("#title_id").val($("#title_"+idx).val());
    $("#contents_id").val($("#contents_"+idx).val());
    $("#selected_id").val($("#id_"+idx).val());
}

// var testOnbj = {};
// testOnbj.color = "black";
//
// alert(testOnbj.color);
//
// testOnbj.setColor = function () {
//
//     //set color
// }
//
//     testOnbj.customedAlert = function () {
//         alert(testOnbj.color);
//     }
//    
//     function testRunner(obj) {
//         testOnbj.customedAlert();
//
//         $("#example").css("color","blue");
//         $("#example").append("<p>This is a paragraph</p>");
//     }
//
//     function searchMlabColl() {
//         var dbname = "hakid810";
//         var colname = "memo";
//         var apikey = "beZhgYK7lNkRmdnHlvu7-57idig-RsXB";
//         var baseURL = "https://api.mlab.com/api/1" //베이스 url. api 문서에도 나와있음.
//         var sendURL = baseURL + "/databases/" + dbname + "/collections/" + colname + "?apiKey=" + apikey;
//
//         $.ajax({
//             url: sendURL,
//             type: "GET",
//             async: true,
//             timeout: 3000000,
//             success: function (data) {
//                 alert(data);
//             }
//             ,
//             error: function (xhr, status, err) {
//                 alert(err);
//             }
//
//         });
//     }
//
//     testRunner(testOnbj);