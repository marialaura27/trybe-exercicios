function acordando() {
    return 'Acordando!!';
};
 
function tomarCafe() {
    return 'Bora tomar café!!'
};

function dormir() {
    return 'Partiu dormir!!';
};

const doingThings = (callback) => {
    const res = callback();
    console.log(res);
};

doingThings(dormir);