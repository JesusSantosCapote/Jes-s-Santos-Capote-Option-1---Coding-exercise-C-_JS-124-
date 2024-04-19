using backend.DataAccess.Entities;
using backend.DataAccess.Repositories;
using backend.Result;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<Result<User>> AddUserAsync(User user)
        {
            try
            {
                User newUser = await _userRepository.AddAsync(user);
                return new SuccessResult<User>(newUser);
            }
            catch (Exception ex)
            {
                return new UnexpectedResult<User>(ex.Message);
            }
        }

        public async Task<Result<User>> DeleteUserAsync(int id)
        {
            try
            {
                var user = await _userRepository.GetAsync(id);

                if (user == null)
                {
                    return new NotFoundResult<User>($"User with id:{id} not found");
                }

                await _userRepository.DeleteAsync(id);
                return new NoContentResult<User>();
            }
            catch (Exception ex)
            {
                return new UnexpectedResult<User>(ex.Message);
            }
        }

        public async Task<Result<User>> GetUserByIdAsync(int id)
        {
            try
            {
                User user = await _userRepository.GetAsync(id);

                if (user == null)
                {
                    return new NotFoundResult<User>($"User with id:{id} not found");
                }

                return new SuccessResult<User>(user);
            }
            catch (Exception ex)
            {
                return new UnexpectedResult<User>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<User>>> GetUsersAsync()
        {
            try
            {
                var users = await _userRepository.GetAllAsync();

                return new SuccessResult<IEnumerable<User>>(users);
            }
            catch (Exception ex)
            {
                return new UnexpectedResult<IEnumerable<User>>(ex.Message);
            }
        }

        public async Task<Result<User>> UpdateUserAsync(User user)
        {
            try
            {
                User userToUpdate = await _userRepository.GetAsync(user.Id);

                if(userToUpdate == null)
                {
                    return new NotFoundResult<User>($"User with id:{user.Id} not found");
                }

                await _userRepository.UpdateAsync(user);
                return new NoContentResult<User>();
            }
            catch (Exception ex)
            {
                return new UnexpectedResult<User>(ex.Message);
            }
        }
    }
}
