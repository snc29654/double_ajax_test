$(window).load(init());
function init() {
  console.log("init");
  $("#button").click(function() {
    console.log("clicked");
    var text = "Sample text";
    send(text);
  });
  $("#button1").click(function() {
    var text = "Read action";
    read(text);
  });
}
function send(text) {
  console.log(text);
  var text = $('#indata0').val();
  var text1 = $('#indata1').val();
  console.log(text);
  console.log(text1);
  var json1 = JSON.stringify({'text': text});
  console.log(json1);
  $.ajax({
    type: 'POST',
    url: '/cgi-bin/double1.cgi',
    contentType: 'application/json',
    data: json1,
    success: function(data) {
      console.log("success double1");
      console.log(data);
      console.log(data.text);
      $('#result').empty();
      $('#result').val(data.text);
    }
  });
  var json2 = JSON.stringify({'text1': text1});
  console.log(json2);
  $.ajax({
    type: 'POST',
    url: '/cgi-bin/double2.cgi',
    contentType: 'application/json',
    data: json2,
    success: function(data) {
      console.log("success double2");
      console.log(data);
      console.log(data.text1);
      $('#add0').empty();
      $('#add0').val(data.text1);
    }
  });
  return false;
}
function read(text) {
  console.log(text);
  var text = $('#indata0').val();
  var text1 = $('#indata1').val();
  console.log(text);
  console.log(text1);
  var json1 = JSON.stringify({'text': text});
  console.log(json1);
  $.ajax({
    type: 'POST',
    url: '/cgi-bin/read1.cgi',
    contentType: 'application/json',
    data: json1,
    success: function(data) {
      console.log("success read1");
      console.log(data);
      console.log(data.text);
      $('#readresult1').empty();
      $('#readresult1').val(data.text);
    }
  });
  var json2 = JSON.stringify({'text1': text1});
  console.log(json2);
  $.ajax({
    type: 'POST',
    url: '/cgi-bin/read2.cgi',
    contentType: 'application/json',
    data: json2,
    success: function(data) {
      console.log("success read2");
      console.log(data);
      console.log(data.text1);
      $('#readresult2').empty();
      $('#readresult2').val(data.text1);
    }
  });
  return false;
}
