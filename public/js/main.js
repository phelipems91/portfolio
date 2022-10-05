$(document).ready(function() {
    const divProject1 = $(".project1");
    const divProject2 = $(".project2");
    const divProject3 = $(".project3");
    const projectDescription = $(".projectDescription p");
    const projectPicture = $(".projectPicture img");

    $(".project1").click(function () {
        divProject1.css("opacity", 1);
        divProject2.css("opacity", 0.5);
        divProject3.css("opacity", 0.5);

        projectDescription[0].innerHTML = "A simple bug smasher game developed as an assignment for the COMP125 course at Centennial College. To implement it I used HTML, CSS, and JavaScript. The objective of the game is to score points when clicking on the bug, and the speed increases together with the score. Also, The player can reset the whole game or only the speed.";
        projectDescription[1].innerHTML = "<a href=\"https://github.com/phelipems91/Bug-Smasher-Game\">Repository</a>";
        projectPicture[0].src = "http://localhost:3000/img/bug_smasher.jpg";
    });

    $(".project2").click(function () {
        divProject1.css("opacity", 0.5);
        divProject2.css("opacity", 1);
        divProject3.css("opacity", 0.5);

        projectDescription[0].innerHTML = "A simple photo gallery developed as an assignment for the COMP125 course at Centennial College. To implement it I used HTML, CSS, and JavaScript. The gallery can show 3 or 5 pictures simultaneously. Also, the user can choose 5 favourite pictures, as well as unfavourite them.";
        projectDescription[1].innerHTML = "<a href=\"https://github.com/phelipems91/simple-photo-gallery\">Repository</a>";
        projectPicture[0].src = "http://localhost:3000/img/photo_gallery.jpg";
    });

    $(".project3").click(function () {
        divProject1.css("opacity", 0.5);
        divProject2.css("opacity", 0.5);
        divProject3.css("opacity", 1);

        projectDescription[0].innerHTML = "A more complex photo gallery developed as an assignment for the COMP125 course at Centennial College. To implement it I used HTML, CSS, JavaScript, Jquery, and AJAX. The program loads images from a JSON file and shows them for an amount of time specified. The users can choose to wait for the program to change the images or they can do it themselves. Also, it is possible to reset the time to continuously view the same image.";
        projectDescription[1].innerHTML = "<a href=\"https://github.com/phelipems91/photo-gallery\">Repository</a>";
        projectPicture[0].src = "http://localhost:3000/img/enhanced_photo_gallery.jpg";
    });
});
