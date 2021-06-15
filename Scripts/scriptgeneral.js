function checkMail(_mail) {
    var mail = _mail.toString();
    if (mail.length == 0) {
      return false; // aixó es per evitar que si canvies d'element sense posar rés et compti com a error
    }
    var arroba = false;
    var textBetween = false;
    var punt = false;
    for (var i = 0; i < mail.length; i++) {
      // Comença amb text
      if (i == 0) {
        if (mail[i] >= 'a' && mail[i] <= 'z' || mail[i] >= 'A' && mail[i] <= 'Z' || mail[i] >= '0' && mail[i] <= '9') {
          // no fer res, es correcte
        } else {
          alert("El primer caràcter ha de ser lletra o nombre.");
          return false;
        }
      } else {
        // Conté una @
        if (mail[i] == '@') {
          // No conté més de una @
          if (arroba == true) {
            alert("La @ aparéix duplicada");
            return false;
          }
          arroba = true;
        }
  
        // Comprobem que hi ha text entre l'arroba i el punt
        if (arroba == true && punt == false && textBetween == false) {
          if (mail[i] == '.') {
            alert("Insereix text entre @ i el punt");
            return false;
          }
          else if (mail[i] >= 'a' && mail[i] <= 'z' || mail[i] >= 'A' && mail[i] <= 'Z' || mail[i] >= '0' && mail[i] <= '9') {
            textBetween = true;
          }
        }
        // Conté al menys un punt
        if (arroba == true && mail[i] == '.') {
          punt = true;
        }
  
  
        // No acaba en punt 
        if (i == mail.length - 1) {
          if (mail[i] == '.') {
            alert("Un email no pot acabar amb .")
            return false;
          }
        }
      }
    }
    if (arroba == false) {
      alert("Et falta l'arroba");
    } if (punt == false) {
      alert("Et falta colocar un punt després de l'arroba");
    }
    return (arroba == true && punt == true);//el text between no importa aqui ja que el punt mai serà true si el textbetween no ho es
  }
  
  // DATA DE NEIXEMENT
  function checkBirthday(_neixament) {
  
    var neixament = _neixament.toString();
    if (neixament.length == 0) {
      return false;
    }
    // maxim 8 caracters
    if (neixament.length > 8 || neixament.length < 5) {
      alert("Data incorrecte, posa (dd/mm/yy)");
      return false;
    }
    // barCount
    var barCount = 0;
  
  
    var number = "";
    var dia = 0;
    var mes = 0;
    var any = 0;
    // Llegim les dades i les emmagatzamem
    for (var i = 0; i < neixament.length; i++) {
      if (!(neixament[i] == '/' || (neixament[i] >= '0' && neixament[i] <= '9'))) {
        alert("Error, caràcter introduit no esperat");
        return false;
      }
  
      // Comprovar nombre
      if (neixament[i] >= '0' && neixament[i] <= '9') {
        number = number + neixament[i];
      }
      // Comprovar barres
      if (neixament[i] == '/' || i == neixament.length - 1) {
        if(barCount == 0){
          dia = Number(number);
        }else if (barCount == 1) { // mes
          mes = Number(number);
        } else { // Comprobem que no hi ha mes de 2 barres sino que es el final
          if (neixament[i] == '/') {
            alert("Error, data incorrecte");
            return false;
          }
          any = Number(number);
        }
        number = "";
        barCount++;
      }
    }
  
    if (barCount != 3) {
      alert("Error, data introduida incorrecte");
      return false;
    }
   
    var trespas = false;
    // Comprovem només si te dues xifres, per tant entre 1921 i 2020(Màxim 99 anys)
    if (any < 0 || any > 99) {
      alert("Insereix un any entre 0 y 99");
      return false;
    }
    else {
      if (any < 10) {
        any = "200" + any;
      } else if (any <= 20) {
        any = "20" + any;
      } else {
        any = "19" + any;
      }
      if (any % 4 == 0) {
        if (any % 100 == 0) {
          if (any % 400 == 0) {
            trespas = true;
          }
        } else {
          trespas = true;
        }
      }
    }
  
  
    if (mes <= 0 || mes > 12) {
      alert("Mes invalid");
      return false;
    }
  
    if (dia <= 0 || dia > 31) {
      alert("Dia invalid");
      return false;
    } else {
      var dict = {
        1: 31,
        // El febrer no es necessari
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      }
  
      if (mes == 2) {
        if (trespas) {
          if (dia > 29) {
            alert("Dia invalid");
            return false;
          }
        } else {
          if (dia > 28) {
            alert("Dia invalid");
            return false;
          }
        }
      } else {
        if (dia > dict[mes]) {
          alert("Dia invalid");
          return false;
        }
      }
    }
  
    return true;
  }
  //COMENTARIS
  function checkComment(_comentari) {
  
    var comentari = _comentari.value.toString();
    if (_comentari.length == 0) {
      return false; // aixó es per evitar que si canvies d'element sense posar rés et compti com a error
    }
  
    // Nombre de paraules
    var nParaules = 0;
    // Nombre de carácters
    var nChar = comentari.length;
    // Nombre de punts
    var nPunt = 0;
    // Nombre de comes
    var nComa = 0;
  
    var espai = true;
  
    for (var i = 0; i < comentari.length; i++) {
      // Que passa si hi ha mes d'un espai conjunt?
      if (comentari[i] != ' '
        && comentari[i] != '.'
        && comentari[i] != ','
        && comentari[i] != '?'
        && comentari[i] != '¿'
        && comentari[i] != '!'
        && comentari[i] != '¡') {
        espai = false;
      }
  
      // Que passa si hi ha un punt o una coma i no hi ha un espai?
      if ((comentari[i] == ' '
        || comentari[i] == '.'
        || comentari[i] == ','
        || comentari[i] == '?'
        || comentari[i] == '¿'
        || comentari[i] == '!'
        || comentari[i] == '¡')
        && espai == false) {
        nParaules = nParaules + 1;
        espai = true;
  
      }
      if (i == comentari.length - 1 && espai == false) {
        // Que passa si al final de l'última paraula, no hi ha espai ni punt ni coma?
        nParaules = nParaules + 1;
      }
  
      if (comentari[i] == '.') {
        nPunt = nPunt + 1;
      }
  
      if (comentari[i] == ',') {
        nComa = nComa + 1;
      }
    }
    // Afegir l'element indicant el nombre de variables
    var ul = document.getElementById("paraules");
    if(comentari.length == 0){
      ul.innerHTML = "";
    }else{
      ul.innerHTML = ("Paraules: " + nParaules + ". Caracters: " + nChar + ". Punts: " + nPunt + ". Comes: " + nComa);
    }
   
    if (nParaules <= 50) {
      return true;
    } else {
      alert("Error, més de 50 paraules.")
      return false;
    }
  }
  
  //CONTRASEÑA
  function checkPassword(_password) {
    var password = _password.toString();
    if (password.length == 0) {
      return false;
    }
  
    // Mes de 8 carácters
    if (password.length <= 8) {
      alert('La contrasenya ha de tenir més de 8 caràcters');
      return false;
    }
    var maj = false;
    var min = false;
    var num = false;
    var extra = false;
    for (var i = 0; i < password.length; i++) {
      // Al menys una lletra majúscula
      if (password[i] >= 'A' && password[i] <= 'Z') {
        maj = true;
      }
      // Al menys una lletra minúscula
      if (password[i] >= 'a' && password[i] <= 'z') {
        min = true;
      }
      // Un numero
      if (password[i] >= '0' && password[i] <= '9') {
        num = true;
      }
      // Extra:  !”·$%&/()=?¿¡+*}{][-
      if (password[i] == '!'
        || password[i] == '¡'
        || password[i] == '"'
        || password[i] == '.'
        || password[i] == '$'
        || password[i] == '%'
        || password[i] == '&'
        || password[i] == '/'
        || password[i] == '('
        || password[i] == ')'
        || password[i] == '='
        || password[i] == '?'
        || password[i] == '¿'
        || password[i] == '+'
        || password[i] == '*'
        || password[i] == '}'
        || password[i] == '{'
        || password[i] == ']'
        || password[i] == '['
        || password[i] == '-'
        || password[i] == '_'
        || password[i] == ':'
        || password[i] == ','
        || password[i] == ';'
        || password[i] == '·') {
        extra = true;
      }
    }
  
  
  
    if (extra == true && min == true && maj == true && num == true) {
      return true;
    } else {
      alert("La contrasenya ha de contenir al menys una majúscula, una minúscula, un nombre i un caracter d'entre aquests:  !”·$%&/()=?¿¡+*}{][-");
      return false;
    }
  
  }
  //COMPROBAR CONTRASEÑA
  function checkPasswordValidity(_password, _repeated) {
    var password = _password.toString()
    var repeated = _repeated.toString()
    if (_repeated.length == 0) {
      return false;
    }
    if (password == repeated) {
      return true;
    } else {
      alert("Les contrasenyes introduides no son identiques.")
      return false;
    }
  
  }
  //ENVIAMENT
  function checkEverything(mail, neixament, password, passwordVal, nom, cognom) {
    if (mail.length == 0) {
      alert("Introdueix mail");
      return false;
    }
    if (neixament.length == 0) {
      alert("Introdueix neixament");
      return false;
    }
    if (password.length == 0) {
      alert("Introdueix contrasenya");
      return false;
    }
    if (passwordVal.length == 0) {
      alert("Introdueix la repetició de la contrasenya");
      return false;
    }
    if (nom.length == 0) {
      alert("Introdueix nom");
      return false;
    }
    if (cognom.length == 0) {
      alert("Introdueix cognom");
      return false;
    }
    if (checkMail(mail) == true
      && checkBirthday(neixament) == true
      && checkPassword(password) == true
      && checkPasswordValidity(password, passwordVal) == true) {
      alert("Tot correcte");
      return true;
    } else {
      alert("Completa tots els camps");
      return false;
    }
  
  }