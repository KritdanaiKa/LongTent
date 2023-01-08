function CheckDate() {
    let Fdate = document.getElementById("inputEntry").value 
    let Ldate = document.getElementById("inputExit").value 
    let FDate = new Date(Fdate)
    let LDate = new Date(Ldate)
    return parseInt((LDate - FDate) / 86400000 +1)
}

function CheckDateEdit() {
    let Fdate = document.getElementById("EditEntry").value 
    let Ldate = document.getElementById("EditExit").value 
    let FDate = new Date(Fdate)
    let LDate = new Date(Ldate)
    return parseInt((LDate - FDate) / 86400000 +1)
}

function sumaryprice() {
    var People = ($('#Adult').val() * 30) + ($('#Children').val() * 10);
    var Day = CheckDate()
    var Other = ($('#Sleeping_Bag').val() * 30) + ($('#Blanket').val() * 20) + ($('#Sleeping_Pad').val() * 20) + ($('#Mat').val() * 20) + ($('#Pillow').val() * 10) + ($('#Canvas').val() * 40);
    var CarH = ($('#RV').val() * 300) + ($('#RVS').val() * 600) + ($('#RVT').val() * 100);
    var Tent = ($('#Tent3').val() * 225) + ($('#Tent2').val() * 150);
    $('#DetailPrice').text((People + CarH + Tent + Other) * Day);
    $('#DetailPrice2').text((People + CarH + Tent + Other) * Day);
}

function sumarypriceEdit() {
    var People = ($('#AdultEdit').val() * 30) + ($('#ChildrenEdit').val() * 10);
    var Day = CheckDateEdit()
    var Other = ($('#Sleeping_BagEdit').val() * 30) + ($('#BlanketEdit').val() * 20) + ($('#Sleeping_PadEdit').val() * 20) + ($('#MatEdit').val() * 20) + ($('#PillowEdit').val() * 10) + ($('#CanvasEdit').val() * 40);
    var CarH = ($('#RVEdit').val() * 300) + ($('#RVSEdit').val() * 600) + ($('#RVTEdit').val() * 100);
    var Tent = ($('#Tent3Edit').val() * 225) + ($('#Tent2Edit').val() * 150);
    $('#IP3').text((People + CarH + Tent + Other) * Day);
}

$(() => {
    bodyload();
    $('#inputCamp').change(showZone)
    $('#inputZone').change(checkRV)
    $('#NextStep2').click(showZone2)
    $('#NextStepAdd').click(showDetail)
    $('#inputEntry').change(selectexit)
    $('#inputExit').change(showZone3)
    $('.InpAcc').change(checkCount)
    $('.impData').change(checkData)
    $('.EditVal').change(checkEdit)
    $('#CheckDefault').change(checkTrue)
    $('#CheckDel').change(checkTrueDel)
    $('#checkhistory').click(showHistory)
    $('#DelHistory').click(Del_History)
    $('#NextAdd').click(AddBooking)
    $('#ToSave').click(UpdateBooking)
    $('#ToEdit2').click(Editformmore)
});

function Editformmore(){
    var id = document.getElementById("Info_id").textContent
    btn_edit(id)
}

function UpdateBooking(){
    var ID = $("#Edit_id").text();
    const data = {
        "E-Mail" : $('#HistoryEmail').text(),
        "Tel" : $('#HistoryTel').text(),
        "Location" : document.getElementById("Edit_locate").textContent,
        "Zone" : document.getElementById("Edit_zone").textContent,
        "DateEntry" : document.getElementById("EditEntry").value,
        "DateExit" : document.getElementById("EditExit").value ,
        "Price" : parseInt($('#IP3').text()),
        "Detail" : {
            "Adult" : parseInt($('#AdultEdit').val()),
            "Children" : parseInt($('#ChildrenEdit').val()),
            "RV" : parseInt($('#RVEdit').val()),
            "RVS" : parseInt($('#RVSEdit').val()),
            "RVT" : parseInt($('#RVTEdit').val()),
            "Tent3" : parseInt($('#Tent3Edit').val()),
            "Tent2" : parseInt($('#Tent2Edit').val()),
            "Sleeping_Bag" : parseInt($('#Sleeping_BagEdit').val()),
            "Blanket" : parseInt($('#BlanketEdit').val()),
            "Sleeping_Pad" : parseInt($('#Sleeping_PadEdit').val()),
            "Mat" : parseInt($('#MatEdit').val()),
            "Pillow" : parseInt($('#PillowEdit').val()),
            "Canvas" : parseInt($('#CanvasEdit').val())
        }
    };
    const url = "http://localhost:3000/Users_Booking/" + ID;
    console.log(url);
            $.ajax({
                url: url,
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data),
                success: function (res) {
                    console.log(res);
                }
            });
            
}

function Del_History(){
    const url = "http://localhost:3000/Users_Booking/" + $('#Del_id').text()
    $.ajax({
        url: url,
        method: 'DELETE',
        success: function(res) {
        }
    })
}

function checkEdit(){
    if ($('#AdultEdit').val() < 0) {
        $('#AdultEdit').val(0)
    }
    if ($('#ChildrenEdit').val() < 0) {
        $('#ChildrenEdit').val(0)
    }
    if ($('#RVEdit').val() < 0) {
        $('#RVEdit').val(0)
    }
    if ($('#RVSEdit').val() < 0) {
        $('#RVSEdit').val(0)
    }
    if ($('#RVTEdit').val() < 0) {
        $('#RVTEdit').val(0)
    }
    if ($('#Tent3Edit').val() < 0) {
        $('#Tent3Edit').val(0)
    }
    if ($('#Tent2Edit').val() < 0) {
        $('#Tent2Edit').val(0)
    }
    if ($('#Sleeping_BagEdit').val() < 0) {
        $('#Sleeping_BagEdit').val(0)
    }
    if ($('#BlanketEdit').val() < 0) {
        $('#BlanketEdit').val(0)
    }
    if ($('#Sleeping_PadEdit').val() < 0) {
        $('#Sleeping_PadEdit').val(0)
    }
    if ($('#MatEdit').val() < 0) {
        $('#MatEdit').val(0)
    }
    if ($('#PillowEdit').val() < 0) {
        $('#PillowEdit').val(0)
    }
    if ($('#CanvasEdit').val() < 0) {
        $('#CanvasEdit').val(0)
    }
    if ($('#AdultEdit').val() > 0 && ($('#AdultEdit').val() + $('#ChildrenEdit').val()) > 0 && (CheckDateEdit() <= 3 && CheckDateEdit() > 0)) {
        document.getElementById("ToSave").classList.remove("disabled");

    }else {
        document.getElementById("ToSave").classList.add("disabled");
    }
    sumarypriceEdit();
}

function AddBooking(){
    $('#liveToastAdd').toast("show")
    const data = {
            "E-Mail" : $('#AddEmail').val(),
            "Tel" : $('#AddTel').val(),
            "Location" : document.getElementById("inputCamp").value,
            "Zone" : document.getElementById("inputZone").value,
            "DateEntry" : document.getElementById("inputEntry").value,
            "DateExit" : document.getElementById("inputExit").value ,
            "Price" : parseInt($('#DetailPrice2').text()),
            "Detail" : {
                "Adult" : parseInt($('#Adult').val()),
                "Children" : parseInt($('#Children').val()),
                "RV" : parseInt($('#RV').val()),
                "RVS" : parseInt($('#RVS').val()),
                "RVT" : parseInt($('#RVT').val()),
                "Tent3" : parseInt($('#Tent3').val()),
                "Tent2" : parseInt($('#Tent2').val()),
                "Sleeping_Bag" : parseInt($('#Sleeping_Bag').val()),
                "Blanket" : parseInt($('#Blanket').val()),
                "Sleeping_Pad" : parseInt($('#Sleeping_Pad').val()),
                "Mat" : parseInt($('#Mat').val()),
                "Pillow" : parseInt($('#Pillow').val()),
                "Canvas" : parseInt($('#Canvas').val())
            }
    };
    console.log(data)
    const url = "http://localhost:3000/Users_Booking"
    $.ajax({
        url: url,
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function (res) {
            console.log(res);
        }
    });

}

function checkTrue(){
    var CheckDefault = document.getElementById('CheckDefault')
    if (CheckDefault.checked){
        document.getElementById("NextAdd").classList.remove("disabled");
        document.getElementById("progress6").style.width = "100%";
        document.getElementById("progress6").textContent = "100%";
    }else {
        document.getElementById("NextAdd").classList.add("disabled");
        document.getElementById("progress6").style.width = "99%";
        document.getElementById("progress6").textContent = "99%";
    }
}

function checkTrueDel(){
    var CheckDefault = document.getElementById('CheckDel')
    if (CheckDefault.checked){
        document.getElementById("DelHistory").classList.remove("disabled");
    }else {
        document.getElementById("DelHistory").classList.add("disabled");
    }
}

function showDetail() {
    $('#DetailCamp4').text(document.getElementById("inputCamp").value)
    $('#DetailZones4').text(document.getElementById("inputZone").value)
    $('#DetailPrice3').text($('#DetailPrice2').text())
    $('#DetailEnt').text(document.getElementById("inputEntry").value )
    $('#DetailExt').text(document.getElementById("inputExit").value )
    $('#DetailDate3').text(CheckDate())
    $('#DetailEmail').text($('#AddEmail').val())
    $('#DetailTel').text($('#AddTel').val())
}

function checkData() {
    if($('#AddEmail').val() != "" && $('#AddTel').val() != "" && $('#AddTel').val().length == 10){
        document.getElementById("NextStepAdd").classList.remove("disabled");
        document.getElementById("progress5").style.width = "99%";
        document.getElementById("progress5").textContent = "99%";
    }else {
        document.getElementById("NextStepAdd").classList.add("disabled");
        document.getElementById("progress5").style.width = "90%";
        document.getElementById("progress5").textContent = "90%";
    }
}

function checkCount(){
    if ($('#Adult').val() < 0) {
        $('#Adult').val(0)
    }
    if ($('#Children').val() < 0) {
        $('#Children').val(0)
    }
    if ($('#RV').val() < 0) {
        $('#RV').val(0)
    }
    if ($('#RVS').val() < 0) {
        $('#RVS').val(0)
    }
    if ($('#RVT').val() < 0) {
        $('#RVT').val(0)
    }
    if ($('#Tent3').val() < 0) {
        $('#Tent3').val(0)
    }
    if ($('#Tent2').val() < 0) {
        $('#Tent2').val(0)
    }
    if ($('#Sleeping_Bag').val() < 0) {
        $('#Sleeping_Bag').val(0)
    }
    if ($('#Blanket').val() < 0) {
        $('#Blanket').val(0)
    }
    if ($('#Sleeping_Pad').val() < 0) {
        $('#Sleeping_Pad').val(0)
    }
    if ($('#Mat').val() < 0) {
        $('#Mat').val(0)
    }
    if ($('#Pillow').val() < 0) {
        $('#Pillow').val(0)
    }
    if ($('#Canvas').val() < 0) {
        $('#Canvas').val(0)
    }
    if ($('#Adult').val() > 0 && ($('#Adult').val() + $('#Children').val()) > 0) {
        document.getElementById("NextStepOK").classList.remove("disabled");
        document.getElementById("progress4").style.width = "90%";
        document.getElementById("progress4").textContent = "90%";

    }else {
        document.getElementById("NextStepOK").classList.add("disabled");
        document.getElementById("progress4").style.width = "75%";
        document.getElementById("progress4").textContent = "75%";
    }
    sumaryprice();
}

function btn_Del(id){
    console.log(id)
    const url = "http://localhost:3000/Users_Booking/"+id
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
            $('#Del_id').text(res.id)
            $('#HistoryEmail2').text(res['E-Mail'])
            $('#HistoryTel2').text(res.Tel)
            $('#F2').text(res.DateEntry)
            $('#L2').text(res.DateExit)
            $('#P2').text(res.Price)
            console.log(res)
        }
    })
}

function btn_Info(id){
    const url = "http://localhost:3000/Users_Booking/"+id
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
            $('#Info_id').text(res.id)
            $('#Info_locate').text(res.Location)
            $('#Info_zone').text(res.Zone)
            $('#IF2').text(res.DateEntry)
            $('#IL2').text(res.DateExit)
            $('#IP2').text(res.Price)
            var Detail = res.Detail
            $('#AdultInfo').val(Detail.Adult)
            $('#ChildrenInfo').val(Detail.Children)
            $('#RVInfo').val(Detail.RV)
            $('#RVSInfo').val(Detail.RVS)
            $('#RVTInfo').val(Detail.RVT)
            $('#Tent3Info').val(Detail.Tent3)
            $('#Tent2Info').val(Detail.Tent2)
            $('#Sleeping_BagInfo').val(Detail.Sleeping_Bag)
            $('#BlanketInfo').val(Detail.Blanket)
            $('#Sleeping_PadInfo').val(Detail.Sleeping_Pad)
            $('#MatInfo').val(Detail.Mat)
            $('#PillowInfo').val(Detail.Pillow)
            $('#CanvasInfo').val(Detail.Canvas)
            console.log(res)
        }
    })
}

function btn_edit(id){
    const url = "http://localhost:3000/Users_Booking/"+id
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
            checkRV_Edit()
            $('#Edit_id').text(res.id)
            $('#Edit_locate').text(res.Location)
            $('#Edit_zone').text(res.Zone)
            $('#EditEntry').val(res.DateEntry)
            $('#EditExit').val(res.DateExit)
            $('#IP3').text(res.Price)
            var Detail = res.Detail
            $('#AdultEdit').val(Detail.Adult)
            $('#ChildrenEdit').val(Detail.Children)
            $('#RVEdit').val(Detail.RV)
            $('#RVSEdit').val(Detail.RVS)
            $('#RVTEdit').val(Detail.RVT)
            $('#Tent3Edit').val(Detail.Tent3)
            $('#Tent2Edit').val(Detail.Tent2)
            $('#Sleeping_BagEdit').val(Detail.Sleeping_Bag)
            $('#BlanketEdit').val(Detail.Blanket)
            $('#Sleeping_PadEdit').val(Detail.Sleeping_Pad)
            $('#MatEdit').val(Detail.Mat)
            $('#PillowEdit').val(Detail.Pillow)
            $('#CanvasEdit').val(Detail.Canvas)
            console.log(res)
        }
    })
}

function checkRV_Edit() {
    var url = "http://localhost:3000/Camping"
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
        var Locate = $('#Edit_locate').text();
        var DataLocate = [];
        for(let i = 0 ; i < res.length ; i++){
            if(res[i].Name == Locate){
                DataLocate = res[i]
                break;
            }
        }
        var ZoneAll = DataLocate["Zone"];
        var Zone = $('#Edit_zone').text();
        for(let j = 0 ; j < ZoneAll.length ; j++){
            if(ZoneAll[j].Name == Zone){
                if(ZoneAll[j].Car){
                    document.getElementById("RVEdit").removeAttribute("disabled")
                    document.getElementById("RVSEdit").removeAttribute("disabled")
                    document.getElementById("RVTEdit").removeAttribute("disabled")
                }else{
                    document.getElementById("RVEdit").setAttribute("disabled","true")
                    document.getElementById("RVSEdit").setAttribute("disabled","true")
                    document.getElementById("RVTEdit").setAttribute("disabled","true") 
                }
                break;
            }
        }
    }    
    })
}


function showHistory() {
    $('#HistoryEmail').text($('#emailcheck').val())
    $('#HistoryTel').text($('#telcheck').val())
    $('#Ticket').text("");
    const url = "http://localhost:3000/Users_Booking?E-Mail="+ $('#emailcheck').val() +"&Tel="+ $('#telcheck').val()
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
            console.log(res)
            for(let i = 0 ;i < res.length ;i++){
                var col = $('<div class="col-lg-6 col-md-6 col-sm-12 my-1"></div>')
                var card = $('<div class="card"></div>')
                card.append('<div class="card-header">รหัสการจองที่ '+res[i].id+'</div>')
                var cardbody = $('<ul class="list-group list-group-flush"></ul>')
                cardbody.append('<li class="list-group-item"><strong class="Detail-Locate">สถานที่ :</strong>'+res[i].Location +'</li>')
                cardbody.append('<li class="list-group-item"><strong class="Detail-Locate">โซน :</strong>'+res[i].Zone +'</li>')
                cardbody.append('<li class="list-group-item"><strong class="Detail-Locate">วันเข้า :</strong>'+res[i].DateEntry +'</li>')
                cardbody.append('<li class="list-group-item"><strong class="Detail-Locate">วันออก :</strong>'+res[i].DateExit +'</li>')
                cardbody.append('<li class="list-group-item"><strong class="Detail-Locate">ค่าธรรมเนียม :</strong>'+res[i].Price +' บาท</li>')
                card.append(cardbody)
                var cardfoot = $('<div class="card-footer"></div>')
                var btn = $('<div class="row justify-content-center"></div>')
                btn.append($("<button>", {
                    text: 'Edit',
                    class: 'btn btn-info col-lg-5 m-1',
                    "data-bs-toggle" : "modal",
                    "data-bs-dismiss" : "modal",
                    "data-bs-target" : "#Modal-Edit",
                    onclick:'btn_edit('+res[i].id+')'
                }));
                btn.append($("<button>", {
                    text: 'Delete',
                    class: 'btn btn-danger col-lg-5 m-1',
                    "data-bs-toggle" : "modal",
                    "data-bs-dismiss" : "modal",
                    "data-bs-target" : "#Modal-Del",
                    onclick:'btn_Del('+res[i].id+')'
                }));
                btn.append($("<button>", {
                    text: 'View More',
                    class: 'btn btn-primary col-lg-12 m-1',
                    "data-bs-toggle" : "modal",
                    "data-bs-dismiss" : "modal",
                    "data-bs-target" : "#Modal-Info",
                    onclick:'btn_Info('+res[i].id+')'
                }));
                cardfoot.append(btn)
                card.append(cardfoot)
                col.append(card)
                $('#Ticket').append(col)
            }
        }
    })
}

function checkRV() {
    var url = "http://localhost:3000/Camping"
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
        var Locate = $('#inputCamp').val();
        var DataLocate = [];
        for(let i = 0 ; i < res.length ; i++){
            if(res[i].Name == Locate){
                DataLocate = res[i]
                break;
            }
        }
        var ZoneAll = DataLocate["Zone"];
        var Zone = $('#inputZone').val();
        for(let j = 0 ; j < ZoneAll.length ; j++){
            if(ZoneAll[j].Name == Zone){
                if(ZoneAll[j].Car){
                    document.getElementById("RV").removeAttribute("disabled")
                    document.getElementById("RVS").removeAttribute("disabled")
                    document.getElementById("RVT").removeAttribute("disabled")
                    document.getElementById("DetailRV").textContent = "สามารถจอดได้ในโซนนี้";
                }else{
                    document.getElementById("DetailRV").textContent = "ไม่สามารถจอดได้ในโซนนี้";
                    $('#RV').val(0)
                    $('#RVT').val(0)
                    $('#RVS').val(0)
                    sumaryprice();
                    document.getElementById("RV").setAttribute("disabled","true")
                    document.getElementById("RVS").setAttribute("disabled","true")
                    document.getElementById("RVT").setAttribute("disabled","true") 
                }
                break;
            }
        }
    }    
    })
}

function showZone3() {
    var check = CheckDate()
    if(check > 0 && check <= 3){
        document.getElementById("NextStep3").classList.remove("disabled")
        document.getElementById("progress2").style.width = "75%";
        document.getElementById("progress2").textContent = "75%";
        document.getElementById("DetailDate").textContent = check + " วัน"
        document.getElementById("DetailDate2").textContent = check
        document.getElementById("Warning").textContent = ""
    } else {
        document.getElementById("NextStep3").classList.add("disabled")
        document.getElementById("DetailDate").textContent = "- วัน"
        document.getElementById("Warning").textContent = "*** จองต่อเหนื่องได้ครั้งละ 3 วันเท่านั้น ***"
    }
}

function selectexit() {
    document.getElementById("inputExit").classList.remove("form-control-plaintext")
    document.getElementById("progress2").style.width = "50%";
    document.getElementById("progress2").textContent = "50%";
}

function bodyload() {
    var url = "http://localhost:3000/Camping"
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
        var size = res.length
        for(let i = 0 ; i < size ;i++){
            var Options = $('<option></option>').text(res[i].Name);
            $('#inputCamp').append(Options)
        }
    }    
    })
}

function showZone2() {
    document.getElementById("DetailCamp").textContent = document.getElementById("inputCamp").value
    document.getElementById("DetailZones").textContent = document.getElementById("inputZone").value
    document.getElementById("DetailCamp2").textContent = document.getElementById("inputCamp").value
    document.getElementById("DetailZones2").textContent = document.getElementById("inputZone").value
    document.getElementById("DetailCamp3").textContent = document.getElementById("inputCamp").value
    document.getElementById("DetailZones3").textContent = document.getElementById("inputZone").value
    console.log(document.getElementById("inputZone").value)
}

function showZone() {
    if ($('#inputCamp').val() == "โปรดเลือกสถานที่..."){
        document.getElementById("progress1").style.width = "0%";
        document.getElementById("progress1").textContent = "0%";
        document.getElementById("DetailLocate").textContent = "";
        document.getElementById("DetailZone").textContent = "";
        document.getElementById("DetailRV").textContent = "";
        document.getElementById("NextStep2").classList.add("disabled")
        document.getElementById("inputZone").innerHTML = ""
        return
    }
    var url = "http://localhost:3000/Camping"
    $.ajax({ url: url, 
        type: 'GET' ,
        success: function(res){
        document.getElementById("progress1").style.width = "10%";
        document.getElementById("progress1").textContent = "10%";
        var Locate = $('#inputCamp').val();
        var DataLocate = [];
        for(let i = 0 ; i < res.length ; i++){
            if(res[i].Name == Locate){
                DataLocate = res[i]
                break;
            }
        }
        var Zone = DataLocate["Zone"];
        document.getElementById("DetailLocate").textContent = DataLocate.Description;
        document.getElementById("DetailZone").textContent = DataLocate.Admission + " คน";
        document.getElementById("inputZone").innerHTML = ""
        for(let j = 0 ; j < Zone.length ;j++){
            var Options = $('<option></option>').text(Zone[j].Name);
            $('#inputZone').append(Options)
        }
        document.getElementById("progress1").style.width = "25%";
        document.getElementById("progress1").textContent = "25%";
        if (Zone[0].Car){
            document.getElementById("RV").removeAttribute("disabled")
            document.getElementById("RVS").removeAttribute("disabled")
            document.getElementById("RVT").removeAttribute("disabled")
            document.getElementById("DetailRV").textContent = "สามารถจอดได้ในโซนนี้" ;
        }else {
            document.getElementById("DetailRV").textContent = "ไม่สามารถจอดได้ในโซนนี้" ;
            $('#RV').val(0)
            $('#RVT').val(0)
            $('#RVS').val(0)
            sumaryprice();
            document.getElementById("RV").setAttribute("disabled","true")
            document.getElementById("RVS").setAttribute("disabled","true")
            document.getElementById("RVT").setAttribute("disabled","true")
        }
        document.getElementById("NextStep2").classList.remove("disabled")
    }    
    })
}



