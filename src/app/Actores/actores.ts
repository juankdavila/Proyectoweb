export interface ActorDTO{
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto?: string;
}

export interface ActoresCreacionDTO{
    nombre: string;
    fechaNacimiento: Date;
    foto?: File;
}