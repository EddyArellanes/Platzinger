import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  //value is the array data, Args is the word to search
  transform(value: any, args: string){
    //Array data is empty then return null
    if(!value){
      return
    }
    //No word to search then return all elements
    if(!args){
      return value
    }
    args = args.toLowerCase()
    return value.filter( (item) => {
      //Return every element that in includes() match with the word args
      return JSON.stringify(item).toLowerCase().includes(args)
    })
  }

}
