/**
 * Created by Administrator on 2017/4/21.
 */
export class TableListConfig{
  public defaultColums;
  public defaultColumsHeaderMap;
  constructor(
    public url:string,
    public colums?,
    public operator?,
    public query?,
    public httpMethod:string='post',
    public listAdapter?,
    public pager={
      pageSizeProp:"rowsPerPage",
      pageSizeQueryProp:"pageSize",
      pageNumProp:"currentPage",
      pageNumQueryProp:"pageNum",
      totalRowsProp:"totalRows",
      pageSize:3
    },
  ){

  }
}
