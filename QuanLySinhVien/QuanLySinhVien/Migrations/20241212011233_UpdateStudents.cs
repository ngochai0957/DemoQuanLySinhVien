using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuanLySinhVien.Migrations
{
    /// <inheritdoc />
    public partial class UpdateStudents : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Bật IDENTITY_INSERT trước khi insert dữ liệu
            migrationBuilder.Sql("SET IDENTITY_INSERT studentaudit ON");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
