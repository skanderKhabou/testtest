(function(global){
    const document = global.document;
    document.getElementById('first').addEventListener('click', (x) => {
        alert('you clicked the first item in the list');
    });
    document.getElementById('second').addEventListener('click', (x) => {
        alert('you clicked the second item in the list');
    });
    document.getElementById('third').addEventListener('click', (x) => {
        alert('you clicked the third item in the list');
    });
})(this);

