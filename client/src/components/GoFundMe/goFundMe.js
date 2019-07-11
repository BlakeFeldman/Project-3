const gfm = require("gofundme");
gfm.setCampaignUrl("<YOUR CAMPAIGN CODE HERE>");
// as in https://www.gofundme.com/<YOUR CAMPAIGN CODE HERE>


gfm.getLatestDonations((err,result) => {
    if(err) return console.log(err);
    console.log(result);
});
// the output should be a list of the latest donors to a campaign