jQuery(document).ready(function() {
    jQuery(".button").bind("click", function() {

        // READING INFO FROM FIELDS
        var name = jQuery('.nameField').val();
        var tel = jQuery('.telField').val();
        var credit = jQuery('.creditField').val();
        var year = jQuery('.yearField').val();
        var percent = jQuery('.percentField').val();

        // CHICKING IF THERE IS NO DATA
        if ((name == "") || (tel == "")) {
            alert("Пожалуйста, ввдите необходимые данные!");
        }

        else {
            alert("Ваша заявка успешно принята!");
            // SENDING TO SERVER
            jQuery.ajax({
                url: "for_db.php",
                type: "POST",
                data: {
                    name:name, 
                    tel:tel, 
                    credit:credit, 
                    year:year, 
                    percent:percent
                    }, 
                dataType: "json",
                success: function(result) {

                    return false;
                }
            });
            
            // DELETING FIELDS
            document.getElementById("textFields").remove();

            // CONVERTING TO NUMBER
            credit = Number(credit);
            year = Number(year);
            percent = Number(percent);

            // MAKING CALCULATIONS
            const monthly_percent = percent / (100 * 12);
            const monthly_payment = credit * (monthly_percent + monthly_percent / (Math.pow((monthly_percent + 1), year * 12) - 1));
            const num_str = monthly_payment.toFixed(2);

            const tableDiv = document.createElement("div");
            var html = '<table class="table">';

            var payCredit;
            var remDebt = credit;
            var payLoan;
            var curDebt;
        
            var monthlyPaymentOverall = 0;
            var payCreditOverall = 0;
            var payLoanOverall = 0;


            // MORE CALCULATIONS AND CREATING THE TABLE
            html += '<tr> ';
            html += '<td>Дата</td>';
            html += '<td>Ежемесячный платёж, руб.</td>';
            html += '<td>Погашение процентов, руб.</td>';
            html += '<td>Погашение кредита, руб.</td>';
            html += '<td>Остаток долга, руб.</td>';
            html += '</tr>';

            for(var i = 0; i < year * 12; i++){
                html += '<tr>';
                html += '<td>' + '1.'+ (i+1) + '.20' + '</td>';
                monthlyPaymentOverall += monthly_payment;
                html += '<td>' + monthly_payment.toFixed(2) + ' </td>';

                payCredit = remDebt * percent / (100 * 12);
                payCreditOverall += payCredit;
                html += '<td>' + payCredit.toFixed(2) + ' </td>';

                payLoan = monthly_payment - payCredit;
                payLoanOverall += payLoan;
                html += '<td>' + payLoan.toFixed(2) + ' </td>';
            
                curDebt = remDebt - payLoan;
                html += '<td>' + curDebt.toFixed(2) + ' </td>';

                html += '</tr>';

                remDebt = curDebt;
            }

            html += '<tr> ';
            html += '<td>Итого</td>';
            html += '<td>' + monthlyPaymentOverall.toFixed(2) + '</td>';
            html += '<td>' + payCreditOverall.toFixed(2) + '</td>';
            html += '<td>' + Math.abs(payLoanOverall.toFixed(2)) + '</td>';
            html += '<td></td>';
            html += '</tr>';

            document.getElementById('tableResults').innerHTML = html + '</table>';
        }

        return false;
        });
    });

