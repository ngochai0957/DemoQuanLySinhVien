using Microsoft.AspNetCore.Mvc;
using QuanLySinhVien.Models;
using Newtonsoft.Json;
using QuanLySinhVien.Repository;
using System;
using System.Linq;

namespace QuanLySinhVien.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LichSuDangNhapController : Controller
    {
        private readonly QuanLySinhVienContext _context;

        public LichSuDangNhapController(QuanLySinhVienContext context)
        {
            _context = context;
        }
        [HttpGet("all")]
        public IActionResult GetAllLichSu()
        {
            // Lấy danh sách sinh viên mà không cần phân quyền
            var students = _context.Lichsudangnhaps.ToList();
            return Ok(students);
        }
    }
}
