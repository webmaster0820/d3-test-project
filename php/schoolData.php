<?

$dbh = pg_connect("host=localhost port=5433 dbname=postgres user=postgres password=aoeu.123") or die('Could not connect: ' . pg_last_error());

if (!$dbh) {
    die("Error in connection: " . pg_last_error());
}


$sql = '';

// array containing all the school's data
$school_data = [];

// grab each school
$sql = "SELECT array(SELECT DISTINCT SCHOOL FROM bgca_reporting_pre_survey)";
$SCHOOLS = pg_query($dbh, sql);

// build out each school's data
foreach ($SCHOOLS as $school) {
    $data = [];
    $data["name"] = "$school";

    // average
    $sql = "SELECT AVG(TOTAL) FROM bgca_reporting_pre_survey where SCHOOL='$school'";
    $data["average"] = pg_query($dbh, $sql);

    // num students
    $sql = "SELECT COUNT(*) FROM bgca_reporting_pre_survey where SCHOOL='$school'";
    $data["num_students"] = pg_query($dbh, $sql);

    // grades in school
    $sql ="SELECT array(SELECT DISTINCT GRADES FROM bgca_reporting_pre_survey where SCHOOL)='$school'";
    $data["grades"] = [];

    $grades = pg_query($dbh, $sql);

    // build out grade data
    foreach($grades as $grade) {
    	$grade_data = [];
    	$grade_data["grade"] = $grade;

    	$sql = "SELECT AVG(TOTAL) FROM bgca_reporting_pre_survey where SCHOOL='$school' and GRADE='$grade'";
	    $grade_data["average"] = pg_query($dbh, $sql);

	    $sql = "SELECT COUNT(*) FROM bgca_reporting_pre_survey where SCHOOL='$school' and GRADE='$grade'";
	    $grade_data["num_students"] = pg_query($dbh, $sql);

	    $grade_data["overall_results"] = [];
	    $grade_data["results_per_question"] = [];

	    
	    for ($i = 0; $i < 7; $i++) {
	    	$overall_sql = "SELECT COUNT(*) FROM bgca_reporting_pre_survey where SCHOOL='$school' and GRADE='$grade' and TOTAL=$i";
	    	$grade_data["overall_results"]["$i_correct"] = pg_query($dbh, $overall_sql);

	    	if($i > 0) {
	    		$Q = "q"+$i;
	    		$question_sql = "SELECT COUNT(*) FROM bgca_reporting_pre_survey where SCHOOL='$school' and GRADE='$grade' and $Q = 1";
	    		$grade_data["results_per_question"]["question_$i"] = pg_query($dbh, $question_sql);
	    	}
		    
		}

	    array_push($data_data, $grade_data);
    }

    array_push($school_data, $data);
}

header('Content-Type: application/json');
echo json_encode($school_data);

?>