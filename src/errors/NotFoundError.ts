import { BaseError } from "./BaseError";

export class NotFountError extends BaseError{
  constructor(
    message: string = "Recurso não encontrado"
  ){
    super(404, message)
  }
}