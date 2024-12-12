using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Dieukientotnghiep
{
    [Key]
    public int Id { get; set; }

    public string? Mssv { get; set; }

    public int? Sobuoilaodong { get; set; }

    public DateOnly? Ngayctxh { get; set; }

    public int? Sotinchi { get; set; }

    public string? Trangthai { get; set; }

    public virtual Sinhvien? MssvNavigation { get; set; }
}
