/* Projeto Tabela periódica */

// ====== Declaração de variáveis e criação de objetos  ====== //

// Declaração de variáveis
// Para navegação
let primeiroToqueX = 0
let ultimoToqueX = 0
let grupoAtual = ''
let grupo = ['1A','2A','3A','4A','5A','6A','7A','0']
// Para distribuicao eletrônica e diagrama de LP
const letrasPauling = ['s', 's', 'p', 's', 'p', 's', 'd', 'p', 's', 'd', 'p', 's', 'f', 'd', 'p', 's', 'f', 'd', 'p',];
const linusPauling = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p',];
// Para receber e contar os objetos criados
let elementos = [];
let contadorTrue = 0;
let contadorFalse = 0;
// Para captura de elementos e valores do DOM
let opcaoDropdown = document.getElementById('opcoesPesquisa');
let campoDeBusca = document.getElementById('dadoPesquisa')
let artigoPrincipal = document.getElementById('resultado')
let botaoMenu = document.getElementById('mostrarTodos');
// #Porquesim!
let media = 0;


// Função construtora: cria um objeto e o adiciona ao array 'elementos' se 'estaPronto == true'
function cadastroElemento(eleNome, simb, na, sint, rad, elet, distr, img, pronto, grp) {
	this.nome = eleNome;
	this.simbolo = simb;
	this.numeroAtomico = na;
	this.sintetico = sint;
	this.radioativo = rad;
	this.eletrons = elet;
	this.distriEl = distr;
	this.imagem = img;
	this.diagrama = criaDiagrama(distr);
	this.grupo = grp;
	this.estaPronto = pronto;
	this.estaPronto == true ? elementos.push(this) && contadorTrue++ : contadorFalse++ &&
		console.log(this.nome.toUpperCase() + ' não foi adicionado');
}

// Alimentando a função construtora
elemento1 = new cadastroElemento('Hidrogênio', 'H', 1, false, false, 1, distrEle(1), './imagens/hidrogenio.jpg', true, grupo[0]);
elemento2 = new cadastroElemento('Lítio', 'Li', 3, false, false, 3, distrEle(3), '/imagens/litio.jpg', true, grupo[0]);
elemento3 = new cadastroElemento('Sódio', 'Na', 11, false, false, 11, distrEle(11), '/imagens/sodio.jpg', true, grupo[0]);
elemento4 = new cadastroElemento('Potássio', 'K', 19, false, false, 19, distrEle(19), '/imagens/potassio.jpg', true, grupo[0]);
elemento5 = new cadastroElemento('Rubídio', 'Rb', 37, false, false, 37, distrEle(37), '/imagens/rubidio.jpg', true, grupo[0]);
elemento6 = new cadastroElemento('Césio', 'Cs', 55, false, false, 55, distrEle(55), '/imagens/cesio.jpg', true, grupo[0]);
elemento7 = new cadastroElemento('Frâncio', 'Fr', 87, false, true, 87, distrEle(87), '/imagens/francio.jpg', true, grupo[0]);
elemento8 = new cadastroElemento('Berílio', 'Be', 4, false, false, 4, distrEle(4), '/imagens/berilio.jpg', true, grupo[1]);
elemento9 = new cadastroElemento('Magnésio', 'Mg', 12, false, false, 12, distrEle(12), '/imagens/magnesio.jpg', true, grupo[1]);
elemento10 = new cadastroElemento('Cálcio', 'Ca', 20, false, false, 20, distrEle(20), '/imagens/calcio.jpg', true, grupo[1]);
elemento11 = new cadastroElemento('Estrôncio', 'Sr', 38, false, false, 38, distrEle(38), '/imagens/estroncio.jpg', true, grupo[1]);
elemento12 = new cadastroElemento('Bário', 'Ba', 56, false, false, 56, distrEle(56), '/imagens/bario.jpg', true, grupo[1]);
elemento13 = new cadastroElemento('Rádio', 'Ra', 88, false, true, 88, distrEle(88), '/imagens/radio.jpg', true, grupo[1]);
elemento14 = new cadastroElemento('Boro', 'B', 5, false, false, 5, distrEle(5), '/imagens/boro.jpg', true, grupo[2]);
elemento15 = new cadastroElemento('Alumínio', 'Al', 13, false, false, 13, distrEle(13), '/imagens/aluminio.jpg', true, grupo[2]);
elemento16 = new cadastroElemento('Gálio', 'Ga', 31, false, false, 31, distrEle(31), '/imagens/galio.jpg', true, grupo[2]);
elemento17 = new cadastroElemento('Índio', 'In', 49, false, false, 49, distrEle(49), '/imagens/indio.jpg', true, grupo[2]);
elemento18 = new cadastroElemento('Tálio', 'Tl', 81, false, false, 81, distrEle(81), '/imagens/talio.jpg', true, grupo[2]);
elemento19 = new cadastroElemento('Nihônio', 'Nh', 113, true, false, 113, distrEle(113), '/imagens/nihonio.jpg', true, grupo[2]);
elemento20 = new cadastroElemento('Carbono', 'C', 6, false, false, 6, distrEle(6), '/imagens/carbono.jpg', true, grupo[3]);
elemento21 = new cadastroElemento('Silício', 'Si', 14, false, false, 14, distrEle(14), '/imagens/silicio.jpg', true, grupo[3]);
elemento22 = new cadastroElemento('Germânio', 'Ge', 32, false, false, 32, distrEle(32), '/imagens/germanio.jpg', true, grupo[3]);
elemento23 = new cadastroElemento('Estanho', 'Sn', 50, false, false, 50, distrEle(50), '/imagens/estanho.jpg', true, grupo[3]);
elemento24 = new cadastroElemento('Chumbo', 'Pb', 82, false, false, 82, distrEle(82), '/imagens/chumbo.jpg', true, grupo[3]);
elemento25 = new cadastroElemento('Fleróvio', 'Fl', 114, true, true, 114, distrEle(114), '/imagens/flerovio.jpg', true, grupo[3]);
elemento26 = new cadastroElemento('Nitrogênio', 'N', 7, false, false, 7, distrEle(7), '/imagens/nitrogenio.jpg', true, grupo[4]);
elemento27 = new cadastroElemento('Fósforo', 'P', 15, false, false, 15, distrEle(15), '/imagens/fosforo.jpg', true, grupo[4]);
elemento28 = new cadastroElemento('Arsênio', 'As', 33, false, false, 33, distrEle(33), '/imagens/arsenio.jpg', true, grupo[4]);
elemento29 = new cadastroElemento('Antimônio', 'Sb', 51, false, false, 51, distrEle(51), '/imagens/antimonio.jpg', true, grupo[4]);
elemento30 = new cadastroElemento('Bismuto', 'Bi', 83, false, false, 83, distrEle(83), '/imagens/bismuto.jpg', true, grupo[4]);
elemento31 = new cadastroElemento('Moscóvio', 'Mc', 115, true, true, 115, distrEle(115), '/imagens/moscovio.jpg', true, grupo[4]);
elemento32 = new cadastroElemento('Oxigênio', 'O', 8, false, false, 8, distrEle(8), '/imagens/oxigenio.jpg', true, grupo[5]);
elemento33 = new cadastroElemento('Enxofre', 'S', 16, false, false, 16, distrEle(16), '/imagens/enxofre.jpg', true, grupo[5]);
elemento34 = new cadastroElemento('Selênio', 'Se', 34, false, false, 34, distrEle(34), '/imagens/selenio.jpg', true, grupo[5]);
elemento35 = new cadastroElemento('Telúrio', 'Te', 52, false, false, 52, distrEle(52), '/imagens/telurio.jpg', true, grupo[5]);
elemento36 = new cadastroElemento('Polônio', 'Po', 84, false, true, 84, distrEle(84), '/imagens/polonio.jpg', true, grupo[5]);
elemento37 = new cadastroElemento('Livermório', 'Lv', 116, true, true, 116, distrEle(116), '/imagens/livermorio.jpg', true, grupo[5]);
elemento38 = new cadastroElemento('Flúor', 'F', 9, false, false, 9, distrEle(9), '/imagens/fluor.jpg', true, grupo[6]);
elemento39 = new cadastroElemento('Cloro', 'Cl', 17, false, false, 17, distrEle(17), '/imagens/cloro.jpg', true, grupo[6]);
elemento40 = new cadastroElemento('Bromo', 'Br', 35, false, false, 35, distrEle(35), '/imagens/bromo.jpg', true, grupo[6]);
elemento41 = new cadastroElemento('Iodo', 'I', 53, false, false, 53, distrEle(53), '/imagens/iodo.jpg', true, grupo[6]);
elemento42 = new cadastroElemento('Astato', 'At', 85, false, true, 85, distrEle(85), '/imagens/astato.jpg', true, grupo[6]);
elemento43 = new cadastroElemento('Tenesso', 'Ts', 117, true, true, 117, distrEle(117), '/imagens/tenesso.jpg', true, grupo[6]);
elemento44 = new cadastroElemento('Hélio', 'He', 2, false, false, 2, distrEle(2), '/imagens/helio.jpg', true, grupo[7]);
elemento45 = new cadastroElemento('Neônio', 'Ne', 10, false, false, 10, distrEle(10), '/imagens/neonio.jpg', true, grupo[7]);
elemento46 = new cadastroElemento('Argônio', 'Ar', 18, false, false, 18, distrEle(18), '/imagens/argonio.jpg', true, grupo[7]);
elemento47 = new cadastroElemento('Criptônio', 'Kr', 36, false, false, 36, distrEle(36), '/imagens/criptonio.jpg', true, grupo[7]);
elemento48 = new cadastroElemento('Xenônio', 'Xe', 54, false, false, 54, distrEle(54), '/imagens/xenonio.jpg', true, grupo[7]);
elemento49 = new cadastroElemento('Radônio', 'Rn', 86, false, true, 86, distrEle(86), '/imagens/radonio.jpg', true, grupo[7]);
elemento50 = new cadastroElemento('Oganessônio', 'Og', 118, true, true, 118, distrEle(118), '/imagens/oganessonio.jpg', true, grupo[7]);
// console.log(elementos);




// ====== Página inicial e função de busca  ====== //


// Recebendo os dados do formulário de busca, tratando e chamando a funcao relatorio
function iniciarBusca() {
	if (opcaoDropdown.value == 'radioativo' || opcaoDropdown.value == 'sintetico') {
		valorCampoBusca = true;
	} else {
		valorCampoBusca = campoDeBusca.value.toLowerCase().replace(/á|â|ã/gi,"a").replace(/é|ê/gi,"e").replace(/í/gi,"i").replace(/ó|ô|õ/gi,"o").replace(/ç/gi,"c");
	}
	return relatorio(elementos, opcaoDropdown.value, valorCampoBusca);
}

// Função para gerar o relatório após a busca realizada com parametros tratados pela funcao iniciarBusca()
function relatorio(nomeArray, propriedade, valor) {
	desativarNavegacao()
	if (typeof valor === 'string'){
		arrayFiltrado = nomeArray.filter((x) => x[propriedade].toLowerCase().replace(/á|â|ã/gi,"a").replace(/é|ê/gi,"e").replace(/í/gi,"i").replace(/ó|ô|õ/gi,"o").replace(/ç/gi,"c") == valor); // se (callback) => condição === true adicione o elemento ao array arrayFiltrado
		return imprimir(arrayFiltrado)
	}
	else if (typeof valor === 'boolean'){
		arrayFiltrado = nomeArray.filter((x) => x[propriedade] == valor);
		return imprimir(arrayFiltrado)
	}
}

// Funcção para imprimir no DOM todos os resultados encontrados pela função relatorio()
function imprimir(arrayFiltrado){
	if (arrayFiltrado.length >= 1) {
		artigoPrincipal.innerHTML = arrayFiltrado.map((item) => {
            console.log(item.nome + '\n' + item.diagrama)
			console.log(item.distriEl.toString());
                if (item.radioativo == true) {
                    iconeRadioativo = `<img class="iconeRad" src="/imagens/icone-radioativo.svg"></img>`
                } else iconeRadioativo = ''
            return ` 
				<li class="listaElemento"> 
                	${iconeRadioativo}       
                    <h2>${item.nome.toUpperCase()}</h2>
                    <p>
                        Símbolo: ${item.simbolo}</br>
                        É sintético: ${item.sintetico}</br>
                        É radioativo: ${item.radioativo}
                    </p>
                    <img src="${item.imagem}"></img>
                    <span class="del"> 
                        Distribuição elerônica completa: ${item.distriEl.toString().replaceAll(',', ', ')}
                    </span>
                    <aside class="diag">
                        <h3>Diagrama de Linus Pauling</h3>
                        <span class="diag">
                            ${item.diagrama}
                        </span>
                    </aside></br>
            	</li>`}).join('');
	}
	else {
		return artigoPrincipal.innerHTML = "<br><h1>Nenhum elemento encontrado</h1>";
	}
	return ((artigoPrincipal.innerHTML), efeitoFade(),document.querySelector('.explicacao').innerHTML = '');
}

// Função para imprimir no DOM todos os objetos cadastrados, iniciando no grupo que for passado como parâmetro (ex.: 1A)
function printTodos(grupo) {
	filtrado = elementos.filter((x) => x.grupo == grupo);
	artigoPrincipal.innerHTML = filtrado.map((item) => {
		// console.log(item.nome + '\n' + item.diagrama),
		// console.log(item.distriEl.toString());
		if (item.radioativo == true) {
			iconeRadioativo = `<img class="iconeRad" src="/imagens/icone-radioativo.svg"></img>`
		} else iconeRadioativo = ''
		return `
        	<li class="listaElemento">        
				${iconeRadioativo}
				<h2>${item.nome.toUpperCase()}</h2>
				<p>
					Símbolo: ${item.simbolo}</br>
					É sintético: ${item.sintetico}</br>
					É radioativo: ${item.radioativo}
				</p>
				<img src="${item.imagem}"></img>
				<span class="del"> 
					Distribuição elerônica completa: ${item.distriEl.toString().replaceAll(',', ', ')}
				</span>
				<aside class="diag">
					<h3>Diagrama de Linus Pauling</h3>
					<span class="diag">
						${item.diagrama}
					</span>
				</aside></br>
        	</li>`}).join(''), grupoAtual = grupo, document.querySelector('.explicacao').innerHTML = 
						`Como navegar pelos grupos de elementos? <br>
						No computador utilize a setas do teclado <br>
						<img src="./imagens/navTeclado.gif" alt=""> <br>
						Em dispositivos touchscreen faça um swipe para esqueda/direita<br>
						<img src="./imagens/navSwipe.gif" alt="">`;
	efeitoFade();
	ativarNavegacao()
}




// ====== Distribuicao eletrônica e diagrama de Linus Pauling ====== //


// Funcao que gera a distribuicao eletronica completa apenas informando a quandidade de eletrons
// é chamada como argumento para construção dos objetos
function distrEle(numEletrons) {
	let linusNumero = [];
	let distribuicaoEletronica = [];
	for (i in letrasPauling) {
		if (numEletrons > 0) {
			if (letrasPauling[i] == 's') {
				if (numEletrons - 2 >= 0) {
					linusNumero.push(2);
					numEletrons -= 2;
				} else {
					linusNumero.push(numEletrons);
					numEletrons -= 2;
				}
			} else if (letrasPauling[i] == 'p') {
				if (numEletrons - 6 >= 0) {
					linusNumero.push(6);
					numEletrons -= 6;
				} else {
					linusNumero.push(numEletrons);
					numEletrons -= 6;
				}
			} else if (letrasPauling[i] == 'd') {
				if (numEletrons - 10 >= 0) {
					linusNumero.push(10);
					numEletrons -= 10;
				} else {
					linusNumero.push(numEletrons);
					numEletrons -= 10;
				}
			} else if (letrasPauling[i] == 'f') {
				if (numEletrons - 14 >= 0) {
					linusNumero.push(14);
					numEletrons -= 14;
				} else {
					linusNumero.push(numEletrons);
					numEletrons -= 14;
				}
			}
		} else {
			break;
		}
	}
	for (i = 0; i < linusNumero.length; i++) {
		distribuicaoEletronica.push(linusPauling[i] + linusNumero[i]);
	}
	return distribuicaoEletronica;
}

// Função que recebe o resultado da função distrEle() e cria a formatação do diagrama de LP para cada elemento
// é chamada como argumento para construção dos objetos
function criaDiagrama(distriEle) {
	arrayFinal = [...distriEle]; // não posso alterar o array original pois é utilizado em outro local
	for (i = 0; i < linusPauling.length; i++) {
		if (arrayFinal[i] == undefined) {
			arrayFinal[i] = '<span class="apagado">' + linusPauling[i] + '</span>';
		}
	}
	return (
		'<p>' + arrayFinal[0] + '<br>' +
		arrayFinal[1] + ' ' + arrayFinal[2] + '<br>' +
		arrayFinal[3] + ' ' + arrayFinal[4] + ' ' + arrayFinal[6] + '<br>' +
		arrayFinal[5] + ' ' + arrayFinal[7] + ' ' + arrayFinal[9] + ' ' + arrayFinal[12] + '<br>' +
		arrayFinal[8] + ' ' + arrayFinal[10] + ' ' + arrayFinal[13] + ' ' + arrayFinal[16] + '<br>' +
		arrayFinal[11] + ' ' + arrayFinal[14] + ' ' + arrayFinal[17] + '<br>' +
		arrayFinal[15] + ' ' + arrayFinal[18] + '</p>'
	);
}




// ====== Qualidade de Vida e Navegação ====== //


// Funcao que capta o local da tela onde ocorre o primeiro toque, no eixo X, e salva na variável
function comecaTouch(e){
	primeiroToqueX = e.changedTouches[0].clientX
}

// Funcao que capta o local da tela onde ocorre o último toque, no eixo X, e salva na variável.
function terminaTouch(e){
	ultimoToqueX = e.changedTouches[0].clientX
	detectaDireitaEsquerda()
}

// Funções para ativar a navegação pelos grupo na página principal e desativar nos resultados de busca
function ativarNavegacao() {
	window.addEventListener('keydown', onClick);
	window.addEventListener('touchstart', comecaTouch);
	window.addEventListener('touchend', terminaTouch);
}	 
function desativarNavegacao() {
	window.removeEventListener('keydown', onClick);
	window.removeEventListener('touchstart', comecaTouch);
	window.removeEventListener('touchend', terminaTouch);
}
	 
// Função para navegar pelos grupos utilizando as setas do teclado 		
function onClick(e) {
	if (e.key == "ArrowRight"){
		for (i=0; i<grupo.length;i++){
			if (grupoAtual == grupo[i] && i<grupo.length-1){
				grupoAtual = grupo[i+1]
				return printTodos(grupoAtual),document.querySelector('#mostrarTodos').scrollIntoView(true)
			}
		}
	}
	else if (e.key == "ArrowLeft"){ 
		for (i=0; i<grupo.length;i++){
			if (grupoAtual == grupo[i] && i>0){
				grupoAtual = grupo[i-1]
				return printTodos(grupoAtual),document.querySelector('#mostrarTodos').scrollIntoView(true)
			}
		}		
	}
}
	 
// Funcao para determinar se o touch swipe foi para esquerda ou direita, navegar pelos grupos de acordo com o resultado    
function detectaDireitaEsquerda() {
	if ((ultimoToqueX - primeiroToqueX > 150)) {
		for (i=0; i<grupo.length;i++){
			if (grupoAtual == grupo[i] && i>0){
				grupoAtual = grupo[i-1]
				return deslizaLado('esquerda') ,document.querySelector('#mostrarTodos').scrollIntoView(true)
			}

		}
	}
	else if ((ultimoToqueX - primeiroToqueX < -150)) {
		for (i=0; i<grupo.length;i++){
			if (grupoAtual == grupo[i] && i<grupo.length-1){
				grupoAtual = grupo[i+1]
				return deslizaLado('direita') ,document.querySelector('#mostrarTodos').scrollIntoView(true)
			}
		}	
	}
}

// Navega pelos grupos na tela principal com base no resultado do touch swipe
function deslizaLado(lado) {
	if (lado == 'esquerda'){
		for (let i = 0; i < elementsArray.length; i++) {
			let elem = elementsArray[i];
			if (document.querySelector('.listaElemento').classList[1]='inView'){
			elem.classList.add('scrollRight')}		
		}
		setTimeout(function () {
			printTodos(grupoAtual); // vai ser executada após 40ms para evitar conflito nos efeitos
		}, 40);
	}
	if (lado == 'direita'){
		for (let i = 0; i < elementsArray.length; i++) {
			let elem = elementsArray[i];
			if (document.querySelector('.listaElemento').classList[1]='inView'){
			elem.classList.add('scrollLeft')}
		}			
		setTimeout(function () {
			printTodos(grupoAtual); // vai ser executada após 40ms para evitar conflito nos efeitos
		}, 40);
	}
}




// ====== Enfeites ====== //


// Ao selecionar 'radioativo' ou 'sintetico no menu, o campo de pesquisa será desabilitado (e reabilitado ao selecionar outra opção)
function resetarCampoPesquisa() {
	if (opcaoDropdown.value == 'radioativo' || opcaoDropdown.value == 'sintetico') {
		campoDeBusca.value = ''
		campoDeBusca.disabled = true;
	} else campoDeBusca.disabled = false;
}

// Efeito rolagem animada
let alturaDaTela = window.innerHeight;
function efeitoFade() {
	window.addEventListener('scroll', fade);
	elementsArray = document.querySelectorAll('.listaElemento');
	window.addEventListener('resize', fade);
	fade();
}
function fade() {
	alturaDaTela = window.innerHeight;
	for (let i = 0; i < elementsArray.length; i++) {
		let elem = elementsArray[i];
		let posicaoBoxElemento = elem.getBoundingClientRect();
		if (posicaoBoxElemento.top >= posicaoBoxElemento.height * 0.85 * -1 && posicaoBoxElemento.top <= alturaDaTela - 50) {
			elem.classList.add('inView');
		} else {
			elem.classList.remove('inView');
		}
	}
}




// ====== Frufrus 10necessários ====== //


// Verificador de status do array através de booleano. Informa se todos os elementos foram cadastrados ou algum apresentou erro.
if (contadorFalse >= 1) {
	console.log('Todos os elementos estão cadastrados: ' + false);
	console.log('Elementos não cadastrados: ' + contadorFalse);
	console.log('Elementos cadastrados: ' + contadorTrue);
} else {
	console.log('Todos os elementos estão cadastrados: ' + true);
	console.log('Elementos cadastrados: ' + contadorTrue);
}

// Função para calcular a média dos numeros atômicos pq a Labenu pediu
function calcMedia(arrayObjetos) {
	for (i in elementos) {
		media += elementos[i].numeroAtomico;
	}
	console.log(
		'Média dos números atômicos ' + (media / elementos.length).toFixed(2)
	);
}
calcMedia(elementos);
