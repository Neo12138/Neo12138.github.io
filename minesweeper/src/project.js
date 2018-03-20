require=function t(e,o,n){function c(r,s){if(!o[r]){if(!e[r]){var u="function"==typeof require&&require;if(!s&&u)return u(r,!0);if(i)return i(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var l=o[r]={exports:{}};e[r][0].call(l.exports,function(t){var o=e[r][1][t];return c(o||t)},l,l.exports,t,e,o,n)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)c(n[r]);return c}({Block:[function(t,e,o){"use strict";cc._RF.push(e,"ff61bawufpN1LkjJksO29vu","Block"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc.Color,c=cc._decorator,i=c.ccclass,r=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bg=null,e.bomb=null,e.lblNumRoundBomb=null,e.btn=null,e.mark=null,e.mark2=null,e._status=1,e}return __extends(e,t),o=e,e.prototype.init=function(t){this._numRoundBomb=t,0===this._numRoundBomb&&(this.lblNumRoundBomb.string=""),this._numRoundBomb>0&&(this.lblNumRoundBomb.string=""+this._numRoundBomb,this.lblNumRoundBomb.node.color=o.LABEL_COLOR[this._numRoundBomb-1]),this.lblNumRoundBomb.node.active=!1},e.prototype.autoChangeStatus=function(){this.opened||(++this._status>=4&&(this._status=1),this.changeStatus(this._status))},e.prototype.changeStatus=function(t){switch([0,1,2,3].indexOf(t)>=0&&(this._status=t),this._status){case 0:this.btn.active=!1,this.mark.node.active=!1,this.mark2.node.active=!1,this.bg.node.active=!0,-1===this._numRoundBomb?this.bomb.node.active=!0:this.lblNumRoundBomb.node.active=!0;break;case 1:this.btn.active=!0,this.mark.node.active=!1,this.mark2.node.active=!1,this.bomb.node.active=!1,this.lblNumRoundBomb.node.active=!1;break;case 2:this.btn.active=!0,this.mark.node.active=!0,this.mark2.node.active=!1;break;case 3:this.btn.active=!0,this.mark.node.active=!1,this.mark2.node.active=!0}},e.prototype.setHover=function(t){this.btn.active=!t,this.bg.node.active=t},Object.defineProperty(e.prototype,"isBomb",{get:function(){return-1===this._numRoundBomb},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBlank",{get:function(){return 0===this._numRoundBomb},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"opened",{get:function(){return 0===this._status},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clickable",{get:function(){return 1===this._status},enumerable:!0,configurable:!0}),e.LABEL_COLOR=[new n(0,0,255),new n(0,255,0),new n(255,0,0),new n(0,0,96),new n(64,0,0),new n(0,128,128),new n(255,255,255),new n(255,255,255)],__decorate([r(cc.Sprite)],e.prototype,"bg",void 0),__decorate([r(cc.Sprite)],e.prototype,"bomb",void 0),__decorate([r(cc.Label)],e.prototype,"lblNumRoundBomb",void 0),__decorate([r(cc.Node)],e.prototype,"btn",void 0),__decorate([r(cc.Sprite)],e.prototype,"mark",void 0),__decorate([r(cc.Sprite)],e.prototype,"mark2",void 0),e=o=__decorate([i],e);var o}(cc.Component);o.Block=s,cc._RF.pop()},{}],Form:[function(t,e,o){"use strict";cc._RF.push(e,"66522iqIExF9IIG16XRBtW2","Form"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,i=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vectorX=0,e.vectorY=0,e}return __extends(e,t),e.prototype.onLoad=function(){},e.prototype.show=function(){if(!this._activated){var t=cc.moveBy(.2,cc.p(this.vectorX,this.vectorY)).easing(cc.easeBounceOut());this.node.runAction(t),this._activated=!0}},e.prototype.hide=function(){var t=this;if(this._activated){var e=cc.moveBy(.2,cc.p(-this.vectorX,-this.vectorY)).easing(cc.easeQuadraticActionIn());this.node.runAction(cc.sequence(e,cc.callFunc(function(){t._activated=!1})))}},Object.defineProperty(e.prototype,"activated",{get:function(){return this._activated},enumerable:!0,configurable:!0}),__decorate([i],e.prototype,"vectorX",void 0),__decorate([i],e.prototype,"vectorY",void 0),e=__decorate([c],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],Game2:[function(t,e,o){"use strict";cc._RF.push(e,"e9c1e7COE5FTI9opG2UyHNt","Game2"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,i=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return __extends(e,t),e.prototype.start=function(){console.log("Game.js加载")},e.prototype._onKeyUp=function(t){},__decorate([i(cc.Label)],e.prototype,"label",void 0),__decorate([i],e.prototype,"text",void 0),e=__decorate([c],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"607e8n1139I+LYvEfyS06z2","Game");var n=t("../game/Grid").Grid,c=t("../game/Block").Block,i=(t("../component/Form").Form,t("../menu/SettingPanel").SettingPanel);cc.Class({extends:cc.Component,properties:{board:cc.Node,blocks:cc.Node,blockPrefab:cc.Prefab,gameoverForm:i,settingForm:i},onLoad:function(){this.firstRound=!0,this.grid=null,this.cells=[],this.roundCount=0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this._onKeyUp,this),this.onGameStart()},onUnload:function(){this.settingForm.hide(),this.node.runAction(cc.sequence(cc.fadeOut(.5).easing(cc.easeQuarticActionIn()),cc.callFunc(function(){cc.director.loadScene("menu")})))},_onKeyUp:function(t){switch(t.keyCode){case cc.KEY.escape:this.settingForm.show()}},_drawBoard:function(t,e){for(var o=t.numColumn*e,n=t.numRow*e,i=0;i<t.numRow;i++)for(var r=0;r<t.numColumn;r++){var s,u=this._getIndex(r,i);this.firstRound&&((s=cc.instantiate(this.blockPrefab)).x=e*r,s.y=e*i,this.cells[u]=s,this.blocks.addChild(s)),(s=this.cells[u]).getComponent(c).changeStatus(1),s.getComponent(c).init(t.getCellRoundBombCount(r,i))}this.firstRound&&(this.blocks.width=o,this.blocks.height=n,this.blocks.x-=o/2,this.blocks.y-=n/2,this.firstRound=!1)},_onClickBlock:function(t){var e=this.blocks.convertToNodeSpace(cc.p(t._x,t._y)),o=e.x/36|0,n=e.y/36|0,i=this._getIndex(o,n),r=this.cells[i].getComponent(c);0===t._button&&r.clickable&&(r.changeStatus(0),r.isBomb&&this._onGameOver(),r.isBlank&&this._autoOpenRoundBlock(o,n)),2===t._button&&r.autoChangeStatus()},_onHoverBlock:function(t){var e=this.blocks.convertToNodeSpace(cc.p(t._x,t._y)),o=e.x/36|0,n=e.y/36|0,i=this._getIndex(o,n);if(this.cells[i]){var r=this.cells[i].getComponent(c);this.curBlock&&this.curBlock!=r&&this.curBlock.clickable&&this.curBlock.setHover(!1),r.clickable&&(this.curBlock=r,r.setHover(!0))}},onGameStart:function(t){this.roundCount++,this.gameoverForm.hide(),this.grid=new n(30,16,99),this._drawBoard(this.grid,36),console.log("--------"+this.roundCount+"------------------------------------------");for(var e=this.grid.numRow-1;e>=0;e--){for(var o="",c=0;c<this.grid.numColumn;c++)o+=this.grid.getCellRoundBombCount(c,e)+"\t";console.log(o)}var i=t?i=50:0;setTimeout(function(){this.blocks.on(cc.Node.EventType.MOUSE_UP,this._onClickBlock,this),this.blocks.on(cc.Node.EventType.MOUSE_MOVE,this._onHoverBlock,this)}.bind(this),i)},_onGameOver:function(){for(var t=0;t<this.cells.length;t++){var e=this.cells[t].getComponent(c);e.isBomb&&e.changeStatus(0)}this.blocks.off(cc.Node.EventType.MOUSE_UP,this._onClickBlock,this),this.blocks.off(cc.Node.EventType.MOUSE_MOVE,this._onHoverBlock,this),this.gameoverForm.show()},_autoOpenRoundBlock:function(t,e,o){for(var n=t-1<0?0:t-1,i=e-1<0?0:e-1,r=t+1>=this.grid.numColumn?this.grid.numColumn-1:t+1,s=e+1>=this.grid.numRow?this.grid.numRow-1:e+1,u=n;u<=r;u++)for(var a=i;a<=s;a++){var l=this._getIndex(u,a),h=this.cells[l].getComponent(c);h.opened||(h.changeStatus(0),h.isBlank&&this._autoOpenRoundBlock(u,a))}},_getIndex:function(t,e){return e*this.grid.numColumn+t}}),cc._RF.pop()},{"../component/Form":"Form","../game/Block":"Block","../game/Grid":"Grid","../menu/SettingPanel":"SettingPanel"}],Grid:[function(t,e,o){"use strict";cc._RF.push(e,"116e0s30rNEDYanEztZjJHQ","Grid"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc.director.ccclass,c=function(){function t(t,e,o){this.numColumn=t,this.numRow=e,this.numBomb=o,this.initGrid()}return t.prototype.initGrid=function(){this.cells=[];for(var t=[],e=this.numRow*this.numColumn,o=0;o<e;o++)t[o]=o;for(o=0;o<this.numBomb;o++){var n=Math.random()*(e-o)+o|0,c=t[o];t[o]=t[n],t[n]=c;var i=t[o]%this.numColumn|0,r=t[o]/this.numColumn|0,s=this.getIndex(i,r);this.cells[s]=-1}for(r=0;r<this.numRow;r++)for(i=0;i<this.numColumn;i++){s=this.getIndex(i,r);if(-1!==this.cells[s]){var u=this.countRoundBomb(i,r);this.cells[s]=u}}},t.prototype.getCellRoundBombCount=function(t,e){var o=this.getIndex(t,e);return o<0?(console.log("坐标("+t+","+e+")超出边界"),NaN):this.cells[o]},t.prototype.getIndex=function(t,e){return t<0||e<0?-1:e*this.numColumn+t},t.prototype.countRoundBomb=function(t,e){for(var o=t-1<0?0:t-1,n=e-1<0?0:e-1,c=t+1>=this.numColumn?this.numColumn-1:t+1,i=e+1>=this.numRow?this.numRow-1:e+1,r=0,s=o;s<=c;s++)for(var u=n;u<=i;u++){var a=this.getIndex(s,u);-1===this.cells[a]&&r++}return r},t=__decorate([n],t)}();o.Grid=c,cc._RF.pop()},{}],Menu:[function(t,e,o){"use strict";cc._RF.push(e,"71bb3BST6lIEJhW38h2xV+P","Menu"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,i=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.settingForm=null,e.aboutForm=null,e}return __extends(e,t),e.prototype.onLoad=function(){this.curActiveForm=null},e.prototype.onGameStart=function(){this.node.parent.runAction(cc.sequence(cc.fadeOut(1).easing(cc.easeQuarticActionIn()),cc.callFunc(function(){cc.director.loadScene("game")})))},e.prototype.onSetting=function(){this._activeForm(this.settingForm)},e.prototype.onAbout=function(){this._activeForm(this.aboutForm)},e.prototype.onExit=function(){this._activeForm(null)},e.prototype._activeForm=function(t){t&&t.activated||(this.curActiveForm===t&&(this.curActiveForm=null),this.curActiveForm&&this.curActiveForm.hide(),t&&t.show(),this.curActiveForm=t)},__decorate([i],e.prototype,"settingForm",void 0),__decorate([i],e.prototype,"aboutForm",void 0),e=__decorate([c],e)}(cc.Component);o.Menu=r,cc._RF.pop()},{}],SettingPanel:[function(t,e,o){"use strict";cc._RF.push(e,"d99car3aiVL2KFybTH3XtdM","SettingPanel"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("../component/Form"),c=cc._decorator,i=c.ccclass,r=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e=__decorate([i],e)}(n.default));o.SettingPanel=r;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e}(n.default);o.GameOverPanel=s,cc._RF.pop()},{"../component/Form":"Form"}],enum:[function(t,e,o){"use strict";cc._RF.push(e,"1ba5aEPVrZC4J1m5fiJBNeu","enum");var n;!function(t){t[t.normal=1]="normal",t[t.popup=2]="popup"}(n||(n={})),cc._RF.pop()},{}]},{},["Form","enum","Block","Game","Game2","Grid","Menu","SettingPanel"]);