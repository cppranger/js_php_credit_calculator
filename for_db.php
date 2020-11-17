<?  
    // CONNECTING TO MYSQL
    $mysqli = new Mysqli('localhost', 'root', 'root', 'credit_db');

    // READING INFO
    $name = trim($_POST['name']);
    $tel = trim($_POST['tel']);
    $credit = intval($_POST['credit']);
    $year = intval($_POST['year']);
    $percent = intval($_POST['percent']);

    // SENDING INFO
    $query = $mysqli->query("INSERT INTO `credit` VALUES('$name', '$tel', '$credit', '$year', '$percent')");

    // SENDING EMAIL
    $to = "keksovska@gmail.com";
    $subject = "Новая заявка на кредит!";
    $message = "Новая заявка на кредит!<br>
                от $name,<br>
                тел.: $tel,<br>
                на сумму: $credit.";
    $headers = "тест";
    mail($to, $subject, $message, $headers);

?>