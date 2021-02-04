using Microsoft.EntityFrameworkCore;
using Tutor.Domain.Models;

namespace Tutor
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Student> Students { get; set; }
    }
}
