function generateBadge() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const id = document.getElementById("id").value;

  if (!name || !role || !id) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("badgeName").innerText = name;
  document.getElementById("badgeRole").innerText = role;
  document.getElementById("badgeId").innerText = "ID: " + id;

  // Clear old QR code
  document.getElementById("qrcode").innerHTML = "";

  const qrData = `Name: ${name}\nRole: ${role}\nID: ${id}`;

  new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 120,
    height: 120
  });
}

function downloadBadge() {
  html2canvas(document.getElementById("badge")).then(canvas => {
    const link = document.createElement("a");
    link.download = "qr-badge.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
