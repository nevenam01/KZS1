document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form'); //DOM objekat 1
  var imeInput = document.getElementById('ime');
  var njelaInput = document.getElementById('njela');
  var brOsobaInput = document.getElementById('brOsoba');
  var vremeInput = document.getElementById('vreme');
  var radioGroup = document.querySelector('.radio-group');
  var commentsInput = document.getElementById('vasRecept');
  
  //VALIDACIJE
  form.addEventListener('submit', function(event) { //DOM objekat  2
    // Proveri da li su svi unosi validni
    if (!isValidFormatAlp(imeInput.value)) {
      alert('Ime i prezime mora sadrzati samo slova');
      event.preventDefault();
      return;
    }
    if (!isValidFormatAlp(njelaInput.value)) {
      alert('Naziv jela mora sadrzati samo slova!');
      event.preventDefault();
      return;
    }
    if (!isValidFormatNum(brOsobaInput.value)) {
      alert('Broj osoba mora biti broj!');
      event.preventDefault();
      return;
    }
    if (!isValidFormatNum(vremeInput.value)) {
      alert('Vreme pripreme mora biti broj!');
      event.preventDefault();
      return;
    }
    //Ako je sve okej onda nek se pojavi pop up sa unetim podacima
    event.preventDefault();
    var data = {
      name: imeInput.value,
      meal: njelaInput.value,
      people: brOsobaInput.value,
      time: vremeInput.value,
      gender: getRadioValue(radioGroup),
      comments: commentsInput.value
    };
    alert('Uneti podaci:\n\n' +
          'Ime i Prezime: ' + data.name + '\n' +
          'Naziv Jela: ' + data.meal + '\n' +
          'Broj Osoba: ' + data.people + '\n' +
          'Vreme pripreme: ' + data.time + '\n' +
          'Težina pripreme: ' + data.gender + '\n' +
          'Vaš recept: ' + data.comments);
    form.reset(); //DOM 3
  });
  
  //Validacija SAMO SLOVA i RAZMAK
  function isValidFormatAlp(input) {
    return /^[a-zA-Z\s]+$/.test(input);
  }
  
  // Validacija SAMO BROJEVI
  function isValidFormatNum(input) {
      return /^\d+$/.test(input);
  }
  
  //Uzmi vrednost selektovanog radio dugmeta u radio grupi
  function getRadioValue(radioGroup) {
    var checkedRadioButton = radioGroup.querySelector('input[type="radio"]:checked');
    return checkedRadioButton ? checkedRadioButton.value : null;
  }
  
  //Promena boja dugmeta na prelaz misem 
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('mouseover', function() {
  submitButton.style.backgroundColor = 'brown';
  });
  
  submitButton.addEventListener('mouseout', function() {
  submitButton.style.backgroundColor = '';
  });
  });