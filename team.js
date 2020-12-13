var team = [
  {
    name: 'Jinekawn',
    description: 'Jacob "Chiko" Kwan is a CoFounder of FRC and the current Valorant IGL.',
    imageUrl: 'images/FRC-Chicken Avatar.jpg'
  },
  {
    name: 'Koiekawn',
    description: 'Sara Kwan is the official artist of FRC. Follow her @koiekawn on Instagram',
    imageUrl: 'images/FRC-Chicken Avatar.jpg'
  }
];

//Runs this when the site loads
window.addEventListener('load', function() {
  var table = document.createElement('table');
  var row = table.insertRow();

  var perrow = 2;
  var count = 0;
  for (var i of team) {
    var cell = row.insertCell();

    //Img
    var img = document.createElement('img');
    img.src = i.imageUrl;
    img.style.height = '400px';
    img.style.width = '400px';
    cell.appendChild(img);

    var imgName = document.createTextNode(i.name);
    cell.appendChild(imgName);
    var lineBreak = document.createElement('br');
    cell.appendChild(lineBreak);
    var imgDescription = document.createTextNode(i.description);
    cell.appendChild(imgDescription);
    lineBreak = document.createElement('br');
    cell.appendChild(lineBreak);

    count++;
    if (count % perrow === 0) {
      row = table.insertRow();
    }
  }
  document.getElementById('table_container').appendChild(table);
});
