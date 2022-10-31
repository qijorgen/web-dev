$(function () {

    let displaynum = 0;
    let resultnum = 0;
    let operator = 0;
    let firstnum = "a";
    let numdec = 0;

    $("#display").text($(".num:last").text());

    $(".num").click(function() {
       // $("#display").text($(this).text());
       // console.log($(this).text());
        
    });

    $(".num").hover(function() {
        $(this).css("color", "white");
    });

    const dynam = document.createElement("script");
    $(dynam).attr("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
    $(dynam).attr("defer", true);
    $("style").after(dynam);


    $(".num").click(function() {
        resultnum = $(this).text();
        if (displaynum != 0 || numdec != 0) {
            resultnum = $("#display").text() + resultnum;
        }
        displaynum = resultnum;
        $("#display").text(displaynum);
        // console.log($(this).text());
        
    });

    $('.decimal').click(function() {
        if (numdec == 0) {
            resultnum = $("#display").text() + ".";
            $("#display").text(resultnum);
            numdec = 1;
        }
    })

    $('.opposite').click(function() {
        $("#display").text(-1 * $("#display").text())
    })

    $('.percent').click(function() {
        $("#display").text(100 * $("#display").text())
    })

    $(".operator").click(function() {
        if ($(this).text() != "=") {
            operator = $(this).text();
            firstnum = $("#display").text();
            displaynum = 0;
            numdec = 0;
        }
        
    })

    $("#equals").click(function() {
        displaynum = $("#display").text();

        if (operator == "+") {
            resultnum = parseFloat(firstnum) + parseFloat(displaynum);
        }

        if (operator == "-") {
            resultnum = parseFloat(firstnum) - parseFloat(displaynum);
        }

        if (operator == "x") {
            resultnum = parseFloat(firstnum) * parseFloat(displaynum);
        }

        if (operator == "÷") {
            resultnum = parseFloat(firstnum) / parseFloat(displaynum);
        }

        $("#display").text(Math.round(resultnum * 1000) / 1000);
        displaynum = 0;
        numdec = 0;
    })

    $("#clear").click(function() {
        displaynum = 0;
        resultnum = 0;
        operator = 0;
        firstnum = "a";
        numdec = 0;
        $("#display").text(displaynum);
    })

    const randnum = []; //--> not issue ->complicated/not simple obj
    const a = 10;//--> has issue --> simple obj
    for (let i = 0; i < 10; i++) {
        randnum[i] = Math.floor(Math.random()*100);
    }

    $('#random-list').css("display", "table-cell");
    
    //var naming to be more meaningful
    const orderedList = document.createElement("ol")
    $("#random-list").append(orderedList);
    
    for (let i = 0; i < 10; i++) {
        let listItem = document.createElement("li");
        $(listItem).text(randnum[i]);
        $(orderedList).append(listItem);
    }



    //localstorage. DOM?document object model css: cascade style sheet 
    //var #1 to store the currecnt value
    //var #2 to store current result
    //var #3 to store current operator

    //task - 2: generate 10 random integers, store them in an array
    //use jQuery to append them in the div container. -> display them in ordered list

});