import analysisRequestTable from '../templates/analysisRequestTable.hbs';

export function render(data = {}) {
  document.body.innerHTML = analysisRequestTable(data);
}

export function destroy() {
  document.body.innerHTML = "";
}
