<?php
    $used_gpt_user_answer = $_POST['answer'];

    $conn = new mysqli('xxxx','xxxx', 'xxxx!','xxxx');
    if ($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO experiment_info (used_gpt_user_answer) VALUES (?)");
        $stmt->bind_param("s", $used_gpt_user_answer); 
        $stmt->execute();
        $stmt->close();
        $conn->close();
        header('Location: thankyou');
        exit();
        
    }
?>
