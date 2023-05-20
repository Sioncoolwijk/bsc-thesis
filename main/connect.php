<?php
    $used_gpt_user_answer = $_POST['answer'];
    $clicked_gpt_button   = $_POST['clicked-gpt'];

    $conn = new mysqli('xxxx','xxxx', 'xxxx!','xxxx');
    if ($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO experiment_info (used_gpt_user_answer, clicked_gpt_button) VALUES (?, ?)");
        $stmt->bind_param("ss", $used_gpt_user_answer, $clicked_gpt_button); 
        $stmt->execute();
        $stmt->close();
        $conn->close();
        header('Location: thankyou');
        exit();

    }
?>
