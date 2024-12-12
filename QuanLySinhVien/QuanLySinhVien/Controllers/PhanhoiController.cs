using Microsoft.AspNetCore.Mvc;
using QuanLySinhVien.Models;
using System.Linq;
using QuanLySinhVien.Repository;
using QuanLySinhVien.DTO;

namespace QuanLySinhVien.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhanhoiController : ControllerBase
    {
        private readonly QuanLySinhVienContext _context;

        public PhanhoiController(QuanLySinhVienContext context)
        {
            _context = context;
        }
        
        [HttpPost("send")]
        public IActionResult SendFeedback([FromBody] PhanhoiDTO feedback)
        {
            Console.WriteLine($"Mssv: {feedback?.Mssv}, Cauhoi: {feedback?.Cauhoi}");

            if (feedback == null || string.IsNullOrEmpty(feedback.Mssv) || string.IsNullOrEmpty(feedback.Cauhoi))
            {
                return BadRequest(new { message = "Vui lòng điền đầy đủ thông tin phản hồi." });
            }

            var phanhoiEntity = new Phanhoi
            {
                Mssv = feedback.Mssv,
                Cauhoi = feedback.Cauhoi,
                Ngaygui = DateTime.Now
            };

            _context.Phanhois.Add(phanhoiEntity);
            _context.SaveChanges();

            return Ok(new { message = "Phản hồi của bạn đã được gửi thành công!" });
        }




        // Lấy tất cả các phản hồi chưa có câu trả lời
        [HttpGet("unanswered")]
        public IActionResult GetUnansweredFeedbacks()
        {
            var unansweredFeedbacks = _context.Phanhois
                .Where(f => string.IsNullOrEmpty(f.Cautraloi))
                .ToList();

            return Ok(unansweredFeedbacks);
        }

        // Giảng viên trả lời phản hồi
        [HttpPut("reply/{id}")]
        public IActionResult ReplyToFeedback(int id, [FromBody] string response)
        {
            var feedback = _context.Phanhois.FirstOrDefault(f => f.Id == id);

            if (feedback == null)
            {
                return NotFound("Phản hồi không tồn tại.");
            }

            if (string.IsNullOrEmpty(response))
            {
                return BadRequest("Vui lòng nhập câu trả lời.");
            }

            feedback.Cautraloi = response;
            feedback.Ngayphanhoi = DateTime.Now; // Gán thời gian phản hồi
            _context.Phanhois.Update(feedback);
            _context.SaveChanges();

            return Ok(new { message = "Câu trả lời đã được gửi thành công!" });
        }
    }
}
