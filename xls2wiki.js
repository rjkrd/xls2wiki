function createWikiTable(xls_id, wiki_id) {
  first = true;
  output = "{| {{table}}";
  text = document.getElementById(xls_id).value;
  lines = text.match(/[^\r\n]+/g);
  for (var row = 0; lines != null && row < lines.length; row++) {
    line = lines[row].split(/\t+/g);
    if(first) {
      first = false;
      for (var thead = 0; thead < line.length; thead++) {
        output += "\n| align='center' style='background:#f0f0f0;'|'''" + line[thead].trim() + "'''";
      }
      output += "\n|-";
    }  else {
      tbody = line.join("||");
      output += "\n|" + tbody.trim() + "\n|-";
    }
  }
  output += "\n|}";
  document.getElementById(wiki_id).innerHTML = output;
}
