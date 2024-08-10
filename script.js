function showPopup(element) {
    const category = element.classList[1]; // Get the category based on the second class (e.g., 'short-stories')
    const popup = document.getElementById('popup');
    const contentContainer = document.getElementById('contentContainer'); // This is the main content container you want to blur
    const clickSound = document.getElementById('clickSound');

    let contentHTML = '';
    let popupBackgroundColor = '';

    if (category === 'short-stories') {
        contentHTML = `
            <h2>Short Stories</h2>
            <div class="popup-grid-content">
            <div class="card sm text-center">
                <div class="card-body">
                <h5 class="card-title">Story 1</h5>
                <p class="card-text">This is a free short story.</p>
                </div>
            </div>
            <div class="card mb-3 text-center">
                <div class="card-body">
                <h5 class="card-title">Story 2</h5>
                <p class="card-text">This is another free short story.</p>
                </div>
            </div>
            </div>
        `;
        popupBackgroundColor = '#F39C12';
    } else if (category === 'coloring-books') {
        contentHTML = `
            <h2>Coloring Pages</h2>
            <div class="popup-scrollable-content">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Page 1</h5>
                        <p class="card-text">This is a free coloring page.</p>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Page 2</h5>
                        <p class="card-text">This is another free coloring page.</p>
                    </div>
                </div>
            </div>
        `;
        popupBackgroundColor = '#7F8C8D';
    } else if (category === 'cutout-activities') {
        contentHTML = `
            <h2>Cut-out Activities</h2>
            <div class="popup-scrollable-content">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Cut-out 1</h5>
                        <p class="card-text">This is a free cut-out activity.</p>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Cut-out 2</h5>
                        <p class="card-text">This is another free cut-out activity.</p>
                    </div>
                </div>
            </div>
        `;
        popupBackgroundColor = '#2980B9';
    }

    // Update the popup content and background color
    popup.innerHTML = `
        <div class="popup-content" style="background-color: ${popupBackgroundColor};">
            ${contentHTML}
            <button onclick="closePopup()" class="btn btn-danger mt-4">Close</button>
        </div>
    `;

    // Display the popup and apply the blur to the background
    popup.style.display = 'block';
    contentContainer.classList.add('blurred'); // Add blur to the background

    // Play the click sound
    clickSound.play();
}

function closePopup() {
    const popup = document.getElementById('popup');
    const contentContainer = document.getElementById('contentContainer');

    popup.style.display = 'none';
    contentContainer.classList.remove('blurred'); // Remove blur from the background
}
