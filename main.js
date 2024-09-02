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
FN:Tigest Damite
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
        link.download = 'Tigist_Damte_Contact.vcf'; // File name
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
        
         // Optionally, provide feedback to the user
         alert('The contact vCard has been downloaded. Please import it into your contacts. Thank you!');
    
    });
});
