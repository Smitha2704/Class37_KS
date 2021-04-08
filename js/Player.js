class Player{
    constructor(){
        this.name="";
        this.index="";
        this.distance=0;
    }
  
  getCount(){
    var playerCountRef  = database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    })
   
  }

  updateCount(count){
    database.ref('/').update({
        playerCount: count
    });
  }

  update(myName){
      var playerIndex= "players/player"+player.index;
      database.ref(playerIndex).set({
          name:myName
      })
  }
}
