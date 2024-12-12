using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Lichsudangnhap
{
    [Key] // Khóa chính
    public int Id { get; set; }

    public string Username { get; set; }

    public DateTime Giovao { get; set; }

    public DateTime? Giora { get; set; }
}
