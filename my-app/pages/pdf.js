import { useEffect } from 'react';

function PDFPage() {
    useEffect(() => {
        const link = document.createElement('a');
        link.href = '/CarlosCV.pdf'; // Provide the correct path to the PDF
        link.rel = 'noopener noreferrer'; // Security best practice

        // Trigger a click event to start the download
        link.click();
    }, []);

}

export default PDFPage;
