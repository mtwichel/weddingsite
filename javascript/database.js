var db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

$('#search').click(function(){
  var test = getNotYetRsvp();
  console.log(test);
});


 async function getNotYetRsvp(){
   db.doc("rsvp/rsvpList").get()

   .then(function(doc){
    if(doc.exists){
      var obj = doc.data();
      var keys = Object.keys(obj);
      var filtered = keys.filter(function(key) {
        
      });
      return filtered;
    }else{
      console.log("No such doc")
    }
  })
  
  .catch(function(error){
    console.log("error", error);
  });
}
