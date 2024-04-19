using backend.Result;
using Microsoft.AspNetCore.Mvc;

namespace backend.Extensions
{
    public static class ControllerExtensions
    {
        public static ActionResult FromResult<T>(this ControllerBase controller, Result<T> result)
        {
            switch (result.ResultType)
            {
                case ResultType.Ok:
                    return controller.Ok(result.Data);
                case ResultType.NoContent:
                    return controller.Ok("Operation completed satisfactorily");
                case ResultType.NotFound:
                    return controller.NotFound(result.Errors);
                case ResultType.Unexpected:
                    return controller.StatusCode(StatusCodes.Status500InternalServerError, result.Errors);
                default:
                    throw new Exception("An unhandled result has occurred as a result of a service call.");
            }
        }
    }
}
