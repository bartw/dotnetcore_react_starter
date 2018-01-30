using System;
using Microsoft.AspNetCore.Mvc;
using Starter.Web.Dto;

namespace Starter.Web.Controllers
{
    [Route("api/[controller]")]
    public class SubjectController : Controller
    {
        [HttpGet]
        public Subject Get()
        {
            return new Subject("starter");
        }
    }
}