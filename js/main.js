$(".saying").flowtype({ minFont: 36 });
$(".note").flowtype({ minFont: 18, maxFont: 28 });

function generate() {
    var choices = [
        "I hope the next leaf you step on isn't crunchy.",
        "I hope both sides of your pillow are warm.",
        "I hope you step in water while wearing socks.",
        "I hope your sock falls down in your shoe while you're walking.",
        "I hope a rock gets stuck in your shoe and you can't find it or get it out.",
        "I hope you forget what you needed the next time you walk into a room.",
        "I hope you go to Chick-fil-A on a Sunday.",
        "I hope your chicken nuggets never fit in the sauce container.",
        "I hope you make a joke with your friends and no one laughs.",
        "I hope when you microwave your food, the plate gets hot but not the food.",
        "I hope your phone only charges at a certain angle.",
        "I hope you have a really good dream then completely forget it.",
        "I hope you step on a LEGO.",
        "I hope only one of your earbuds stop working.",
        "I hope you get glitter on your carpet.",
        "I hope when you Google something it doesn't give you a direct answer at the top.",
        "I hope you realize you're wrong halfway into an argument.",
        "I hope your shoelaces get wet when you have to tie them again.",
        "I hope the barista at Starbucks spells your name wrong.",
        "I hope water comes out when you squeeze a ketchup bottle.",
        "I hope your toothpaste falls off your toothbrush.",
        "I hope you pour your cereal before realizing you're out of milk.",
        "I hope you run out of toilet paper and don't realize until it's too late.",
        "I hope you get called into work on your day off.",
        "I hope the gum you chew loses its flavor within a few seconds.",
        "I hope you stutter in an argument.",
        'I hope you use the wrong "your"/"you\'re" in an online argument.',
        "I hope you get dog hair stuck on your shirt.",
        "I hope you stub your toe at 3 am.",
        "I hope your phone falls between the seats while you're in a car.",
        "I hope you accidentally drink decaf coffee.",
        "I hope your shower takes longer than usual to warm up.",
        "I hope it takes you three tries to plug in a USB cable.",
        "I hope you reset your password and the website tells you your new password must be different from your old one.",
        "I hope you get a bad haircut.",
        "I hope your sleeves get wet when you wash your hands.",
        "I hope you connect to a Wi-Fi network and your device says there's no internet connection.",
        "I hope a vending machine doesn't give you change.",
        "I hope one of the lenses in your glasses pops out.",
        "I hope your phone gets a barely noticeable crack in the screen.",
        "I hope your pencil eraser gets so small you can't use it."
    ];

    $(".saying").text(choices[Math.floor(Math.random() * choices.length)]);
}

$(generate);
$(".saying").on("click", generate);
$("body").on("keypress", function (event) {
    if (event.which == 32) {
        generate()
    }
});
