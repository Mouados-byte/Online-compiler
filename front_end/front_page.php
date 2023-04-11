<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
?>


<!DOCTYPE html>
<html lang="en" data-theme="light">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Compiler</title>
    <link rel="stylesheet" href="css/front.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>


<body>

    <h1>Online compiler</h1>
    <div class="theme-switch">
        <input type="checkbox" id="theme-switch-checkbox">
        <label for="theme-switch-checkbox"></label>
    </div>
    <div class="body" class="codeform">
        <label for="language" id="languagelabel">Choose a language:</label>
        <select id="language" name="language" onchange="chooselang()">
            <option value="c_cpp">C</option>
            <option value="c_cpp">C++</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <!-- <option value="php">PHP</option> -->
            <option value="java">Java</option>
        </select>
        <div id="codearea" class="codearea"></div>
        <div class="middle">
            <button id="runbtn" onclick="runcode()">Run</button>
            <button class="buttonload">
                <i class="fa fa-spinner fa-spin"></i>Loading
            </button>
        </div>
        <hr>
        <h3 id="outputheader">Output :</h3>
        <div id="outputarea">

        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="js/lib/ace.js"></script>
    <script src="js/lib/theme-monokai.js"></script>
    <script src="js/lib/theme-xcode.js"></script>
    <script src="js/front.js"></script>

</body>

</html>