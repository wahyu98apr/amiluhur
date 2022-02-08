/**
 * @module Generate Sertifikat Vaksin
 * @license MIT
 * @version 3.1.1
 * @author wahwahyuknr
 * @description Sebuah program untuk membuat sertifikat vaksin digital.
 * @see https://github.com/wahwahyuknr/amiluhur/GSV_v1.js
 */

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}  

      var TEST_NUMERIC = /^\d+$/;
      var TEST_ALPHANUMERIC = /^[0-9A-Z$%*+-./: ]+$/;
 
      function chooseBestModeData(data) {
        if (TEST_NUMERIC.test(data)) {
          return new QRCode.QRNumeric(data);
        } else if (TEST_ALPHANUMERIC.test(data)) {
          return new QRCode.QRAlphanumeric(data);
        }

        try {
          return new QRCode.QRKanji(data);
        } catch (error) {
          return new QRCode.QRByte(data);
        }
      }

  var urlasli = window.location.href;
  var urlDcd = urlasli .replace(/http.+?m=1#/,"");
  var longparameter = "https://kim.amiluhur.xyz/p/cetak-sertifikat-vaksin.html?m=1&"+Base64.decode(urlDcd);
 
  if (urlasli != urlDcd) {

    //ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = longparameter.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(longparameter.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var nama = getUrlParam('a',null);
var nik = getUrlParam('b',null);
var tgllahir = getUrlParam('c',null);
var tglvaksin = getUrlParam('d',null);
var blnvaksin = getUrlParam('e',null);
var thnvaksin = getUrlParam('f',null);
var idsertif = getUrlParam('g',null);
    
    if (nik == null){window.location = "https://amiluhur.xyz/p/cetak-sertifikat-vaksin.html";}
    
         // Aksi QR Code
      
        var data = urlasli;
        //var mode = encodeMode.val();
        var mode = 'Auto';
        //var ecLevel = encodeECLevel.val();
        var ecLevel = 'L';
        //var margin = Number(encodeMargin.val());
        var margin = '8';
        //var moduleSize = Number(encodeMSize.val());
        var moduleSize = '3';
        //var hasEncodingHint = encodingHint.prop('checked');
        var hasEncodingHint = false;

        var qrcode = new QRCode.Encoder();
        var errorCorrectionLevel = QRCode.ErrorCorrectionLevel[ecLevel];

        qrcode.setEncodingHint(hasEncodingHint).setErrorCorrectionLevel(errorCorrectionLevel);

        try {
          var data = mode === 'Auto' ? chooseBestModeData(data) : new QRCode[mode](data);

          qrcode.write(data).make();

		  	var srcimgQR = qrcode.toDataURL(moduleSize, margin); console.log(srcimgQR);
          
        } catch (error) {

          alert(error.message);
        }
    
document.write (
'<html>\n' +
'<head>\n' +
'<title>Cetak Sertifikat Vaksin\n' +
'</title>\n' +
'</head>\n' +
    
'<style>\n' +
    '.nama {position:absolute;top:151px;left:173px;color:white;text-transform:uppercase;font-size:16px;text-align:center;width:300px;font-family:arial;font-weight: bold;}\n' +
    '.srcQR img { position: relative; top: -427px; left: 480px; width: 70px;}\n' +
    '.post-body { word-wrap: unset ;}\n' +
    '#content-wrap-page .post-outer-single {max-width:unset}\n' +
    '.main-content {margin:0px !important;padding:0px !important;}\n' +
    'body {line-height: unset;}\n' +
    '#content-wrap-page {padding:0px}\n' +
	'.post-body table, #header-outer,.breadcrumbs,.post-outer-single .post-title,.Buat,#footer-outer { display:none}\n' +
	'button, img, .divbg { width: 744px;border:0px;}\n' +
	'.nik { position: relative; top: -323px; left: 196px; color: white; font-family: arial; font-size: 9px; width: 100px;}\n' +
    '.tgllahir {position: relative;top: -334px;left: 337px;font-family: aria;font-size: 9px; width: 100px;color: white;}\n' +
    '.tglvaksin {position: relative;top: -302px;left: 368px;font-family: arial;font-size: 10px; color: #517c94;font-weight: 700;}\n' +
    '.idsertif1 {position: relative;top: -263px;left: 307px; color: #58869a; font-family: arial; font-weight: bold; font-size: 12px; width: 200px;}\n' +
    '.tglvaksinid {position: relative;top: -284px;left: 369px;font-family: arial;font-size: 10px;font-weight: 700;color: #225a72;width:150px}\n' +
    '.blnvaksinen {position: relative;top: -280px; left: 361px; width: 150px; font-size: 9px;font-family: arial;font-weight: 700;color: #104e72;}\n' +
    '.idsertif2 {position: relative;top: -169px;left: 417px;font-size: 12px;font-family: arial; color: #2d5d6f;width: 200px; font-weight: 700;}\n' +
'</style>\n' +
'<body>\n' +
  
'<div class="divbg" style="position:relative;"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEib-t8QjEBiQ1g2qToi5ilExF8tv5NxzQxIJQhfKsLJ0PfcB71fi2WIsYy0XVmk200cj0XLKcyrEalhfVrF40vHmua1JBQM3FY54FLFN9__GhZsgkT15OIISsP3eLFAzaq5FmpYI-MlfiXEy0ym1zFGKVHgR-s9dvnu3zs9OZPmcKG6GT1hWAZrRIX8vg=s0" />\n' +    
    
    '<div id="2namax" class="nama" >'+nama+'</div>\n' +    
    '<div id="2nik" class="idsertif1" >'+idsertif+'</div>\n' +   
    '<div id="2nik" class="idsertif2" >'+idsertif+')</div>\n' +   
    '<div id="2nik" class="nik" >'+nik+'</div>\n' +    
    '<div id="2tgllahir" class="tgllahir" >'+tgllahir+'</div>\n' +    
    '<div id="2tglvaksin" class="tglvaksinid" >'+tglvaksin+' '+blnvaksin+' '+thnvaksin+'</div>\n' +    
    '<div id="2blnvaksin" class="blnvaksinen" ><i>'+blnvaksin+' '+tglvaksin+', '+thnvaksin+'</i></div>\n' +     
    '<div id="srcQR" class="srcQR" ><img src="'+srcimgQR+'"></img></div>\n' +   
    
    '</div>\n' +    
    '<button onclick="window.print();">--------------------------------------- CETAK ---------------------------------------</button>' +

'</body>\n' +    
'</html>\n'
); 
    
}
  
  function BuatSertifikat() {  

  var nama = document.getElementById("nama").value;
  var nik = document.getElementById("nik").value;
  var tgllahir = document.getElementById("tgllahir").value;
  var tglvaksin = document.getElementById("tglvaksin").value;
  var blnvaksin = document.getElementById("blnvaksin").value;
  var thnvaksin = document.getElementById("thnvaksin").value;
  var idsertif = Base64.encode(nik);
    var parameter = "a="+nama+"&b="+nik+"&c="+tgllahir+"&d="+tglvaksin+"&e="+blnvaksin+"&f="+thnvaksin+"&g="+idsertif;
  console.log(parameter);  
    var parameter64 = Base64.encode(parameter);
    var urlqr = "https://kim.amiluhur.xyz/p/cetak-sertifikat-vaksin.html?m=1#"+parameter64;  
  console.log(urlqr);

      var encodeText = $('#encode-text'); 
      var encodeMode = $('#encode-mode');
      var encodingHint = $('#encoding-hint');
      var encodeECLevel = $('#encode-eclevel');
      var encodeMargin = $('#encode-margin');
      var encodeMSize = $('#encode-msize');
      var encodeResult = $('#encode-result');

      // Aksi QR Code
      
        var data = urlqr;
        //var mode = encodeMode.val();
        var mode = 'Auto';
        //var ecLevel = encodeECLevel.val();
        var ecLevel = 'L';
        //var margin = Number(encodeMargin.val());
        var margin = '8';
        //var moduleSize = Number(encodeMSize.val());
        var moduleSize = '3';
        //var hasEncodingHint = encodingHint.prop('checked');
        var hasEncodingHint = false;

        var qrcode = new QRCode.Encoder();
        var errorCorrectionLevel = QRCode.ErrorCorrectionLevel[ecLevel];

        qrcode.setEncodingHint(hasEncodingHint).setErrorCorrectionLevel(errorCorrectionLevel);

        try {
          var data = mode === 'Auto' ? chooseBestModeData(data) : new QRCode[mode](data);

          qrcode.write(data).make();

		  	var srcimgQR = qrcode.toDataURL(moduleSize, margin); 
          
        } catch (error) {

          alert(error.message);
        }
    
document.write (
'<html>\n' +
'<head>\n' +
'<title>Cetak Sertifikat Vaksin\n' +
'</title>\n' +
'</head>\n' +
    
'<style>\n' +
    '.nama {position:absolute;top:151px;left:173px;color:white;text-transform:uppercase;font-size:16px;text-align:center;width:300px;font-family:arial;font-weight: bold;}\n' +
    '.srcQR img { position: relative; top: -422px; left: 480px; width: 70px;}\n' +
	'button { width: 744px;border:0px;}\n' +
	'.nik { position: relative; top: -323px; left: 196px; color: white; font-family: arial; font-size: 9px; width: 100px;}\n' +
    '.tgllahir {position: relative;top: -334px;left: 337px;font-family: aria;font-size: 9px; width: 100px;color: white;}\n' +
    '.tglvaksin {position: relative;top: -302px;left: 368px;font-family: arial;font-size: 10px; color: #517c94;font-weight: 700;}\n' +
    '.idsertif1 {position: relative;top: -259px;left: 307px; color: #58869a; font-family: arial; font-weight: bold; font-size: 12px; width: 200px;}\n' +
    '.tglvaksinid {position: relative;top: -278px;left: 369px;font-family: arial;font-size: 10px;font-weight: 700;color: #225a72;width:150px}\n' +
    '.blnvaksinen {position: relative;top: -274px; left: 361px; width: 150px; font-size: 9px;font-family: arial;font-weight: 700;color: #104e72;}\n' +
    '.idsertif2 {position: relative;top: -165px;left: 417px;font-size: 12px;font-family: arial; color: #2d5d6f;width: 200px; font-weight: 700;}\n' +
'</style>\n' +
'<body>\n' +
  
'<div style="position:relative;"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEib-t8QjEBiQ1g2qToi5ilExF8tv5NxzQxIJQhfKsLJ0PfcB71fi2WIsYy0XVmk200cj0XLKcyrEalhfVrF40vHmua1JBQM3FY54FLFN9__GhZsgkT15OIISsP3eLFAzaq5FmpYI-MlfiXEy0ym1zFGKVHgR-s9dvnu3zs9OZPmcKG6GT1hWAZrRIX8vg=s0" />\n' +    
    
    '<div id="2namax" class="nama" >'+nama+'</div>\n' +    
    '<div id="2nik" class="idsertif1" >'+idsertif+'</div>\n' +   
    '<div id="2nik" class="idsertif2" >'+idsertif+')</div>\n' +   
    '<div id="2nik" class="nik" >'+nik+'</div>\n' +    
    '<div id="2tgllahir" class="tgllahir" >'+tgllahir+'</div>\n' +    
    '<div id="2tglvaksin" class="tglvaksinid" >'+tglvaksin+' '+blnvaksin+' '+thnvaksin+'</div>\n' +    
    '<div id="2blnvaksin" class="blnvaksinen" ><i>'+blnvaksin+' '+tglvaksin+', '+thnvaksin+'</i></div>\n' +   
    '<div id="srcQR" class="srcQR" ><img src="'+srcimgQR+'"></img></div>\n' +   
    
    '</div>\n' +    
    '<button onclick="window.print();">--------------------------------------- CETAK ---------------------------------------</button>' +

'</body>\n' +    
'</html>\n'
); 

}
