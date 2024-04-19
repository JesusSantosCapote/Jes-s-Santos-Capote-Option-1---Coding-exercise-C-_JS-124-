using backend.DataAccess.Entities;

namespace backend.DataAccess.Repositories
{
    public interface IUserRepository
    {
        public Task<User?> GetAsync(int id);
        public Task<IEnumerable<User?>> GetAllAsync();
        public Task<User> AddAsync(User user);
        public Task<User?> DeleteAsync(int id);
        public Task<User?> UpdateAsync(User user);
    }
}
