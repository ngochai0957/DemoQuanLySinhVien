using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuanLySinhVien.Migrations
{
    /// <inheritdoc />
    public partial class UpdatePhanhoi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "id",
                table: "studentaudit",
                type: "int",
                unicode: false,
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");
            migrationBuilder.AlterColumn<int>(
                name: "id",
                table: "phanhoi",
                type: "int",
                unicode: false,
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "id",
                table: "studentaudit",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldUnicode: false,
                oldMaxLength: 20)
                .OldAnnotation("SqlServer:Identity", "1, 1");
            migrationBuilder.AlterColumn<int>(
                name: "id",
                table: "phanhoi",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldUnicode: false,
                oldMaxLength: 20)
                .OldAnnotation("SqlServer:Identity", "1, 1");
        }
    }
}
