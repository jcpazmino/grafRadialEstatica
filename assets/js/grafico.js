	//mirar los formatos para los diferentes tipos de datos, ejemplo: http://bl.ocks.org/mstanaland/6106487
	var formatLabel = '.,2f';
	//colores de los diferentes elementos del gráfico
	var coloresGraficos = ["#EDC951", "#CC333F", "#00A0B0", "#5BFF33", "#E033FF"];
	//////////////////////// Set-Up ////////////////////////////// 
	//dimensiones del gráfico--->width, height
	var margin = { top: 100, right: 100, bottom: 100, left: 100 },
		width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
		height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

	//////////////////// Draw the Chart ////////////////////////// 
	var color = d3.scale.ordinal()
		.range(coloresGraficos);

	var radarChartOptions = {
		w: width,
		h: height,
		margin: margin,
		maxValue: 0.5,
		levels: 5, // número de circlos que tendrá el grafico
		roundStrokes: true,
		color: color
    };	
    

 /////////////Para cada uno de los elementos a graficar, genera los checkbox   ///////////////////////// 
	function generaCheckbox() {
		$("#textoPregunta").html(titulo)
		var htmlGenerado = "";
        var i=1;
		for (var key in resultGraficar) {
			id = 'campo' + i;
			htmlGenerado += '<div><input class="ml-1" type="checkbox" id="' + id + '" value="'+key+'">';
			htmlGenerado += '<label class="ml-1" id="'+key+'" for="' + id + '"> '+key+'</label></div>';
			i++;
		}
		if(i-1>5) htmlGenerado += '<p class="small text-right font-italic">Seleccionar máximo cinco</p>';
		htmlGenerado+='<button onclick="graficar()" class="btn btn-primary">Graficar</button>';	
		$("#divCheckbox").html(htmlGenerado);
		$("#legendEntidades").html(legendEntidades)
	}

/////////////genera la gráfica de los elementos seleccionados   ///////////////////////// 
	function graficar() {
		contador = 0; arrElementoSel = [];
		$("label").each(function () {
			id = "#" + this.id;
			$(id).css("background-color", "white");
		})
		//arma la lista de los elementos seleccionadas
		$('input:checkbox').each(function () {
			if (this.checked == true) {
				arrElementoSel[contador] = this.value;
				contador++;
			}
        })
    ////valida que se hayan seleccionado elementos a graficar
		if (contador == 0) alert("Debe seleccionar al menos una persona");
		else if (contador > 5) alert("Máximo cinco personas");
		else {		
            data = [];
        ////Para cada elemento seleccionado
			for (let i = 0; i < contador; i++) {
				data[i] = resultGraficar[arrElementoSel[i]];//carga la información de los elementos seleccionadas
                id = "#" + arrElementoSel[i];//genera el id de cada label
                //le pone el color de fondo correspndiente al label de cada elemento
				$(id).css("background-color", coloresGraficos[i]);
			}
		//realiza a gráfica
			RadarChart(".radarChart", data, radarChartOptions);			
			$("#legendGrafica").html(comentario)
		}
	}
