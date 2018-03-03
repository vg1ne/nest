export interface IRequestParams {
  currentPage: number;
  sortBy: string;
  sortOrder: string;
}

export class DefaultRequestParams implements IRequestParams{
  currentPage: number;
  sortBy: string;
  sortOrder: string;

  constructor(){
    this.currentPage = 1;
    this.sortBy = 'id';
    this.sortOrder = 'desc';
  }
}
