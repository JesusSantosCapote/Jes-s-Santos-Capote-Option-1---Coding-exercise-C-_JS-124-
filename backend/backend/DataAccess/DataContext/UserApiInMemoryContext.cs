using Microsoft.EntityFrameworkCore;
using backend.DataAccess.Entities;

namespace backend.DataAccess.DataContext
{
    public class UserApiInMemoryContext : DbContext
    {
        public UserApiInMemoryContext(DbContextOptions<UserApiInMemoryContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
