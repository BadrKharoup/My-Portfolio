
// BI information (learn more)
function biinfo(){
    document.getElementById("BI").innerHTML="Business intelligence and analytics are now two of the most important factors in ensuring your company's success. If you're looking for someone to help you make the right decision about your business , you've come to the right place.<br> BI(Business Intelligence) is a set of processes, architectures, and technologies that convert raw data into meaningful information that drives profitable business actions. It is a suite of software and services to transform data into actionable intelligence and knowledge. BI has a direct impact on organization's strategic, tactical and operational business decisions. BI supports fact-based decision making using historical data rather than assumptions and gut feeling.";
}


// project checker
function projectchecker() {
    var result = confirm('Do you want to see the whole project?');
    if (result==false){
        event.preventDefault();
    }
}
// blog checker
function Blogchecker() {
    var result = confirm('Do you want to read the entire blog?');
    if (result==false){
        event.preventDefault();
    }
}