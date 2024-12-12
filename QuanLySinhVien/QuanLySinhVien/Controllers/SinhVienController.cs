using Microsoft.AspNetCore.Mvc;
using QuanLySinhVien.Models;
using Newtonsoft.Json;
using QuanLySinhVien.Repository;
using QuanLySinhVien.DTO;
using System;
using System.Linq;

namespace QuanLySinhVien.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SinhVienController : Controller
    {
        private readonly QuanLySinhVienContext _context;

        public SinhVienController(QuanLySinhVienContext context)
        {
            _context = context;
        }

        //[HttpGet("data")]
        //public IActionResult GetData()
        //{
        //    // Trả về dữ liệu mà không cần phân quyền
        //    return Ok("Dữ liệu sinh viên.");
        //}

        [HttpGet("all")]
        public IActionResult GetAllSinhVien()
        {
            // Lấy danh sách sinh viên chỉ với is_delete = NULL
            var students = _context.Sinhviens
                .Where(sv => sv.IsDelete == null)
                .ToList();
            return Ok(students);
        }

        [HttpGet("{mssv}")]
        public IActionResult GetStudent(string mssv)
        {
            var student = _context.Sinhviens
                .Where(s => s.Mssv == mssv)
                .Select(s => new
                {
                    s.Mssv,
                    FullName = s.Hoten, // Ghép họ và tên
                    s.Lop,
                    s.Ngaysinh,
                    s.Diachi,
                    s.Trangthai,
                    s.Email,
                    s.Sdt,
                    s.Gioitinh,
                    
                })
                .FirstOrDefault();

            if (student == null)
            {
                return NotFound("Không tìm thấy sinh viên.");
            }

            return Ok(student);
        }

        [HttpPost("add")]
        public IActionResult AddSinhVien([FromBody] Sinhvien sinhVien)
        {
            if (sinhVien == null)
            {
                return BadRequest("Thông tin sinh viên không hợp lệ.");
            }

            try
            {
                var existingSinhVien = _context.Sinhviens.FirstOrDefault(s => s.Mssv == sinhVien.Mssv);
                if (existingSinhVien != null)
                {
                    return BadRequest(new { message = "Mã số sinh viên đã tồn tại.", existingMssv = existingSinhVien.Mssv, newMssv = sinhVien.Mssv });
                }

                sinhVien.Ngaysinh = DateTime.SpecifyKind(sinhVien.Ngaysinh, DateTimeKind.Utc);

                // Thêm sinh viên vào cơ sở dữ liệu
                _context.Sinhviens.Add(sinhVien);
                _context.SaveChanges();

                // Thêm thông tin vào bảng audit
                var studentAudit = new Studentaudit
                {
                    Mssv = sinhVien.Mssv,
                    Action = "ADD",
                    Changeby = sinhVien.Mssv, // Mã sinh viên có thể điều chỉnh cho phù hợp
                    Actiontime = DateTime.UtcNow,
                    OldData = "",
                    NewData = $"Thêm sinh viên: {sinhVien.Hoten}"
                };
                _context.Studentaudits.Add(studentAudit);
                _context.SaveChanges();

                return Ok(new { message = "Thêm sinh viên thành công." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Lỗi: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpPut("update/{mssv}")]
        public IActionResult UpdateSinhVien(string mssv, [FromBody] UpdateSinhVien updatedSinhVien)
        {
            var sinhVien = _context.Sinhviens.FirstOrDefault(s => s.Mssv == mssv);
            if (sinhVien == null)
            {
                return NotFound(new { message = "Không tìm thấy sinh viên để cập nhật.", mssv });
            }

            try
            {
                if (!string.IsNullOrEmpty(updatedSinhVien.Hoten) && !string.IsNullOrEmpty(updatedSinhVien.Sdt) &&
                    !string.IsNullOrEmpty(updatedSinhVien.Email) && !string.IsNullOrEmpty(updatedSinhVien.Diachi) &&
                    updatedSinhVien.Ngaysinh != default && !string.IsNullOrEmpty(updatedSinhVien.Gioitinh))
                {
                    // Lưu lại dữ liệu cũ và mới
                    var oldData = new { NgaySinh = sinhVien.Ngaysinh };
                    var newData = new { NgaySinh = updatedSinhVien.Ngaysinh };

                    // Chuyển đối tượng thành chuỗi JSON hợp lệ
                    string oldJson = JsonConvert.SerializeObject(oldData);
                    string newJson = JsonConvert.SerializeObject(newData);

                    // Cập nhật dữ liệu sinh viên
                    sinhVien.Hoten = updatedSinhVien.Hoten;
                    sinhVien.Sdt = updatedSinhVien.Sdt;
                    sinhVien.Email = updatedSinhVien.Email;
                    sinhVien.Diachi = updatedSinhVien.Diachi;
                    sinhVien.Ngaysinh = updatedSinhVien.Ngaysinh;
                    sinhVien.Gioitinh = updatedSinhVien.Gioitinh;

                    _context.Sinhviens.Update(sinhVien);
                    _context.SaveChanges();

                    // Thêm vào bảng audit
                    var studentAudit = new Studentaudit
                    {
                        Mssv = sinhVien.Mssv,
                        Action = "UPDATE",
                        Changeby = updatedSinhVien.Mssv, // Cố vấn học tập (mã cvht)
                        Actiontime = DateTime.UtcNow,
                        OldData = oldJson, // Lưu lại dữ liệu cũ
                        NewData = newJson  // Lưu lại dữ liệu mới
                    };

                    _context.Studentaudits.Add(studentAudit);
                    _context.SaveChanges();

                    return Ok(new { message = "Cập nhật sinh viên thành công." });
                }
                else
                {
                    return BadRequest("Thông tin sinh viên không hợp lệ.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Lỗi: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpDelete("delete/{mssv}")]
        public IActionResult DeleteSinhVien(string mssv, [FromBody] DeleteRequest deleteSinhVien)
        {
            var sinhVien = _context.Sinhviens.FirstOrDefault(s => s.Mssv == mssv);
            if (sinhVien == null)
            {
                return NotFound(new { message = "Không tìm thấy sinh viên để xóa.", mssv });
            }

            try
            {
                sinhVien.IsDelete = "true"; // Cập nhật trạng thái là đã xóa

                _context.Sinhviens.Update(sinhVien);
                

                // Thêm vào bảng audit
                var studentAudit = new Studentaudit
                {
                    Mssv = sinhVien.Mssv,
                    Action = "DELETE",
                    Changeby = deleteSinhVien.Username, // Cố vấn học tập (mã cvht)
                    Actiontime = DateTime.UtcNow,
                    OldData = JsonConvert.SerializeObject(new { action = "DELETE", student_name = sinhVien.Hoten }),
                    NewData = JsonConvert.SerializeObject(new { action = "NONE" })
                };

                _context.Studentaudits.Add(studentAudit);
                _context.SaveChanges();

                return Ok(new { message = "Đã xóa sinh viên." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Lỗi: {ex.InnerException?.Message ?? ex.Message}");
            }
        }
    }
}
