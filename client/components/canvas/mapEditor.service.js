'use strict';


angular.module('PhaserCanvas').
factory('MapEditor', function() {
    var initPhaserGame = function() {
        function GameBoot() {}

        GameBoot.prototype = {
            preload: function() {
                this.load.image('preloader', 'assets/images/preloader.gif');
            },

            create: function() {
                // configure game
                this.game.input.maxPointers = 1;

                if (this.game.device.desktop) {
                    this.game.scale.pageAlignHorizontally = true;
                } else {
                    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    this.game.scale.minWidth = 480;
                    this.game.scale.minHeight = 260;
                    this.game.scale.maxWidth = 640;
                    this.game.scale.maxHeight = 480;
                    this.game.scale.forceOrientation(true);
                    this.game.scale.pageAlignHorizontally = true;
                    this.game.scale.setScreenSize(true);
                }
                this.game.state.start('preloader');
            }
        };

        function PreloaderState() {
            this.asset = null;
            this.ready = false;
        }

        PreloaderState.prototype = {
            preload: function() {
                this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
                this.load.setPreloadSprite(this.asset);

                // this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
                // this.loadResources();

                this.ready = true;
            },

            loadResources: function() {
                // load your assets here
            },

            create: function() {

            },

            update: function() {
                // if (!!this.ready) {
                this.game.state.start('menu');
                // }
            },

            onLoadComplete: function() {
                // this.ready = true;
            }
        };

        function MenuState() {}

        MenuState.prototype = {
            create: function() {
                var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5,
                    'MENU', {
                        font: '42px Arial',
                        fill: '#ffffff',
                        align: 'center'
                    });
                text.anchor.set(0.5);
                this.input.onDown.add(this.onDown, this);
            },

            update: function() {

            },

            onDown: function() {
                this.game.state.start('game');
            }
        };

        function GameState() {}

        GameState.prototype = {
            create: function() {
                this.input.onDown.add(this.onInputDown, this);
            },

            update: function() {

            },

            onInputDown: function() {
                this.game.state.start('menu');
            }
        };



        // $canvas.html('');//Костыль)

        var game = new Phaser.Game(500, 500, Phaser.AUTO, 'phaser-canvas-container', {
            preload: loadAssets,
            create: createObjects
        });

        var brushTileName = 'empty';

        function loadAssets() {
            game.load.image('beton', '../../assets/textures/tiles/beton.jpg');
            game.load.image('brick', '../../assets/textures/tiles/wall.jpg');
            game.load.image('grass', '../../assets/textures/tiles/tree.jpg');
        }

        function createObjects() {

            var editorTilesInterface = game.add.group();
            var textField = game.add.text(0, 0, 'Empty', {
                fill: '#ffffff'
            });
            var tileSize = 32;

            editorTilesInterface.add(textField);
            editorTilesInterface.create(0, tileSize, 'brick');
            editorTilesInterface.create(0, tileSize * 2, 'beton');
            editorTilesInterface.create(0, tileSize * 3, 'grass');

            editorTilesInterface.forEach(function(image) {
                image.events.onInputDown.add(function() {
                    brushTileName = this.key;
                }, this);
            }, this);


        }

        game.state.add('boot', GameBoot);
        game.state.add('preloader', PreloaderState);
        game.state.add('menu', MenuState);
        game.state.add('game', GameState);
        /* yo phaser:state new-state-files-put-here */


        game.state.start('boot');
    };

    return initPhaserGame;
});