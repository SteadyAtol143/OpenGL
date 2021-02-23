var canvas = document.querySelector("#c");

const gl = canvas.getContext("webgl");

if (gl == null) {
	alert("Alarm!");
}

gl.clearColor(0.0,0.0,0.0,1.0);
gl.clear(gl.COLOR_BUFFER_BIT);


var g_vertex_buffer_data = [
	-1.0, -1.0, 0.0,
	1.0, -1.0, 0.0,
	0.0, 1.0, 0.0,
];

var vertexbuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(g_vertex_buffer_data), gl.STATIC_DRAW);


gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 3);

gl.disableVertexAttribArray(0);