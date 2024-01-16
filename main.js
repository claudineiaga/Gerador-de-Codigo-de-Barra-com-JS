function generateBarcode() {
    let barcodeValue = document.getElementById('barcodeValue').value;

    document.getElementById('barcode').innerHTML = "";

    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let downloadButton = document.createElement("button");
    downloadButton.innerHTML = "Download";
    downloadButton.setAttribute("id", "downloadButton");

    document.getElementById('barcode').appendChild(svgElement);
    document.getElementById('barcode').appendChild(downloadButton);

    JsBarcode(svgElement, barcodeValue, {
        format: "CODE128",
        displayValue: true
    });

    downloadButton.addEventListener("click", function () {
        downloadBarcode(barcodeValue);
    });
}

function downloadBarcode(barcodeValue) {
    let svgContent = document.getElementById('barcode').getElementsByTagName('svg')[0].outerHTML;
    let dataUri = 'data:image/svg+xml;base64,' + btoa(svgContent);

    let link = document.createElement('a');
    link.href = dataUri;
    link.download = 'barcode_' + barcodeValue + '.svg';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}