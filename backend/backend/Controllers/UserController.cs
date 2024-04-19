using backend.Services;
using Microsoft.AspNetCore.Mvc;
using backend.Result;
using backend.Extensions;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    IUserService _userService;
    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var result = await _userService.GetUsersAsync();
        return this.FromResult(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUser(int id)
    {
        var result = await _userService.GetUserByIdAsync(id);
        return this.FromResult(result);
    }
}