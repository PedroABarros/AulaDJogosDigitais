function Quadrado(context) {
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    // Atributos de desenho padrão
    this.cor = "black";
    this.lado = 20; // tamanho do quadrado
}

Quadrado.prototype = {
    atualizar: function () {
        var ctx = this.context;

        // colisão com bordas
        if (this.x < 0 || this.x > ctx.canvas.width - this.lado)
            this.velocidadeX *= -1;
        if (this.y < 0 || this.y > ctx.canvas.height - this.lado)
            this.velocidadeY *= -1;

        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    },

    desenhar: function () {
        var ctx = this.context;
        ctx.save();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.lado, this.lado);
        ctx.restore();
    }
};
