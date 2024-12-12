using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuanLySinhVien.Models;

public partial class Studentaudit
{
    [Key]
    
    public int Id { get; set; }

    public string? Mssv { get; set; } = null!;

    public string? Action { get; set; }

    public string? OldData { get; set; }

    public string? NewData { get; set; }

    public string? Changeby { get; set; }

    public DateTime? Actiontime { get; set; }
}
