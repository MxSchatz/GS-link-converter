

function goGrabIt() {

  //show results
  document.getElementById("demResultsMayne").style.display = "block";

  path = document.getElementById("winLink").value;
  path = path.replace(/\\/g, "/");
  path = path.replace("Z:");
  path = path.split(' ').join("%20");
  var drive = /(.)\:\//;

  //Turn into URL object
  var uri = new URL(`smb://10.60.50.20/Data/${path}`).href;
  console.log(uri);
  var plainText = document.createTextNode(uri);
  console.log(plainText);


  //sore variable for if statement
  var thing = document.getElementById('clickResults').textContent;

  if (thing.length > 1) {

        //remove current text if there is any
        document.getElementById('clickResults').removeChild(resultsLink);

        //deliver to div
        document.getElementById('clickResults').innerHTML = '<a id="resultsLink" href="'+uri+'"></a>';
        document.getElementById('resultsLink').appendChild(plainText);

    } else {

      //deliver to div
      document.getElementById('clickResults').innerHTML = '<a id="resultsLink" href="'+uri+'"></a>';
      document.getElementById('resultsLink').appendChild(plainText);
  }

}

  function clearIt(){
    document.getElementById('winLink').value = '';
  }
