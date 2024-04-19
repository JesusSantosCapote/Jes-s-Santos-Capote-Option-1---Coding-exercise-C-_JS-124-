using backend.DataAccess.Entities;
using backend.Result;

namespace backend.Services
{
    public interface IUserService
    {
        public Task<Result<IEnumerable<User>>> GetUsersAsync();
        public Task<Result<User>> GetUserByIdAsync(int id);
        public Task<Result<User>> AddUserAsync(User user);
        public Task<Result<User>> UpdateUserAsync(User user);
        public Task<Result<User>> DeleteUserAsync(int id);
    }
}
