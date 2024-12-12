using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Covanhoctap
{
    [Key]
    public string Macvht { get; set; } = null!;

    public string? Hoten { get; set; }

    public string? Email { get; set; }

    public virtual ICollection<Phanhoi> Phanhois { get; set; } = new List<Phanhoi>();
}
