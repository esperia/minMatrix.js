declare namespace minMatrix {
    export interface MatIV {
        new(): MatIVInstance
    }
    class MatIVInstance {
        create(): Float32Array
        identity(dest: Float32Array): Float32Array
        multiply(mat1: Float32Array, mat2: Float32Array, dest: Float32Array): Float32Array
        scale(mat: Float32Array, vec: number[], dest: Float32Array): Float32Array
        translate(mat: Float32Array, vec: number[], dest: Float32Array): Float32Array
        rotate(mat: Float32Array, angle: number, axis: number[], dest: Float32Array): Float32Array
        lookAt(eye: number[], center: number[], up: number[], dest: Float32Array): Float32Array
        perspective(fovy: number, aspect: number, near: number, far: number, dest: Float32Array): Float32Array
        transpose(mat: Float32Array, dest: Float32Array): Float32Array
        inverse(mat: Float32Array, dest: Float32Array): Float32Array
    }
}

declare const matIV: minMatrix.MatIV;
