// Data
var projects = [{value: "ALTUSADMIN", text: "Altus", selected: true},{value: "RAPTORSUP", text: "Raptor", selected: false}];
var labels = {
	ALTUSADMIN: ["aLabel1","aLabel2","aLabel3","aLabel4","aLabel5"], 
	RAPTORSUP: ["rLabel1", "rLabel2", "rLabel3"],
	NONE: ["nLabel1", "nLabel2"]
};

// JIRA Filter Builder
var jiraFilterBuilder = {};

// Set the selectedProject
var selectedProject = "";

$('#projectSelect').on("change", function(){
	setSelectedProject();
	setLabelSelection();
	setJqlText();
});

$('#labelsSelect').on("change", function(){
	setSelectedLabels();
	setJqlText();
});


initialize();

function initialize(){
	generateSelectedProject();
	setSelectedProject();
	setLabelSelection();
	setJqlText();
};

function generateSelectedProject(){

	// Add the Project Selection items
	$.each(projects, function (i, project) {

		$('#projectSelect').append($('<option>', { 
			value: project.value,
			text : project.text,
			selected : project.selected
		}));
		
	});	
}

function setSelectedProject(){
	selectedProject = $("#projectSelect").find("option:selected").attr("value");
	jiraFilterBuilder.project = selectedProject;
	console.log("jiraFilterBuilder: " + JSON.stringify(jiraFilterBuilder));
}

function setSelectedLabels(){
	selectedLabels = $("#labelsSelect").val();
	jiraFilterBuilder.selectedLabels = selectedLabels;
	console.log("jiraFilterBuilder: " + JSON.stringify(jiraFilterBuilder));
}

function setLabelSelection(){

	console.log("labelArray (1):" + labels.ALTUSADMIN );
	console.log("labelArray :" + labels[selectedProject] );

	// Remove any existing label selections
	$('#labelsSelect').children().remove();

	// Add the Project Selection items
	$.each(labels[selectedProject], function (i, label) {

		$('#labelsSelect').append($('<option>', { 
			value: label,
			text : label
		}));
		
	});	

	// Add the None ( i.e., applicable to any project )
	$.each(labels.NONE, function (i, label) {

		$('#labelsSelect').append($('<option>', { 
			value: label,
			text : label
		}));
		
	});	

}

function setJqlText(){

	console.log("jiraFilterBuilder: " + JSON.stringify(jiraFilterBuilder));

	var jqlText = "";

	// Project
	jqlText += "project in (";
	jqlText += jiraFilterBuilder.project;
	jqlText += ") "; 

	// Label(s) optional
	if (jiraFilterBuilder.selectedLabels) {

		jqlText += "labels in (";
		jqlText += jiraFilterBuilder.selectedLabels;
		jqlText += ") ";
		
	}

	$('#jqlText').val(jqlText);

}

$(function() {

	var start = moment().subtract(29, 'days');
	var end = moment();

	function cb(start, end) {
		$('#createDateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
	}

	$('#createDateRange').daterangepicker({
		startDate: start,
		endDate: end,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	}, cb);

	cb(start, end);

});





