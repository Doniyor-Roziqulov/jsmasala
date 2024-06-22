{
    // 1-misol
    const USERS = [
        {
            name: "Akmal",
            gender: "male",
        },
        {
            name: "Laylo",
            gender: "female",
        },
        {
            name: "Ozodbek",
            gender: "male",
        },
    ];
    function mrMs() {
        for (let value of USERS) {
            if (value.gender == "male") {
                console.log(`Janob ${value.name}`);
            } else {
                console.log(`Xonim ${value.name}`);
            }
        }
        return "";
    }
    // mrMs();
}

{
    // 2-misol
    function card(str, b) {
        if (b == true) {
            console.log(str);
        } else {
            console.log(str.slice(0, 4) + " **** **** **" + str.slice(14, 16));
        }
        return ""
    }
    // console.log(card("8600394949393989", false));
}

{
    // 3-misol
    function perimeterRect(a, b) {
        return `2 * (${a} + ${b}) = ${2 * (a + b)}`;
    }
    // console.log(perimeterRect(5, 6));
}

{
    // 4-misol
    function arrow(str) {
        if (str == "Ha") {
            return `true`;
        } else if (str == "Yoq") {
            return `false`;
        }
    }
    // console.log(arrow("Ha"));
}

{
    // 5-misol
    function telNumber(nomber) {
        if (+"number") {
            return `${nomber}`;
        } else if ("number") {
            return `+${nomber}`;
        } else {
            return `Nomerni to'g'ri kiriting !!!`;
        }
    }
    // console.log(telNumber(+998945626284));
}

{
    // 6-misol

    // decloration function
    function greeting() {
        return "Hello World";
    }
    // console.log(greeting());
    // --------------------------- //

    // arrow function
    const arrow = () => {
        console.log(greeting());
    };
    // arrow();
}

{
    // 7-misol
    function brightness(str) {
        if (str == "dark") {
            return `light`;
        } else if (str == "light") {
            return `dark`;
        } else {
            return `!!!`;
        }
    }
    // console.log(brightness("dark"));
}
