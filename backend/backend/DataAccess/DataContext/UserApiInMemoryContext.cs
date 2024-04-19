using Microsoft.EntityFrameworkCore;
using backend.DataAccess.Entities;

namespace backend.DataAccess.DataContext
{
    public class UserApiInMemoryContext : DbContext
    {
        public UserApiInMemoryContext(DbContextOptions<UserApiInMemoryContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Name = "Jhon Doe" },
                new User { Id = 2, Name = "Jane Doe" }
            );
        }

        public DbSet<User> Users { get; set; }
    }
}
