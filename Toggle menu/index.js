
// Zichtbaar / onzichtbaar maken van menu
const button = function () {
    const knop = document.getElementById('content');
    knop.classList.toggle('visible-content');

};
const verplaatsContent = function () {
    const showContent = document.getElementById('drop-button');
    showContent.addEventListener("click", function () {
        button();
    });

};
verplaatsContent();

// Achtergrond veranderen naar paars

const purple = function () {
    let purpleButton = document.getElementById('body');
    purpleButton.classList.add('paars');

};

const purpleBackground = function () {
    let purpleButton = document.getElementById('pButton');
    purpleButton.addEventListener("click", function () {
        purple();
        button();
    });

};

// Achtergrond veranderen naar turqoise

const turqoise = function () {
    let turqoiseButton = document.getElementById('body');
    turqoiseButton.classList.add('turqoise');
    
};

const turqoiseBackground = function () {
    let turqoiseButton = document.getElementById('tButton');
    turqoiseButton.addEventListener("click", function () {
        turqoise();
        button();
    });

};

// Achtergrond veranderen naar oranje

const orange = function () {
    let orangeButton = document.getElementById('body');
    orangeButton.classList.add('oranje');
    
};

const oranjeBackground = function () {
    let orangeButton = document.getElementById('oButton');
    orangeButton.addEventListener("click", function () {
        orange();
        button();
    });

};

// Achtergrond veranderen naar groen

const groen = function () {
    let groenButton = document.getElementById('body');
    groenButton.classList.add('groen');
   
};

const groeneBackground = function () {
    let groeneButton = document.getElementById('gButton');
    groeneButton.addEventListener("click", function () {
        groen();
        button();
    });

};

purpleBackground();
turqoiseBackground();
oranjeBackground();
groeneBackground();


// Verwijderen classes

const removeP = function () {
    let removeColorP = document.getElementById('body');
    removeColorP.classList.remove('oranje', 'groen', 'turqoise');
};

const removeForPurple = function () { 
    let verwijderP = document.getElementById('pButton');
    verwijderP.addEventListener("click", function () {
        removeP();
    })
};


const removeT = function () {
    let removeColorT = document.getElementById('body');
    removeColorT.classList.remove('oranje', 'groen', 'paars');
};

const removeForTurqoise = function () { 
    let verwijderT = document.getElementById('tButton');
    verwijderT.addEventListener("click", function () {
        removeT();
    })
};

const removeO = function () {
    let removeColorO = document.getElementById('body');
    removeColorO.classList.remove('paars', 'groen', 'turqoise');
};

const removeForOrange = function () { 
    let verwijderP = document.getElementById('oButton');
    verwijderP.addEventListener("click", function () {
        removeO();
    })
};

const removeG = function () {
    let removeColorG = document.getElementById('body');
    removeColorG.classList.remove('oranje', 'paars', 'turqoise');
};

const removeForGreen = function () { 
    let verwijderG = document.getElementById('gButton');
    verwijderG.addEventListener("click", function () {
        removeG();
    })
};


removeForPurple();
removeForGreen();
removeForOrange();
removeForTurqoise();




