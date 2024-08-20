


export interface HttpAdapter {
    get<T>( url: string ): Promise<T> //T TIPO GENERICO EVITA COLOCAR ANY
}