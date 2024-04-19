using backend.DataAccess.DataContext;
using backend.DataAccess.Repositories;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
{ 
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddCors(o => o.AddPolicy("policy", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    }));

    builder.Services.AddDbContext<UserApiInMemoryContext>(options =>
    {
        options.UseInMemoryDatabase(databaseName: "UsersDb");
    });

    builder.Services.AddScoped<IUserRepository, UserRepositoy>();
    builder.Services.AddScoped<IUserService, UserService>();
}


var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.UseCors("policy");
    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}
