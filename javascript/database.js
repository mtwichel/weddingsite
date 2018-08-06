var db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

$('#search').click(function(){
  getNotYetRsvp();
});


 async function getNotYetRsvp(){
  var nameList = [];

   db.collection("rsvpList")
     .where("rsvp", "==", false)
     .get()

   .then(function(querySnapshot){
    if(!querySnapshot.empty){
      querySnapshot.forEach(doc => {
        nameList.push(doc.get('family-name'));
        
      });
    }else{
      console.log("empty");
    }
  })
  
  .catch(function(error){
    console.log("error", error);
  });
}
