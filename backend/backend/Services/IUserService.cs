using backend.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;

namespace backend.Services
{
    public interface IUserService
    {
        public Task<IEnumerable<User>> GetUsersAsync();
        public Task<User> GetUserById(int id);
        public Task<User> AddUserAsync(User user);
        public Task<User> UpdateUserAsync(User user);
        public Task<User> DeleteUserAsync(int id);
    }
}
