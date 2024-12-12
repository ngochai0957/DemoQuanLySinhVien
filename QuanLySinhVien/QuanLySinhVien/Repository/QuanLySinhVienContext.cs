using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using QuanLySinhVien.Models;

namespace QuanLySinhVien.Repository;

public partial class QuanLySinhVienContext : DbContext
{
    public QuanLySinhVienContext()
    {
    }

    public QuanLySinhVienContext(DbContextOptions<QuanLySinhVienContext> options)
        : base(options)
    {
    }
  
    public virtual DbSet<Chitiethocphan> Chitiethocphans { get; set; }

    public virtual DbSet<Covanhoctap> Covanhoctaps { get; set; }

    public virtual DbSet<Dangnhap> Dangnhaps { get; set; }

    public virtual DbSet<Dieukientotnghiep> Dieukientotnghieps { get; set; }

    public virtual DbSet<Hocphan> Hocphans { get; set; }

    public virtual DbSet<Lichsudangnhap> Lichsudangnhaps { get; set; }
    
    public virtual DbSet<Phanhoi> Phanhois { get; set; }

    public virtual DbSet<Phanquyen> Phanquyens { get; set; }

    public virtual DbSet<Sinhvien> Sinhviens { get; set; }

    public virtual DbSet<Studentaudit> Studentaudits { get; set; }

    public virtual DbSet<Thongbao> Thongbaos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=HAIDZ\\SQLEXPRESS;Database=QuanLySinhVien;Integrated Security=True;Trust Server Certificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Chitiethocphan>(entity =>
        {
            entity.HasKey(e => e.Machitiet).HasName("PK__chitieth__307FF7B17A7062FE");

            entity.ToTable("chitiethocphan");

            entity.Property(e => e.Machitiet)
                .ValueGeneratedNever()
                .HasColumnName("machitiet");
            entity.Property(e => e.Diemketthuc).HasColumnName("diemketthuc");
            entity.Property(e => e.Mahocphan)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("mahocphan");
            entity.Property(e => e.Mssv)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("mssv");

            entity.HasOne(d => d.MahocphanNavigation).WithMany(p => p.Chitiethocphans)
                .HasForeignKey(d => d.Mahocphan)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__chitietho__mahoc__36B12243");

            entity.HasOne(d => d.MssvNavigation).WithMany(p => p.Chitiethocphans)
                .HasForeignKey(d => d.Mssv)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__chitiethoc__mssv__37A5467C");
        });

        modelBuilder.Entity<Covanhoctap>(entity =>
        {
            entity.HasKey(e => e.Macvht).HasName("PK__covanhoc__5047971A13C87C05");

            entity.ToTable("covanhoctap");

            entity.Property(e => e.Macvht)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("macvht");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Hoten)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("hoten");
        });
        modelBuilder.Entity<Lichsudangnhap>(entity =>
        {
            entity.ToTable("lichsudangnhap"); // Đặt tên bảng trùng với cơ sở dữ liệu
            entity.HasKey(e => e.Id); // Khai báo khóa chính
            entity.Property(e => e.Username).IsRequired();
            entity.Property(e => e.Giovao).IsRequired();
        });

        modelBuilder.Entity<Dangnhap>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__dangnhap__3213E83FF9715833");

            entity.ToTable("dangnhap");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("roleId");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.Dangnhaps)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK__dangnhap__roleId__2A4B4B5E");
        });

        modelBuilder.Entity<Dieukientotnghiep>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__dieukien__3213E83F2D2A42B4");

            entity.ToTable("dieukientotnghiep");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Mssv)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("mssv");
            entity.Property(e => e.Ngayctxh).HasColumnName("ngayctxh");
            entity.Property(e => e.Sobuoilaodong).HasColumnName("sobuoilaodong");
            entity.Property(e => e.Sotinchi).HasColumnName("sotinchi");
            entity.Property(e => e.Trangthai)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("trangthai");

            entity.HasOne(d => d.MssvNavigation).WithMany(p => p.Dieukientotnghieps)
                .HasForeignKey(d => d.Mssv)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__dieukiento__mssv__30F848ED");
        });

        modelBuilder.Entity<Hocphan>(entity =>
        {
            entity.HasKey(e => e.Mahocphan).HasName("PK__hocphan__72519D4127A7574C");

            entity.ToTable("hocphan");

            entity.Property(e => e.Mahocphan)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("mahocphan");
            entity.Property(e => e.Hocki).HasColumnName("hocki");
            entity.Property(e => e.Namhoc)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("namhoc");
            entity.Property(e => e.Sotietlt).HasColumnName("sotietlt");
            entity.Property(e => e.Sotietth).HasColumnName("sotietth");
            entity.Property(e => e.Sotinchi).HasColumnName("sotinchi");
            entity.Property(e => e.Tenhocphan)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("tenhocphan");
        });

        modelBuilder.Entity<Lichsudangnhap>(entity =>
        {
            modelBuilder.Entity<Lichsudangnhap>()
               .Property(l => l.Id)
               .ValueGeneratedOnAdd(); // Chỉ định rằng Id sẽ tự tăng khi thêm mới
            
            entity.Property(e => e.Username).IsRequired();
            entity.Property(e => e.Giovao).IsRequired();
        });

        modelBuilder.Entity<Phanhoi>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__phanhoi__3213E83FA9DD8AD3");

            entity.ToTable("phanhoi");

            entity.Property(e => e.Id)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Cauhoi)
                .HasColumnType("text")
                .HasColumnName("cauhoi");
            entity.Property(e => e.Cautraloi)
                .HasColumnType("text")
                .HasColumnName("cautraloi");
            entity.Property(e => e.Macvht)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("macvht");
            entity.Property(e => e.Mssv)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("mssv");
            entity.Property(e => e.Ngaygui)
                .HasColumnType("datetime")
                .HasColumnName("ngaygui");
            entity.Property(e => e.Ngayphanhoi)
                .HasColumnType("datetime")
                .HasColumnName("ngayphanhoi");

            entity.HasOne(d => d.MacvhtNavigation).WithMany(p => p.Phanhois)
                .HasForeignKey(d => d.Macvht)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__phanhoi__macvht__3F466844");

            entity.HasOne(d => d.MssvNavigation).WithMany(p => p.Phanhois)
                .HasForeignKey(d => d.Mssv)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__phanhoi__mssv__403A8C7D");
        });

        modelBuilder.Entity<Phanquyen>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__phanquye__3213E83FE091AC9C");

            entity.ToTable("phanquyen");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Sinhvien>(entity =>
        {
            entity.HasKey(e => e.Mssv).HasName("PK__sinhvien__763F1CDD75B2D987");

            entity.ToTable("sinhvien");

            entity.Property(e => e.Mssv)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("mssv");
            entity.Property(e => e.Diachi)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("diachi");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Gioitinh)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("gioitinh");
            entity.Property(e => e.Hoten)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("hoten");
            entity.Property(e => e.IsDelete)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("is_delete");
            entity.Property(e => e.Lop)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("lop");
            entity.Property(e => e.Ngaysinh).HasColumnName("ngaysinh");
            entity.Property(e => e.Sdt)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("sdt");
            entity.Property(e => e.Trangthai)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("trangthai");
        });

        modelBuilder.Entity<Studentaudit>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__studenta__3213E83F06B476D4");

            entity.ToTable("studentaudit");

            entity.Property(e => e.Id)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Action)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("action");
            entity.Property(e => e.Actiontime)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("actiontime");
            entity.Property(e => e.Changeby)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("changeby");
            entity.Property(e => e.Mssv)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("mssv");
            entity.Property(e => e.NewData).HasColumnName("new_data");
            entity.Property(e => e.OldData).HasColumnName("old_data");
        });

        modelBuilder.Entity<Thongbao>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__thongbao__3213E83F074BB32C");

            entity.ToTable("thongbao");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Noidung)
                .HasColumnType("text")
                .HasColumnName("noidung");
            entity.Property(e => e.Thoigiantao)
                .HasColumnType("datetime")
                .HasColumnName("thoigiantao");
            entity.Property(e => e.Thoigianxoa)
                .HasColumnType("datetime")
                .HasColumnName("thoigianxoa");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
