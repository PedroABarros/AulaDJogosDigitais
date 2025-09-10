function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
    novoSprite: function(sprite) {
        this.sprites.push(sprite);
    },

    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },

    desligar: function() {
        this.ligado = false;
    },

    proximoFrame: function() {
        if (!this.ligado) return;
        this.limparTela();

        // atualiza e desenha todos os sprites
        for (var i = 0; i < this.sprites.length; i++) {
            this.sprites[i].atualizar();
        }

        for (var i = 0; i < this.sprites.length; i++) {
            this.sprites[i].desenhar();
        }

        var animacao = this;
        requestAnimationFrame(function() {
            animacao.proximoFrame();
        });
    },
    limparTela: function(){
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
