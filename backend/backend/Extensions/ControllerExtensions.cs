using backend.Result;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace backend.Extensions
{
    public static class ControllerExtensions
    {
        public static ActionResult FromResult<T>(this ControllerBase controller, Result<T> result, 
            string actionName = "", object routeValues = null)
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
                case ResultType.CreatedAt:
                    return controller.CreatedAtAction(actionName, routeValues, result.Data);
                default:
                    throw new Exception("An unhandled result has occurred as a result of a service call.");
            }
        }
    }
}
