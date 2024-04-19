using backend.DataAccess.DataContext;
using backend.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;

namespace backend.DataAccess.Repositories
{
    public class UserRepositoy : IUserRepository
    {
        private readonly UserApiInMemoryContext _context;

        public UserRepositoy(UserApiInMemoryContext context)
        {
            _context = context;
        }

        public async Task<User> AddAsync(User user)
        {
            var newUser = await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return newUser.Entity;
        }

        public async Task<User?> DeleteAsync(int id)
        {
            var userToRemove = await _context.Users.FindAsync(id);

            if (userToRemove != null)
            {
                var result = _context.Users.Remove(userToRemove); 
                await _context.SaveChangesAsync();
                return result.Entity;
            }
            else return null;
        }

        public async Task<IEnumerable<User?>> GetAllAsync()
        {
            var users = await _context.Users.ToListAsync();

            return users;
        }

        public async Task<User?> GetAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user != null)
            {
                return user;
            }
            else return null;
        }

        public async Task<User?> UpdateAsync(User user)
        {
            var userToUpdate = await _context.Users.FindAsync(user.Id);

            if (userToUpdate != null)
            {
                userToUpdate.Name = user.Name;
                var result = _context.Update(userToUpdate);
                await _context.SaveChangesAsync();

                return result.Entity;
            }
            else return null;
        }
    }
}
