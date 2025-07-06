export class SinglIndxItem {
  reprt_code: string;
  bsns_year: string;
  corp_code: string;
  stock_code: string;
  stlm_dt: string;
  idx_cl_code: string;
  idx_cl_nm: string;
  idx_code: string;
  idx_nm: string;
  idx_val: string;
}

export class SinglIndxResponse {
  status: string;
  message: string;
  list: SinglIndxItem[];
}
