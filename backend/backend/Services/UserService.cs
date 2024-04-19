using backend.DataAccess.Entities;
using backend.DataAccess.Repositories;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository) {
            _userRepository = userRepository;
        }

        public async Task<User> AddUserAsync(User user)
        {
            User newUser = await _userRepository.AddAsync(user);

            return newUser;
        }

        public async Task<User> DeleteUserAsync(int id)
        {
            User deletedUser = await _userRepository.DeleteAsync(id);
            return deletedUser;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            User user = await _userRepository.GetAsync(id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            var users = await _userRepository.GetAllAsync();

            return users;
        }

        public async Task<User> UpdateUserAsync(User user)
        {
            var updatedUser = await _userRepository.UpdateAsync(user);

            return updatedUser;
        }
    }
}
