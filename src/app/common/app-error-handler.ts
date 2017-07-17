import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError (error: Error) {
    alert('Unexpected error occured.');
    console.log(error);
  }
}
