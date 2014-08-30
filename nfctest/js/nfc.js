// NDEF P2P Send Example
var tnf     = 1;                                                      // NFC Forum Well Known type
var type    = new Uint8Array(NfcUtils.fromUTF8("U"));                 // URL type
var id      = new Uint8Array(NfcUtils.fromUTF8(""));                  // id
var payload = new Uint8Array(NfcUtils.fromUTF8("\u0003mozilla.org")); // URL data, with a short record prefix 0x3 replacing http://
 
var ndefRecords = [new MozNDEFRecord(tnf, type, id, payload)];
var nfcdom = window.navigator.mozNfc;
 nfcdom.onpeerready = function(event) {
  var nfcPeer = nfcdom.getNFCPeer(event.detail);  // 'event.detail' has sessionToken.
  var req = nfcpeer.sendNDEF(ndefRecords); // push NDEF message to other NFC device.
  req.onsuccess = function(e) {
    console.log("Successfully pushed P2P message");
  };
  req.onerror = function(e) {
    console.log("P2P push failed!");
  };
};

// NDEF Read example
var conn = nfctag.connect("NDEF");
conn.onsuccess = function() {
  var req = nfctag.readNDEF();
  req.onsuccess = function() {
    var records = req.result;
    showRecords(records);
    nfctag.close(); // This is a DOMRequest call, truncated code here.
  };
  req.onerror = function() {
    nfctag.close(); // This is a DOMRequest call, truncated code here.
  };
};
 
function showRecords(records) {
  records.forEach(function (record) {
    console.log("Found a " + record.tnf + " record" +
                " of type " + record.type +
                " with ID " + record.id +
                " and payload " + record.payload);
  });
};
