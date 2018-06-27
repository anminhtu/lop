  export class GridQueryInfo {    
    constructor(
      public skip:number,
      public take:number,
      public pageSize:number,
      public searchString:string,
      public additionalSearchString:string,
      public sortField:string,
      public sortOrder:string
        ) {
    }
  }
  export class LookupQueryInfo {    
    constructor(
      public Take:number=50,
      public Id:number=0,
      public Query:string=null,
      public ParameterDependencies:string=null
        ) {
    }
  }
  export class FeedbackViewModel {
    constructor(
      public Status: string,
      public Message: string,
      public Description: string,
      public ModelState: any[]) {
    }
  }
  export class LookupItemVo {
    
    constructor(
      public KeyId:number,
      public DisplayName:string,
        ) {
    }
  }
  