<?php
    $email_address = $_POST['emailId'];
    $myfile = fopen("onePlace.txt", "a") or die("0Unable to save your email, please try again.");
    $dataToWrite = $email_address . ",";
    fwrite($myfile, $dataToWrite);
    fclose($myfile);
    echo "1Thank you for your interest in <b><i>BillzHub</b></i>";
    //if you echo out something, it will be available in the data-argument of the
    //ajax-post-callback-function and can be displayed on the html-site
?>
