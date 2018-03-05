export interface IRequestParams {
  currentPage: number;
  sortBy: string;
  sortOrder: string;
  itemsPerPage: number;
}

export class DefaultRequestParams implements IRequestParams{
  currentPage: number;
  sortBy: string;
  sortOrder: string;
  itemsPerPage: number;

  constructor(){
    this.currentPage = 0;
    this.sortBy = 'id';
    this.sortOrder = 'desc';
    this.itemsPerPage = 10;
  }
}
