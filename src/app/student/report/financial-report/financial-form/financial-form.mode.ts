export class FinancialForm{
  name_activity ?: string;
  penganjur ?: string;
  pengarah ?: string;
  pegawai_bertanggungjawab ?:string;
  bajet_diluluskan ?: string;
  penama_kelulusan ?:string;
  kelulusan_oleh ?: string;
  jumlah_cek ?: string;
  penerima_cek ?:string;
  constructor(name_activity :string, penganjur : string, pengarah : string,
    pegawai_bertanggungjawab : string,bajet_diluluskan : string, penama_kelulusan :string, kelulusan_oleh : string,
    jumlah_cek : string,penerima_cek : string){
    this.name_activity = name_activity;
    this.penganjur = penganjur;
    this.pengarah = pengarah;
    this.pegawai_bertanggungjawab = pegawai_bertanggungjawab;
    this.bajet_diluluskan = bajet_diluluskan;
    this.penama_kelulusan = penama_kelulusan;
    this.kelulusan_oleh = kelulusan_oleh;
    this.jumlah_cek = jumlah_cek;
    this.penerima_cek = penerima_cek;
  }
}
