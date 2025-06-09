export type Categoria = "2D" | "3D";

export type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  categoria: Categoria;
  duracao: string;
  censura: Censura
}