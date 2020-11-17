<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="shortcut icon" href="/media/favicon.png" type="image/x-icon">
        <title>Тестовое задание - Заболотский Антон Игоревич</title>
        <link rel="stylesheet" href="/styles/zerostyle.css" media="screen" charset="UTF-8">
        <link rel="stylesheet" href="/styles/style.css" media="screen" charset="UTF-8">
        <script src="/js/jquery.min.js"></script>
        <script src="/js/main.js"></script>
    </head>

    <body>
        <header>
            <div class="logo">
                <img src="media/logo.png" alt="bank_logo">
            </div>
            <div class="info">
                <p>Заболотский Антон Игоревич</p>
                <p>тел.: +7 (991) 450-60-31</p>
                <p>эл.почта: keksovska@gmail.com</p>
            </div>
        </header>
        <div class="table" id="textFields">
            <form class="inputs" method="post" >
                <div class="column">
                    <label for="name" class="label">Ваши фамилия, имя, отчество:</label>
                    <label for="tel" class="label">Ваш номер телефона:</label>
                    <label for="credit" class="label">Cумма кредита:</label>
                    <label for="year" class="label">Срок в годах:</label>
                    <label for="percent" class="label">Процентная ставка:</label>
                </div>

                <div class="column" id="form">
                    <input type="text" name="name" class="nameField label" placeholder="" required>
                    <input type="text" name="surname" class="telField label" placeholder="" required>
                    <input type="text" name="age" class="creditField label" placeholder="">
                    <input type="text" name="age" class="yearField label" placeholder="">
                    <input type="text" name="age" class="percentField label" placeholder=""> 
                    <input type="submit" value="Подать заявку!" class="button label">
                </div>
            </form>
        </div>
            
        </div>

        <div class="table" id="results">
            <div class="results" id="tableResults">

            </div>
        </div>


        <footer>
            <p>Заболотский Антон Игоревич</p>
            <p>тел.: +7 (991) 450-60-31</p>
            <p>эл.почта: keksovska@gmail.com</p>
        </footer>


    </body>
</html>