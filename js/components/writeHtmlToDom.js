export const writeHtmlToDom = (domElementToTarget, htmlToInsertIntoTheDom) => {
	domElementToTarget.innerHTML += htmlToInsertIntoTheDom;
};

export const cardsHTML = (array, domElm) => {
	array.forEach(({ name, age, type, id, color }) => {
		document.querySelector(domElm).innerHTML += `
				<div class="col-sm-6">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${name}</h5>
							<p class="card-text">Type: ${type}</p>
							<p class="card-text">Age: ${age}</p>
							<p class="card-text">Color: ${color}</p>
							<div class="readmore">
								
								<i class="far fa-star" data-id="${id}" data-name="${name}" data-type="${type}" data-age="${age}"data-color="${color}"></i>
							</div> 
						</div>
					</div>
				</div>
		`;
	});
};
