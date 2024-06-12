var express = require('express');
var app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes

app.get("/dashboard", (req, res) => {
  res.render('site/dashboard', {});
});

app.get("/link1", (req, res) => {
  res.render('site/link1', {});
});

app.get("/phase1/link1", (req, res) => {
  // Define your tab data
  const tabData = {
    tab1: [
      { title: "My Application is still showing under verification at Income Tax Department. What is the timeline to process PAN application?"},
      { title: "My application is not forwarded to NSDL by TIN FC even after submitting required documents." },
      { title: "I haven't received my PAN card yet despatched by the Protean via Courier/Post. "},
      { title: "What is the procedure to make correction in existing PAN database? (Change request application)" },
      { title: "My PAN application is marked for discrepancy. Which document is required to be submitted to clear discrepancy?" },
      { title: "How can I apply for the new PAN card from Protean? "},
      { title: "I have forwarded the required documents, however still my application is not processed." },
      { title: "What is the criteria to opt Reprint of PAN Card facility from Protean?"},

    ],
    tab2: [
      { title: "My Application is still showing under verification at Income Tax Department. What is the timeline to process PAN application?"},
    

    ],
    tab3: [
      { title: "My Application is still showing under verification at Income Tax Department. What is the timeline to process PAN application?"},
      { title: "My application is not forwarded to NSDL by TIN FC even after submitting required documents." },
      { title: "I haven't received my PAN card yet despatched by the Protean via Courier/Post. "},
      { title: "What is the procedure to make correction in existing PAN database? (Change request application)" },
      { title: "My PAN application is marked for discrepancy. Which document is required to be submitted to clear discrepancy?" },
      { title: "How can I apply for the new PAN card from Protean? "},
      { title: "I have forwarded the required documents, however still my application is not processed." },
      { title: "What is the criteria to opt Reprint of PAN Card facility from Protean?"},
    ],
  };

  // Pass the tabData to the template
  res.render('site/phase1/link1', { tabData });
});
app.get("/phase1/link2", (req, res) => {
  // Define your tab data
  const tabData = {
    tab1: [
      { title: "My Application is still showing under verification at Income Tax Department. What is the timeline to process PAN application?"},
      { title: "My application is not forwarded to NSDL by TIN FC even after submitting required documents." },
      { title: "I haven't received my PAN card yet despatched by the Protean via Courier/Post. "},
      { title: "What is the procedure to make correction in existing PAN database? (Change request application)" },
      { title: "My PAN application is marked for discrepancy. Which document is required to be submitted to clear discrepancy?" },
      { title: "How can I apply for the new PAN card from Protean? "},
      { title: "I have forwarded the required documents, however still my application is not processed." },
      { title: "What is the criteria to opt Reprint of PAN Card facility from Protean?"},

    ],
    tab2: [
      { title: "My Application is still showing under verification at Income Tax Department. What is the timeline to process PAN application?"},
    

    ],
    tab3: [
      { title: "My Application is still showing under verification at Income Tax Department. What is the timeline to process PAN application?"},
      { title: "My application is not forwarded to NSDL by TIN FC even after submitting required documents." },
      { title: "I haven't received my PAN card yet despatched by the Protean via Courier/Post. "},
      { title: "What is the procedure to make correction in existing PAN database? (Change request application)" },
      { title: "My PAN application is marked for discrepancy. Which document is required to be submitted to clear discrepancy?" },
      { title: "How can I apply for the new PAN card from Protean? "},
      { title: "I have forwarded the required documents, however still my application is not processed." },
      { title: "What is the criteria to opt Reprint of PAN Card facility from Protean?"},
    ],
  };

  // Pass the tabData to the template
  res.render('site/phase1/link2', { tabData });
});
// Add more route handlers as needed



// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



