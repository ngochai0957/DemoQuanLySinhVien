using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuanLySinhVien.Models;

public partial class Phanquyen
{
    [Key]
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Dangnhap> Dangnhaps { get; set; } = new List<Dangnhap>();
}
