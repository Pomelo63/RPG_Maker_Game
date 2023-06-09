/*********************************************
* Shamaya_job_system_plugin.js
**********************************************/
/*:
* @plugindesc (v.0.1) Création d'un système de changement de job avec mémorisationdes informations de chacun
* @author Shamaya
*
* @command Set Job Lvl
* @desc set job lvl
*/
/*********************************************
 * Historique des évolutions
 * v.0.1 : création du système basique
 *********************************************/
var Imported = Imported || {};
Imported.Shamaya_job_system_plugin= true;
var SJP = SJP || {};

SJP.parameters = PluginManager.parameters('SJP');

const pluginName = 'SJP'

//* Créer une nouvelle Var contenant les informations de chaque classe
var _alias_allClassInformations_init = Game_Battler.prototype.initialize;
Game_Battler.prototype.initialize = function () {
    _alias_allClassInformations_init.call(this);
    this._allClassInformations = [[1,0],[1,0],[1,0]];
    this._sexe = ""
    this._haircolor = "";
};
//* Full recovery

//* Rechargement desinformation de la var si lvl+
var _alias_LvlUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function () {
    _alias_LvlUp.call(this);
    this._allClassInformations[(this._classId-1)][0] = this.level;
};

//* Rechargement desinformation de la var si lvl+
var _alias_LvlDown = Game_Actor.prototype.levelDown;
Game_Actor.prototype.levelDown = function () {
    _alias_LvlDown.call(this);
    this._allClassInformations[(this._classId-1)][0] = this.level;
};

//* Rechargement desinformation de la var si Exp+
var _alias_ExpUp = Game_Actor.prototype.changeExp;
Game_Actor.prototype.changeExp = function (exp, show) {
    _alias_ExpUp.call(this, exp, show);
    this._allClassInformations[(this._classId-1)][1] = this.currentExp();
};
