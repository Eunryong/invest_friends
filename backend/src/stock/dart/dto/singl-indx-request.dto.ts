import { IsString, Length, Matches } from 'class-validator';

export class SinglIndxRequest {
  @IsString()
  @Length(40, 40)
  crtfc_key: string;

  @IsString()
  @Length(8, 8)
  corp_code: string;

  @IsString()
  @Length(4, 4)
  bsns_year: string;

  @IsString()
  @Matches(/^(11011|11012|11013|11014)$/)
  reprt_code: string;

  @IsString()
  @Matches(/^(M210000|M220000|M230000|M240000)$/)
  idx_cl_code: string;
}
