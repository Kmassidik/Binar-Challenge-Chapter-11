
import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable"
 
export default function getPdf() {
  function generateSimplePDF() {
    const doc = new jsPDF();
    doc.text("Game Binar", 14, 10);

	doc.text("Hartono Nathanza", 150, 10);
    doc.setFont("courier")
 
    autoTable(doc, 
      { head: [["userId", "Total Game", "Total Point"]],
      body: [
        ["1R7m3CWhdBTuLCe6Njnopw224j62", "1", "10"],
        ["R7m3CWhdBTuLCe6Njnopw224j62", "2", "14"],
        ["R7m3CWhdBTuLCe6Njnopw224j62", "3", "32"],
        ["R7m3CWhdBTuLCe6Njnopw224j62", "4", "5"],
        ["R7m3CWhdBTuLCe6Njnopw224j62", "5", "24"],
        ["R7m3CWhdBTuLCe6Njnopw224j62", "6", "21"],
      ],
    })
    doc.save("Document.pdf");
  }
 
  return (
    <div className="App">
      <button className="btn border btn-sm mt-2 mb-3 " onClick={generateSimplePDF}>Download Your Data</button>
    </div>
  );
}