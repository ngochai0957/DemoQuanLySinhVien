using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuanLySinhVien.Models;

public partial class Dangnhap
{
    public int? RoleId { get; set; }

    public string? Username { get; set; }

    [Key]
    public int Id { get; set; }

    public string? Password { get; set; }

    [ForeignKey("RoleId")]

    public virtual Phanquyen? Role { get; set; }
}
