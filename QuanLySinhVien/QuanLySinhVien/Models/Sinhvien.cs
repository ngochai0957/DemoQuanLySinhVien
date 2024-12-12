using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Sinhvien
{
    [Key]
    public string Mssv { get; set; } = null!;

    public string Hoten { get; set; } = null!;

    public string Lop { get; set; } = null!;

    public DateTime Ngaysinh { get; set; }

    public string Gioitinh { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Sdt { get; set; }

    public string? Diachi { get; set; }

    public string? Trangthai { get; set; }

    public string? IsDelete { get; set; }

    public virtual ICollection<Chitiethocphan> Chitiethocphans { get; set; } = new List<Chitiethocphan>();

    public virtual ICollection<Dieukientotnghiep> Dieukientotnghieps { get; set; } = new List<Dieukientotnghiep>();

    public virtual ICollection<Phanhoi> Phanhois { get; set; } = new List<Phanhoi>();
}
