using QuanLySinhVien.Models;
using QuanLySinhVien.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QuanLySinhVien.Utils;
using Microsoft.EntityFrameworkCore;

namespace QuanLySinhVien.Services
{
    public class AuthService
    {
        private readonly QuanLySinhVienContext _context;

        public AuthService(QuanLySinhVienContext context)
        {
            _context = context;
        }

        public Dangnhap Authenticate(string username, string password)
        {
            // Mã hóa mật khẩu người dùng nhập vào
            //var hashedPassword = PasswordHelper.HashPassword(password);
            // Tìm kiếm người dùng trong cơ sở dữ liệu
            var account = _context.Dangnhaps.FirstOrDefault(a => a.Username == username && a.Password == password);

            if (account == null)
            {
                return null; // Nếu không tìm thấy người dùng
            }

            return account; // Trả về thông tin người dùng
        }
        public Phanquyen FindRoleName(int roleID)
        {
            // Tìm kiếm người dùng trong cơ sở dữ liệu
            var role = _context.Phanquyens.Find(Convert.ToInt32(roleID));

            if (role == null)
            {
                return null; // Nếu không tìm thấy người dùng
            }

            return role; // Trả về quyền
        }
        public void LogLogin(string username)
        {
            // Kiểm tra nếu đã có phiên đăng nhập chưa kết thúc (Giora == null)
            var existingSession = _context.Lichsudangnhaps
                .Where(l => l.Username == username && l.Giora == null)
                .FirstOrDefault();

            if (existingSession == null)
            {
                // Tạo mới phiên đăng nhập
                var loginHistory = new Lichsudangnhap
                {
                    Username = username,
                    Giovao = DateTime.Now
                };
                 _context.Lichsudangnhaps.Add(loginHistory);
                _context.SaveChanges();
            }
        }


        public void LogLogout(string username)
        {
            var latestLogin = _context.Lichsudangnhaps
                .Where(l => l.Username == username && l.Giora == null) // Chỉ lấy bản ghi chưa logout
                .OrderByDescending(l => l.Giovao)
                .FirstOrDefault();

            if (latestLogin != null)
            {
                // Cập nhật thời gian logout
                latestLogin.Giora = DateTime.Now;
                _context.Lichsudangnhaps.Update(latestLogin);
                _context.SaveChanges();
            }
            else
            {
                Console.WriteLine($"Không tìm thấy phiên đăng nhập nào cần logout cho người dùng: {username}");
            }
        }



    }
}
