using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Thongbao
{
    [Key]
    public int Id { get; set; }

    public string? Noidung { get; set; }

    public DateTime? Thoigiantao { get; set; }

    public DateTime? Thoigianxoa { get; set; }
}
