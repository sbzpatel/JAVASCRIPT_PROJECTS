document.getElementById("generateBtn").addEventListener("click", () => {
    const text = document.getElementById("text").value.trim();

    if(!text) {
        alert("Enter text or Url first!!!");
        return;
    }

    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;

    // console.log(qrURL);

    document.getElementById("qrBox").innerHTML = `
        <img src="${qrURL}" />
    `;
});