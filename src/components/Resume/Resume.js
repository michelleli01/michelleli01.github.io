import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import file from "./Li_Michelle.pdf";

function Resume(){
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <div>
            <Document 
            file={ file }
            size="A4">
                <Page pageNumber={ 1 }>
                </Page>
            </Document>
        </div>
    );
}

export default Resume;