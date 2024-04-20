using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using System.Net;
using System.Text;

namespace ControllersIntegrationTest
{
    public class UserControllerTest
    : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;
        private readonly string _url;

        public UserControllerTest(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
            _url = "/api/users";
        }

        [Fact]
        public async Task Get_EndpointsReturnSuccessAndCorrectContentType()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(_url);

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task GetById_EndpointsReturnSuccessAndCorrectContentType()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync($"{_url}/2");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task GetById_EndpointReturnNotFoundAndCorrectContentType_ForNonExistentId()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync($"{_url}/9999");

            // Assert 
            Assert.Equal(response.StatusCode, HttpStatusCode.NotFound);
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task Delete_EndpointReturnSuccessAndCorrectContentType()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.DeleteAsync($"{_url}/1");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal("text/plain; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task Delete_EndpointReturnNotFoundAndCorrectContentType_ForNonExistentId()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.DeleteAsync($"{_url}/9999");

            // Assert 
            Assert.Equal(response.StatusCode, HttpStatusCode.NotFound);
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task Put_EndpointReturnSuccessAndCorrectContentType()
        {
            // Arrange
            var client = _factory.CreateClient();
            var content = new StringContent("{ \"id\": \"2\", \"name\":\"Dorian Gray\" }", Encoding.UTF8, "application/json");

            // Act
            var response = await client.PutAsync($"{_url}/2", content);

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal("text/plain; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task Put_EndpointReturnNotFoundAndCorrectContentType_ForNonExistentId()
        {
            // Arrange
            var client = _factory.CreateClient();
            var content = new StringContent("{ \"id\": \"9999\", \"name\":\"Dorian Gray\" }", Encoding.UTF8, "application/json");

            // Act
            var response = await client.PutAsync($"{_url}/9999", content);

            // Assert 
            Assert.Equal(response.StatusCode, HttpStatusCode.NotFound);
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task Post_EndpointReturnCreatedAtAndCorrectContentTypeAndLocationHeader()
        {
            // Arrange
            var client = _factory.CreateClient();
            var content = new StringContent("{ \"id\": \"5\", \"name\":\"Dorian Gray\" }", Encoding.UTF8, "application/json");

            // Act
            var response = await client.PostAsync(_url, content);

            // Assert 
            Assert.Equal(response.StatusCode, HttpStatusCode.Created);
            Assert.NotNull(response.Headers.Location);
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }
    }
}