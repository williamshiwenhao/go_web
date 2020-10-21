var data = [
    {
        "type": "文件",
        "status": "Active",
        "time": "2020-10-20 20:32"
    },
    {
        "type": "文件",
        "status": "Active",
        "time": "2020-10-20 20:32"
    },
    {
        "type": "文件",
        "status": "Active",
        "time": "2020-10-20 20:32"
    },
    {
        "type": "文件",
        "status": "Active",
        "time": "2020-10-20 20:32"
    }, {
        "type": "文件",
        "status": "Active",
        "time": "2020-10-20 20:32"
    }
]

var str = ''
var typeMap = new Map();
for (var i = 0; i < data.length; i++) {
    str += "<tr><td>" + i + 1
        + "</td><td>" + data[i].type
        + "</td><td>" + data[i].status
        + "</td><td>" + data[i].time
        + "</td><td>" + data[i].other
        + "</td></tr>"
}
$("#bussiness_content").html(str)
