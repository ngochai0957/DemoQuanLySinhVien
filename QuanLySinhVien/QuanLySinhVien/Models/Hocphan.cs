using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Hocphan
{
    [Key]
    public string Mahocphan { get; set; } = null!;

    public string? Tenhocphan { get; set; }

    public int? Sotinchi { get; set; }

    public int? Sotietlt { get; set; }

    public int? Sotietth { get; set; }

    public string? Namhoc { get; set; }

    public int? Hocki { get; set; }

    public virtual ICollection<Chitiethocphan> Chitiethocphans { get; set; } = new List<Chitiethocphan>();
}
