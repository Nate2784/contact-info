const image = document.querySelector('.image-section img');

image.addEventListener('mouseover', () => {
    image.style.animationPlayState = 'paused'; // Pauses animation on hover
});

image.addEventListener('mouseout', () => {
    image.style.animationPlayState = 'running'; // Resumes animation when not hovering
});

// save contact logic
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.save-btn a.save');

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();

        const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Damtie;Tigest;;;
FN:Tigest Damtie
ORG:Cloud 251
TEL;TYPE=CELL:+251940793142
EMAIL:tigest@cloud251.com
URL:http://www.cloud251.com
END:VCARD
        `.trim();

        // Create a Blob from the vCard data
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        // Create a link element and simulate a click to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Tigest_Damtie_Contact.vcf'; // File name
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
        
        // Provide feedback to the user
        alert('The contact vCard has been downloaded. if you\'re on Android Please open and import it into your contacts. Thank you!');
    });
});


// JavaScript to create a cloud effect
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud', 'fa', 'fa-cloud');
        cloud.style.left = Math.random() * (window.innerWidth - 100) + 'px'; // Ensure clouds are within the viewport
        cloud.style.animationDuration = Math.random() * 10 + 15 + 's'; // More variation in speed
        cloud.style.fontSize = Math.random() * 20 + 10 + 'px'; // Random cloud size
        cloud.style.transform = `translateX(${Math.random() * 200 - 100}px)`; // Random horizontal starting point
        body.appendChild(cloud);
    
        // Remove cloud after it falls off screen
        setTimeout(() => {
            cloud.remove();
        }, parseFloat(cloud.style.animationDuration) * 1000); // Match removal with animation duration
    }
    
    setInterval(createCloud, 2000); // Adjusted interval for a more balanced appearance
    
});
