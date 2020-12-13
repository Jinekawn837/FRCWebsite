var items = [
  {
    name: 'FRC Hoodie Angry',
    description: 'Description',
    price: 39.99,
    category: 'apparel',
    subcategory: 'hoodie',
    imageUrl: 'images/FRC Hoodie Angry.jpg'
  },
  {
    name: 'FRC Hoodie Small Logo Angry',
    description: 'Description',
    price: 39.99,
    category: 'apparel',
    subcategory: 'hoodie',
    imageUrl: 'images/FRC Hoodie Small Logo Angry.jpg'
  },
  {
    name: 'FRC Hoodie Small Logo',
    description: 'Description',
    price: 39.99,
    category: 'apparel',
    subcategory: 'hoodie',
    imageUrl: 'images/FRC Hoodie Small logo.jpg'
  },
  {
    name: 'FRC Hoodie',
    description: 'Description',
    price: 39.99,
    category: 'apparel',
    subcategory: 'hoodie',
    imageUrl: 'images/FRC Hoodie.jpg'
  },
  {
    name: 'FRC Mug Angry',
    description: 'Description',
    price: 5.99,
    category: 'merch',
    subcategory: 'merch',
    imageUrl: 'images/FRC Mug Angry.jpg'
  },
  {
    name: 'FRC Mug',
    description: 'Description',
    price: 5.99,
    category: 'merch',
    subcategory: 'merch',
    imageUrl: 'images/FRC Mug.jpg'
  },
  {
    name: 'FRC Sweater Angry',
    description: 'Description',
    price: 24.99,
    category: 'apparel',
    subcategory: 'sweater',
    imageUrl: 'images/FRC Sweater Angry.jpg'
  },
  {
    name: 'FRC Sweater Logo Angry',
    description: 'Description',
    price: 24.99,
    category: 'apparel',
    subcategory: 'sweater',
    imageUrl: 'images/FRC Sweater Logo Angry.jpg'
  },
  {
    name: 'FRC Sweater Logo',
    description: 'Description',
    price: 24.99,
    category: 'apparel',
    subcategory: 'sweater',
    imageUrl: 'images/FRC Sweater Logo.jpg'
  },
  {
    name: 'FRC Sweater',
    description: 'Description',
    price: 24.99,
    category: 'apparel',
    subcategory: 'sweater',
    imageUrl: 'images/FRC Sweater.jpg'
  },
  {
    name: 'FRC T-shirt Logo Angry',
    description: 'Description',
    price: 19.99,
    category: 'apparel',
    subcategory: 'tshirt',
    imageUrl: 'images/FRC T-shirt Logo Angry.jpg'
  },
  {
    name: 'FRC T-shirt Logo',
    description: 'Description',
    price: 19.99,
    category: 'apparel',
    subcategory: 'tshirt',
    imageUrl: 'images/FRC T-shirt Logo.jpg'
  }
];

//Runs this when the site loads
window.addEventListener('load', function() {
  var table = document.createElement('table');
  var row = table.insertRow();

  var perrow = 2;
  var count = 0;
  for (var i of items) {
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
    //var imgDescription = document.createTextNode(i.description);
    //cell.appendChild(imgDescription);
    lineBreak = document.createElement('br');
    cell.appendChild(lineBreak);
    var formatPrice = new Intl.NumberFormat('en', { style: 'currency', currency: 'CAD' }).format(
      i.price
    );
    var imgPrice = document.createTextNode(formatPrice);
    cell.appendChild(imgPrice);

    count++;
    if (count % perrow === 0) {
      row = table.insertRow();
    }
  }
  document.getElementById('table_container').appendChild(table);
});

//Clears table
function clearTable() {
  var Parent = document.getElementById('table_container');
  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild);
  }
}
filterAllItems;
filterApparel;
filterMerch;

//Displays All Items
function filterAllItems() {
  clearTable();
  document.getElementById('filter').innerHTML = 'All items';
  document.getElementById('filterHoodies').innerHTML = '';
  document.getElementById('filterSweaters').innerHTML = '';
  document.getElementById('filterTshirts').innerHTML = '';

  var table = document.createElement('table');
  var row = table.insertRow();

  var perrow = 2;
  var count = 0;
  for (var i of items) {
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
    //var imgDescription = document.createTextNode(i.description);
    //cell.appendChild(imgDescription);
    lineBreak = document.createElement('br');
    cell.appendChild(lineBreak);
    var formatPrice = new Intl.NumberFormat('en', { style: 'currency', currency: 'CAD' }).format(
      i.price
    );
    var imgPrice = document.createTextNode(formatPrice);
    cell.appendChild(imgPrice);

    count++;
    if (count % perrow === 0) {
      row = table.insertRow();
    }
  }
  document.getElementById('table_container').appendChild(table);
}

//Displays only Apparel
function filterApparel(subcat) {
  clearTable();
  document.getElementById('filter').innerHTML = 'Apparel';
  document.getElementById('filterHoodies').innerHTML = 'Hoodies';
  document.getElementById('filterSweaters').innerHTML = 'sweaters';
  document.getElementById('filterTshirts').innerHTML = 't-shirts';

  var table = document.createElement('table');
  var row = table.insertRow();

  var perrow = 2;
  var count = 0;
  for (var i of items) {
    if (subcat === 'all') {
      if (i.category === 'apparel') {
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
        //var imgDescription = document.createTextNode(i.description);
        //cell.appendChild(imgDescription);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        var formatPrice = new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'CAD'
        }).format(i.price);
        var imgPrice = document.createTextNode(formatPrice);
        cell.appendChild(imgPrice);

        count++;
        if (count % perrow === 0) {
          row = table.insertRow();
        }
      }
    } else if (subcat === 'hoodie') {
      if (i.subcategory === subcat) {
        cell = row.insertCell();
        //Img
        img = document.createElement('img');
        img.src = i.imageUrl;
        img.style.height = '400px';
        img.style.width = '400px';
        cell.appendChild(img);

        imgName = document.createTextNode(i.name);
        cell.appendChild(imgName);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        //var imgDescription = document.createTextNode(i.description);
        //cell.appendChild(imgDescription);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        formatPrice = new Intl.NumberFormat('en', { style: 'currency', currency: 'CAD' }).format(
          i.price
        );
        imgPrice = document.createTextNode(formatPrice);
        cell.appendChild(imgPrice);

        count++;
        if (count % perrow === 0) {
          row = table.insertRow();
        }
      }
    } else if (subcat === 'sweater') {
      if (i.subcategory === subcat) {
        cell = row.insertCell();
        //Img
        img = document.createElement('img');
        img.src = i.imageUrl;
        img.style.height = '400px';
        img.style.width = '400px';
        cell.appendChild(img);

        imgName = document.createTextNode(i.name);
        cell.appendChild(imgName);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        //var imgDescription = document.createTextNode(i.description);
        //cell.appendChild(imgDescription);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        formatPrice = new Intl.NumberFormat('en', { style: 'currency', currency: 'CAD' }).format(
          i.price
        );
        imgPrice = document.createTextNode(formatPrice);
        cell.appendChild(imgPrice);

        count++;
        if (count % perrow === 0) {
          row = table.insertRow();
        }
      }
    } else if (subcat === 'tshirt') {
      if (i.subcategory === subcat) {
        cell = row.insertCell();
        //Img
        img = document.createElement('img');
        img.src = i.imageUrl;
        img.style.height = '400px';
        img.style.width = '400px';
        cell.appendChild(img);

        imgName = document.createTextNode(i.name);
        cell.appendChild(imgName);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        //var imgDescription = document.createTextNode(i.description);
        //cell.appendChild(imgDescription);
        lineBreak = document.createElement('br');
        cell.appendChild(lineBreak);
        formatPrice = new Intl.NumberFormat('en', { style: 'currency', currency: 'CAD' }).format(
          i.price
        );
        imgPrice = document.createTextNode(formatPrice);
        cell.appendChild(imgPrice);

        count++;
        if (count % perrow === 0) {
          row = table.insertRow();
        }
      }
    }
  }
  document.getElementById('table_container').appendChild(table);
}

//Displays only Merch
function filterMerch() {
  clearTable();
  document.getElementById('filter').innerHTML = 'Merch';
  document.getElementById('filterHoodies').innerHTML = '';
  document.getElementById('filterSweaters').innerHTML = '';
  document.getElementById('filterTshirts').innerHTML = '';

  var table = document.createElement('table');
  var row = table.insertRow();

  var perrow = 2;
  var count = 0;
  for (var i of items) {
    if (i.category === 'merch') {
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
      //var imgDescription = document.createTextNode(i.description);
      //cell.appendChild(imgDescription);
      lineBreak = document.createElement('br');
      cell.appendChild(lineBreak);
      var formatPrice = new Intl.NumberFormat('en', { style: 'currency', currency: 'CAD' }).format(
        i.price
      );
      var imgPrice = document.createTextNode(formatPrice);
      cell.appendChild(imgPrice);

      count++;
      if (count % perrow === 0) {
        row = table.insertRow();
      }
    }
  }
  document.getElementById('table_container').appendChild(table);
}
