var _alias_HomePoint_init = Game_Battler.prototype.initialize;
Game_Battler.prototype.initialize = function () {
    _alias_HomePoint_init.call(this);
    this._HomePointSet = [0,0,0,0];
    this._deadOrAlive="isAlive";
    this._TriggerDeath == "DontneedToBeTrigged"
};

Game_Interpreter.prototype.command353 = function() {
    $gamePlayer._opacity = 100;
    $gameActors._data[1]._deadOrAlive="isDead";
    setTimeout(function(){
        $gamePlayer.reserveTransfer($gameActors._data[1]._HomePointSet[0],$gameActors._data[1]._HomePointSet[2],$gameActors._data[1]._HomePointSet[3],0,0)
        $gamePlayer._opacity = 255;
        Game_Interpreter.prototype.setWaitMode("");
        $gameActors._data[1]._deadOrAlive="isAlive";
        $gameActors._data[1]._TriggerDeath ="DontneedToBeTrigged"
        Game_Interpreter.prototype.command314(0,0)
     }, 10000);
    return true;
};

Game_Event.prototype.isTriggerIn = function(triggers) {
    if ($gameActors._data[1]._deadOrAlive == "isAlive"){
    return triggers.includes(this._trigger);}
    else {}
};

Scene_Base.prototype.checkGameover = function() {
    if ($gameParty.isAllDead()) {
        if ($gameActors._data[1]._TriggerDeath == "needToBeTrigged")
        Game_Interpreter.prototype.command353();
    }
};

Game_Party.prototype.isAllDead = function() {
    if ($gameActors._data[1]._TriggerDeath == "needToBeTrigged"){
    } else {
    if (Game_Unit.prototype.isAllDead.call(this)) {
        $gameActors._data[1]._TriggerDeath= "needToBeTrigged";
        return this.inBattle() || !this.isEmpty();
    } else {
        return false;
    }}
};