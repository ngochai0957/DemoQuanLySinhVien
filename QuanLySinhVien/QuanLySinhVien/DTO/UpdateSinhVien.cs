namespace QuanLySinhVien.DTO
{
    public class UpdateSinhVien
    {
        public string Mssv { get; set; } = null!;

        public string Hoten { get; set; } = null!;

        public string Lop { get; set; } = null!;

        public DateTime Ngaysinh { get; set; }

        public string Gioitinh { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? Sdt { get; set; }

        public string? Diachi { get; set; }

        public string? Trangthai { get; set; }
    }
}
