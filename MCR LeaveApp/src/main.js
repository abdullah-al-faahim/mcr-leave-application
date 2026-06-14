// Application date-time
let now = new Date();
let dateString = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
document.querySelector('.application-date-time').textContent = dateString + " " + now.toLocaleTimeString();

// Print
document.getElementById('printBtn').addEventListener('click', function() { window.print(); });

$(function() {
	$("#fromDate, #toDate").datepicker({
		dateFormat: 'dd/mm/yy',
		onSelect: function() { calculateDays(); }
	});
	function calculateDays() {
		let from = $("#fromDate").datepicker('getDate');
		let to   = $("#toDate").datepicker('getDate');
		if (from && to) {
			$("#totalDays").val(Math.round((to - from) / (1000*60*60*24)) + 1);
		}
	}
});
