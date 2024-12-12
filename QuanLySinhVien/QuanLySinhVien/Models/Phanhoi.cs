using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuanLySinhVien.Models;

public partial class Phanhoi
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public string? Mssv { get; set; }

    public string? Macvht { get; set; }

    public string? Cauhoi { get; set; }

    public DateTime? Ngaygui { get; set; }

    public string? Cautraloi { get; set; }

    public DateTime? Ngayphanhoi { get; set; }

    public virtual Covanhoctap? MacvhtNavigation { get; set; }

    public virtual Sinhvien? MssvNavigation { get; set; }
}
