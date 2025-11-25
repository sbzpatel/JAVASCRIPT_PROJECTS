const charset = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    num: '0123456789',
    sym: '!@#$%^&*()-_=+[]{};:,.<>?'
}

document.getElementById("gen").addEventListener("click", generatePassword);

function generatePassword() {
    const len = Math.max(4, Math.min(128, parseInt(document.getElementById("len").value || 12)));
    const uselower = document.getElementById("lower").checked;
    const useupper = document.getElementById("upper").checked;
    const useNum = document.getElementById("num").checked;
    const useSym = document.getElementById("sym").checked;
    
    console.log(len);
    console.log(uselower);

    let pool = '';

    if(uselower) pool += charset.lower;

    if(useupper) pool += charset.upper;

    if(useNum) pool += charset.num;

    if(useSym) pool += charset.sym;

    if(!pool) {
        alert('Select atleast one character type...');
        return;
    }


    // secure-ish random using crypto.getRandomValues when available
    let pw = '';
    const array = new Uint32Array(len);
    window.crypto && crypto.getRandomValues ? crypto.getRandomValues(array) : null;
    for(let i=0;i<len;i++){
        const r = window.crypto && crypto.getRandomValues ? array[i] % pool.length : Math.floor(Math.random()*pool.length);
        pw += pool.charAt(r);
    }
    document.getElementById('out').textContent = pw;
}

document.getElementById('copy').addEventListener('click', () => {
    const text = document.getElementById('out').textContent;
    
    navigator.clipboard?.writeText(text)
    .then(
        () => alert('Copied'),
        () => alert('Copy failed')
    );
});



