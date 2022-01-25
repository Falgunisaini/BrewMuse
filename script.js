function mouseOverCoffee(){
    document.getElementById('coffeeDropDown').style.visibility="visible"
}

function mouseOutCoffee(){
    document.getElementById('coffeeDropDown').style.visibility="hidden"
}

function mouseOverMenu(){
    document.getElementById('menuDropDown').style.visibility="visible"
}

function mouseOutMenu(){
    document.getElementById('menuDropDown').style.visibility="hidden"
}

function mouseOverResponsibility(){
    document.getElementById('responsibilityDropDown').style.visibility="visible"
}

function mouseOutResponsibility(){
    document.getElementById('responsibilityDropDown').style.visibility="hidden"
}

function mouseOverCoffeeHouse(){
    document.getElementById('coffeeHouseDropDown').style.visibility="visible"
}

function mouseOutCoffeeHouse(){
    document.getElementById('coffeeHouseDropDown').style.visibility="hidden"
}

function mouseOverAboutUs(){
    document.getElementById('aboutUsDropDown').style.visibility="visible"
}

function mouseOutAboutUs(){
    document.getElementById('aboutUsDropDown').style.visibility="hidden"
}

function Pour(){
    document.getElementById("changeHead").innerText="Pour-Over";
    document.getElementById("changePara").innerText="Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavour and body.";
}

function Press(){
    document.getElementById("changeHead").innerText="Coffee Press";
    document.getElementById("changePara").innerText="Brewing with a coffee press retains the precious natural oils that paper filters absorb, and extracts the coffee’s full flavour while giving it a consistency that’s thick and rich.";
}

function Iced(){
    document.getElementById("changeHead").innerText="Iced Pour-Over";
    document.getElementById("changePara").innerText="Iced pour-over is a simple and approachable way to make rich, full-flavoured iced coffee one pitcher at a time.";
}

function Brew(){
    document.getElementById("changeHead").innerText="Coffee Brewer";
    document.getElementById("changePara").innerText="Drip coffee is a convenient way to make great coffee. With the right grind and pure water, you can brew a fantastic cup of coffee in a coffee brewer.";
}