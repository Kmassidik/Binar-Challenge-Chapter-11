import { useRef } from "react";
import jsPDF from "jspdf";
import ProfileComponent from "../profile/ProfileComponent";


function ButtonDownload() {
	const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: "a3",
			unit: "px",
            orientation: "landscape"
		});

		// Adding the fonts.
		doc.setFont("Inter-Regular", "normal");

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save("document");
			},
		});
	};

	return (
		<div>
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div ref={reportTemplateRef}>
				<ProfileComponent/>
			</div>
		</div>
	);
}

export default ButtonDownload;