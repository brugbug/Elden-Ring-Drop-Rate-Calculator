function calculateRate(e) {

    let form = document.getElementById("calculateForm")

        e.preventDefault();
        //alert("Form Submitted");
    
        let baseP = document.getElementById("basePercent").value;
        let discovery = document.getElementById("discoveryStat").value;

        let x = Math.floor(baseP * 10 * (discovery / 100));
        let dropRate = (x * 100) / (1000 + (x - (baseP * 10)));
        dropRate = dropRate.toFixed(2);

        console.log("Drop Rate: " + dropRate + "%");

        document.getElementById("resultRate").value = dropRate + "%";
}