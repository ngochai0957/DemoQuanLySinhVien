using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Chitiethocphan
{
    [Key]
    public int Machitiet { get; set; }

    public string? Mssv { get; set; }

    public string? Mahocphan { get; set; }

    public double? Diemketthuc { get; set; }

    public virtual Hocphan? MahocphanNavigation { get; set; }

    public virtual Sinhvien? MssvNavigation { get; set; }
}
