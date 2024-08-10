function showPopup(element) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const bgColor = window.getComputedStyle(element).backgroundColor;
    popup.style.backgroundColor = bgColor;

    popupContent.innerHTML = `
        <div>
            <button onclick="closePopup()" class="btn btn-danger mb-4">Close</button>
            <h2>See What's Included!</h2>
            <div class="columns">
                <ul class="price">
                    <li class="header">Free</li>
                    <li>2 Short Stories</li>
                    <li>2 Coloring Pages</li>
                    <li>1 Cut-out Kit</li>
                    <li>3 Virtual Reality Scenes</li>
                </ul>
                <ul class="price">
                    <li class="header" style="background-color:#04AA6D">Premium</li>
                    <li>11 Short Stories</li>
                    <li>20 Coloring Pages</li>
                    <li>15 Cut-out Kits</li>
                    <li>50 Virtual Reality Scenes</li>
                </ul>
            </div>
        </div>
    `;

    popup.style.display = 'block';
    playClickSound();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
}
