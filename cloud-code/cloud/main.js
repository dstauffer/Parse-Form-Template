var Mailgun = require('mailgun');
//ENTER IN MAILGUN KEYBELOW
// Mailgun.initialize('tonicdesign.com', 'key--------');

// Parse.Cloud.beforeSave("SweetObject", function(request, response) {
//   var contactText = "New Mailgun Email From:\n" +
//     "Full Name: " + request.object.get("name") + "\n";

//   Mailgun.sendEmail({
//       to: "stauffer6638@gmail.com",
//       from: "stauffer6638@gmail.com",
//       subject: "mailgun Email",
//       text: contactText
//     }, {
//     success: function(httpResponse) {
//       response.success();
//     },
//     error: function(httpResponse) {
//       console.error(httpResponse);
//       response.error("Uh oh, something went wrong", httpResponse);
//     }
//   });
});
