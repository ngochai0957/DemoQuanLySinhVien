﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuanLySinhVien.Repository;

#nullable disable

namespace QuanLySinhVien.Migrations
{
    [DbContext(typeof(QuanLySinhVienContext))]
    [Migration("20241212011053_UpdateStudent")]
    partial class UpdateStudent
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("QuanLySinhVien.Models.Chitiethocphan", b =>
                {
                    b.Property<int>("Machitiet")
                        .HasColumnType("int")
                        .HasColumnName("machitiet");

                    b.Property<double?>("Diemketthuc")
                        .HasColumnType("float")
                        .HasColumnName("diemketthuc");

                    b.Property<string>("Mahocphan")
                        .HasMaxLength(10)
                        .IsUnicode(false)
                        .HasColumnType("varchar(10)")
                        .HasColumnName("mahocphan");

                    b.Property<string>("Mssv")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("mssv");

                    b.HasKey("Machitiet")
                        .HasName("PK__chitieth__307FF7B17A7062FE");

                    b.HasIndex("Mahocphan");

                    b.HasIndex("Mssv");

                    b.ToTable("chitiethocphan", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Covanhoctap", b =>
                {
                    b.Property<string>("Macvht")
                        .HasMaxLength(10)
                        .IsUnicode(false)
                        .HasColumnType("varchar(10)")
                        .HasColumnName("macvht");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("email");

                    b.Property<string>("Hoten")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("hoten");

                    b.HasKey("Macvht")
                        .HasName("PK__covanhoc__5047971A13C87C05");

                    b.ToTable("covanhoctap", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Dangnhap", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Password")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("password");

                    b.Property<int?>("RoleId")
                        .HasColumnType("int")
                        .HasColumnName("roleId");

                    b.Property<string>("Username")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("username");

                    b.HasKey("Id")
                        .HasName("PK__dangnhap__3213E83FF9715833");

                    b.HasIndex("RoleId");

                    b.ToTable("dangnhap", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Dieukientotnghiep", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Mssv")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("mssv");

                    b.Property<DateOnly?>("Ngayctxh")
                        .HasColumnType("date")
                        .HasColumnName("ngayctxh");

                    b.Property<int?>("Sobuoilaodong")
                        .HasColumnType("int")
                        .HasColumnName("sobuoilaodong");

                    b.Property<int?>("Sotinchi")
                        .HasColumnType("int")
                        .HasColumnName("sotinchi");

                    b.Property<string>("Trangthai")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("trangthai");

                    b.HasKey("Id")
                        .HasName("PK__dieukien__3213E83F2D2A42B4");

                    b.HasIndex("Mssv");

                    b.ToTable("dieukientotnghiep", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Hocphan", b =>
                {
                    b.Property<string>("Mahocphan")
                        .HasMaxLength(10)
                        .IsUnicode(false)
                        .HasColumnType("varchar(10)")
                        .HasColumnName("mahocphan");

                    b.Property<int?>("Hocki")
                        .HasColumnType("int")
                        .HasColumnName("hocki");

                    b.Property<string>("Namhoc")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("namhoc");

                    b.Property<int?>("Sotietlt")
                        .HasColumnType("int")
                        .HasColumnName("sotietlt");

                    b.Property<int?>("Sotietth")
                        .HasColumnType("int")
                        .HasColumnName("sotietth");

                    b.Property<int?>("Sotinchi")
                        .HasColumnType("int")
                        .HasColumnName("sotinchi");

                    b.Property<string>("Tenhocphan")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("tenhocphan");

                    b.HasKey("Mahocphan")
                        .HasName("PK__hocphan__72519D4127A7574C");

                    b.ToTable("hocphan", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Lichsudangnhap", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("Giora")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Giovao")
                        .HasColumnType("datetime2");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("lichsudangnhap", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Phanhoi", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Cauhoi")
                        .HasColumnType("text")
                        .HasColumnName("cauhoi");

                    b.Property<string>("Cautraloi")
                        .HasColumnType("text")
                        .HasColumnName("cautraloi");

                    b.Property<string>("Macvht")
                        .HasMaxLength(10)
                        .IsUnicode(false)
                        .HasColumnType("varchar(10)")
                        .HasColumnName("macvht");

                    b.Property<string>("Mssv")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("mssv");

                    b.Property<DateTime?>("Ngaygui")
                        .HasColumnType("datetime")
                        .HasColumnName("ngaygui");

                    b.Property<DateTime?>("Ngayphanhoi")
                        .HasColumnType("datetime")
                        .HasColumnName("ngayphanhoi");

                    b.HasKey("Id")
                        .HasName("PK__phanhoi__3213E83FA9DD8AD3");

                    b.HasIndex("Macvht");

                    b.HasIndex("Mssv");

                    b.ToTable("phanhoi", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Phanquyen", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Name")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("name");

                    b.HasKey("Id")
                        .HasName("PK__phanquye__3213E83FE091AC9C");

                    b.ToTable("phanquyen", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Sinhvien", b =>
                {
                    b.Property<string>("Mssv")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("mssv");

                    b.Property<string>("Diachi")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("diachi");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("email");

                    b.Property<string>("Gioitinh")
                        .IsRequired()
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("gioitinh");

                    b.Property<string>("Hoten")
                        .IsRequired()
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("hoten");

                    b.Property<string>("IsDelete")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("is_delete");

                    b.Property<string>("Lop")
                        .IsRequired()
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("lop");

                    b.Property<DateTime>("Ngaysinh")
                        .HasColumnType("datetime2")
                        .HasColumnName("ngaysinh");

                    b.Property<string>("Sdt")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("sdt");

                    b.Property<string>("Trangthai")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("trangthai");

                    b.HasKey("Mssv")
                        .HasName("PK__sinhvien__763F1CDD75B2D987");

                    b.ToTable("sinhvien", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Studentaudit", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Action")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("action");

                    b.Property<DateTime?>("Actiontime")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime")
                        .HasColumnName("actiontime")
                        .HasDefaultValueSql("(getdate())");

                    b.Property<string>("Changeby")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("changeby");

                    b.Property<string>("Mssv")
                        .HasMaxLength(10)
                        .IsUnicode(false)
                        .HasColumnType("varchar(10)")
                        .HasColumnName("mssv");

                    b.Property<string>("NewData")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("new_data");

                    b.Property<string>("OldData")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("old_data");

                    b.HasKey("Id")
                        .HasName("PK__studenta__3213E83F06B476D4");

                    b.ToTable("studentaudit", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Thongbao", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Noidung")
                        .HasColumnType("text")
                        .HasColumnName("noidung");

                    b.Property<DateTime?>("Thoigiantao")
                        .HasColumnType("datetime")
                        .HasColumnName("thoigiantao");

                    b.Property<DateTime?>("Thoigianxoa")
                        .HasColumnType("datetime")
                        .HasColumnName("thoigianxoa");

                    b.HasKey("Id")
                        .HasName("PK__thongbao__3213E83F074BB32C");

                    b.ToTable("thongbao", (string)null);
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Chitiethocphan", b =>
                {
                    b.HasOne("QuanLySinhVien.Models.Hocphan", "MahocphanNavigation")
                        .WithMany("Chitiethocphans")
                        .HasForeignKey("Mahocphan")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK__chitietho__mahoc__36B12243");

                    b.HasOne("QuanLySinhVien.Models.Sinhvien", "MssvNavigation")
                        .WithMany("Chitiethocphans")
                        .HasForeignKey("Mssv")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK__chitiethoc__mssv__37A5467C");

                    b.Navigation("MahocphanNavigation");

                    b.Navigation("MssvNavigation");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Dangnhap", b =>
                {
                    b.HasOne("QuanLySinhVien.Models.Phanquyen", "Role")
                        .WithMany("Dangnhaps")
                        .HasForeignKey("RoleId")
                        .HasConstraintName("FK__dangnhap__roleId__2A4B4B5E");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Dieukientotnghiep", b =>
                {
                    b.HasOne("QuanLySinhVien.Models.Sinhvien", "MssvNavigation")
                        .WithMany("Dieukientotnghieps")
                        .HasForeignKey("Mssv")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK__dieukiento__mssv__30F848ED");

                    b.Navigation("MssvNavigation");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Phanhoi", b =>
                {
                    b.HasOne("QuanLySinhVien.Models.Covanhoctap", "MacvhtNavigation")
                        .WithMany("Phanhois")
                        .HasForeignKey("Macvht")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK__phanhoi__macvht__3F466844");

                    b.HasOne("QuanLySinhVien.Models.Sinhvien", "MssvNavigation")
                        .WithMany("Phanhois")
                        .HasForeignKey("Mssv")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK__phanhoi__mssv__403A8C7D");

                    b.Navigation("MacvhtNavigation");

                    b.Navigation("MssvNavigation");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Covanhoctap", b =>
                {
                    b.Navigation("Phanhois");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Hocphan", b =>
                {
                    b.Navigation("Chitiethocphans");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Phanquyen", b =>
                {
                    b.Navigation("Dangnhaps");
                });

            modelBuilder.Entity("QuanLySinhVien.Models.Sinhvien", b =>
                {
                    b.Navigation("Chitiethocphans");

                    b.Navigation("Dieukientotnghieps");

                    b.Navigation("Phanhois");
                });
#pragma warning restore 612, 618
        }
    }
}
