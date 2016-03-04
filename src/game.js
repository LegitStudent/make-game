var game = new Phaser.Game(800, 600, Phaser.AUTO, ''),
    Main = function() {};

Main.prototype = {
  preload: function() {
    game.load.image('enemy', 'assets/images/enemy.png');
    game.load.image('player', 'assets/images/player.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'enemy');
  }
}

game.state.add('Main', Main);
game.state.start('Main'); 
