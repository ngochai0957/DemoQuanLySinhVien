using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuanLySinhVien.Migrations
{
    /// <inheritdoc />
    public partial class CreateStudentAuditTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "studentaudit",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),  // Tạo cột IDENTITY
                    mssv = table.Column<string>(type: "nvarchar(50)", nullable: false),  // MSSV dạng chuỗi
                    old_data = table.Column<string>(type: "nvarchar(max)", nullable: true),  // old_data dưới dạng JSON
                    action = table.Column<string>(type: "nvarchar(50)", nullable: false),  // Action thực hiện
                    new_data = table.Column<string>(type: "nvarchar(max)", nullable: true),  // new_data dưới dạng JSON
                    changeby = table.Column<string>(type: "nvarchar(100)", nullable: false),  // Người thay đổi
                    actiontime = table.Column<DateTime>(type: "datetime2", nullable: false)  // Thời gian thay đổi
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_studentaudit", x => x.id);  // Chỉ định khóa chính
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "studentaudit");
        }

    }
}
