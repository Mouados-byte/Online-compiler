

let editor;
let language = $("#language").val();
const toggleSwitch = document.querySelector('#theme-switch-checkbox');
let currentTheme = $('html').attr('data-theme');

const url = 'https://api.jdoodle.com/v1/execute';
const clientID = '4757a7cf94731fa6f9dcf2d07fa1da69';
const clientSecret = 'cf290e4c7be456dca3bfd24905ccf856469cdf31dda4eaf999a029905a9ee400';
const apiKey = 'f2c33b3aa7msh19b07ef25a8f449p1e1128jsn4a6c5765e378';

const languages = [
  {key: 'java', value: 'java'},
  {key: 'python', value: 'py'},
  {key: 'c_cpp', value: 'cpp'},
  {key: 'GoLang', value: 'go'},
  {key: 'C#', value: 'cs'},
  {key: 'javascript', value: 'js'}
];

window.onload = function(){
    editor = ace.edit("codearea");
    editor.setTheme("ace/theme/" + (currentTheme ? (currentTheme === 'light' ? 'xcode' : 'monokai') : 'xcode'));
    editor.session.setMode("ace/mode/c_cpp");
}

function toggleTheme() {
    currentTheme = $('html').attr('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    editor.setTheme("ace/theme/" + (newTheme === 'light' ? 'xcode' : 'monokai'));
    $('html').attr('data-theme', newTheme);
  }


  function getValueByKey(key) {
    for (var i = 0; i < languages.length; i++) {
      if (languages[i].key === key) {
        return languages[i].value;
      }
    }
    return null; // If the key is not found in the array
  }

function switchTheme(e) {
  
  toggleTheme();
}

toggleSwitch.addEventListener('change', switchTheme, false);


function chooselang(){
    language = $("#language").val();

    editor.session.setMode("ace/mode/" + language);
    
}



function runcode() {
  $("#runbtn").click(function(){
    
    $('#runbtn').hide();
    $('.buttonload').show();
    
    var data = {
      'code': editor.getSession().getValue(),
      'language': getValueByKey(language),
      'input': ''
    };
    
    $.ajax({
      url: 'https://api.codex.jaagrav.in',
      type: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $.param(data),
      success: function(data) {
        console.log(data);
        document.querySelector('#outputarea').textContent = data.output;
        $('#runbtn').show();
        $('.buttonload').hide();
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
}
