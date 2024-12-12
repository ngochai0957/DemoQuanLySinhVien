using QuanLySinhVien.Models;
using QuanLySinhVien.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using QuanLySinhVien.DTO;
using Azure;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace QuanLySinhVien.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AuthService _authService;

        public AuthController(IConfiguration configuration, AuthService authService)
        {
            _configuration = configuration;
            _authService = authService;
        }

     
        [HttpPost("login")]
        public IActionResult Login([FromBody] DangnhapLoginDTO model)
        {
            var account = _authService.Authenticate(model.Username, model.Password);
            if (account == null)
            {
                return Unauthorized("Tên đăng nhập hoặc mật khẩu không đúng.");
            }

            // Log login
            _authService.LogLogin(model.Username);
            var role = _authService.FindRoleName(Convert.ToInt32(account.RoleId));
            var response = new LoginResponseDTO
            {
                FullName = account.Username,
                RoleID = account.Id,
                RoleName = role.Name
            };
            return Ok(response);
        }


        [HttpPost("logout")]
        public IActionResult Logout([FromBody] LogoutRequest request)
        {
            if (string.IsNullOrEmpty(request.Username))
            {
                return BadRequest("Username is required.");
            }

            try
            {
                _authService.LogLogout(request.Username);
                return Ok(new { message = "Logout successfully updated" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error updating logout", error = ex.Message });
            }
        }

        



    }
}



//using QuanLySinhVien.Models;
//using QuanLySinhVien.Services;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
//using Microsoft.IdentityModel.Tokens;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;
//using QuanLySinhVien.DTO;

//namespace QuanLySinhVien.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class AuthController : ControllerBase
//    {
//        private readonly IConfiguration _configuration;

//        private readonly AuthService _authService;

//        public AuthController(IConfiguration configuration, AuthService authService)
//        {
//            _configuration = configuration;
//            _authService = authService;
//        }

//        [HttpPost("login")]
//        public IActionResult Login([FromBody] DangnhapLoginDTO model)
//        {
//            // Sử dụng service để xác thực người dùng
//            var account = _authService.Authenticate(model.Username, model.Password);
//            if (account == null)
//            {
//                return Unauthorized("Tên đăng nhập hoặc mật khẩu không đúng.");
//            }

//            // Tìm tên role của người dùng
//            var role = _authService.FindRoleName(Convert.ToInt32(account.RoleId));

//            // Tạo token JWT
//            var token = GenerateJwtToken(model.Username, role.Name.ToString());

//            // Trả về thông tin người dùng cùng với token
//            var response = new LoginResponseDTO
//            {
//                FullName = account.Username,
//                RoleID = account.Id,
//                RoleName = role.Name,
//                Token = token
//            };

//            return Ok(response);
//        }


//        private string GenerateJwtToken(string username, string RoleName)
//        {
//            var key = _configuration.GetValue<string>("Jwt:Key");

//            if (string.IsNullOrEmpty(key) || key.Length < 32)
//            {
//                throw new InvalidOperationException("Khóa bảo mật phải có độ dài ít nhất 32 bytes (256 bits).");
//            }

//            var symmetricKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
//            var claims = new[]
//            {
//                    new Claim(JwtRegisteredClaimNames.Sub, username),
//                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
//                    new Claim("RoleName", RoleName.ToString()) //xác thực quyền truy cập vào endpoint
//                 };


//            if (string.IsNullOrEmpty(key))
//            {
//                throw new InvalidOperationException("Khóa bảo mật không được cấu hình trong appsettings.json");
//            }


//            var creds = new SigningCredentials(symmetricKey, SecurityAlgorithms.HmacSha256);

//            var token = new JwtSecurityToken(
//                issuer: _configuration["Jwt:Issuer"],
//                audience: _configuration["Jwt:Audience"],
//                claims: claims,
//                expires: DateTime.Now.AddMinutes(Convert.ToDouble(_configuration["Jwt:ExpireMinutes"])),
//                signingCredentials: creds
//            );

//            return new JwtSecurityTokenHandler().WriteToken(token);
//        }
//    }
//}
