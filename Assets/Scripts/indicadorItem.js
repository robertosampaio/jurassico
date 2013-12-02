#pragma strict

var imagens : Texture[];
public var indiceItem : int = 0;

function Start () {
	
}

function Update () {
	this.guiTexture.texture = imagens[indiceItem];
}

function alteraImagem(ind : int) {
	indiceItem = ind;
}