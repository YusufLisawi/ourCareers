import React, { useRef } from "react";
import "./Ofppt.css";

export default function Ofppt() {
	const insertP = useRef(null);
	const text = {
		eng: `There is a significant difference between the study in
				vocational training and universities. The latter allows us only
				to study with papers without the actual application of the
				lessons, which reduces the quality of the study, as well as a
				lack of the amount that the teacher can absorb, and therefore a
				lack of scientific knowledge over the five years that he
				studies. In contrast, we find in the professional training both
				practical and paper application, which helps the trainee to
				understand the information in a full way that contributes to
				entering the job market with high efficiency and in a quick way
				as he graduates, with the possibility of completing the study
				and work at the same time in a group of schools recognized by
				the State`,
		fr: `Il y a une différence significative entre l'étude dans
				la formation professionnelle et les universités. Cette dernière nous permet seulement
				d'étudier avec des documents sans l'application réelle des
				leçons, ce qui diminue la qualité de l'étude, ainsi qu'un
				manque de la quantité que l'enseignant peut absorber, et donc un
				manque de connaissances scientifiques au cours des cinq années qu'il
				qu'il étudie. En revanche, nous trouvons dans la formation professionnelle à la fois
				l'application pratique et sur papier, ce qui aide le stagiaire à
				comprendre l'information d'une manière complète qui contribue à
				à entrer sur le marché du travail avec une grande efficacité et de manière rapide
				lorsqu'il obtient son diplôme, avec la possibilité de compléter l'étude
				et de travailler en même temps dans un groupe d'écoles reconnues par
				l'État`,
		ar: `هناك فرق كبير بين الدراسة في التكوين المهني والجامعات. يسمح لنا هذا الأخير فقط بالدراسة باستخدام الأوراق دون التطبيق الفعلي للدروس، مما يقلل من جودة الدراسة، فضلاً عن نقص الكمية التي يمكن للمعلم استيعابها، وبالتالي نقص المعرفة العلمية على مدى الخمس سنوات التي يدرسها. في المقابل، نجد في التكوين المهني التطبيق العملي والورقي، الذي يساعد المتدرب على فهم المعلومات على نحو كامل يساهم في دخول سوق العمل بكفاءة عالية وبطريقة سريعة أثناء تخرجه، مع إمكانية إكمال الدراسة والعمل في الوقت نفسه في مجموعة من المدارس التي تعترف بها الدولة`,
	};
	function showEng() {
		insertP.current.innerHTML = text.eng;
	}
	function showFr() {
		insertP.current.innerHTML = text.fr;
	}
	function showAr() {
		insertP.current.innerHTML = text.ar;
	}

	return (
		<div className="ofppt">
			<button onClick={showEng}>English</button>
			<button onClick={showFr}>Français</button>
			<button onClick={showAr}>Arabic</button>
			<p ref={insertP}>{text.eng}</p>
		</div>
	);
}
