export class Livro {
  codigo: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: string = '0',
    codEditora: number = 0,
    titulo: string = '',
    resumo: string = '',
    autores: string[] = []
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}