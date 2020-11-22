using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using Tutor.Domain.Models;

namespace Tutor.Controllers
{
    [ApiController]
    [Route("api/lessons")]
    public class LessonController : Controller
    {
        ApplicationContext db;

        public LessonController(ApplicationContext applicationContext, IConfiguration configuration)
        {
            db = applicationContext;
            if (!db.Lessons.Any())
            {
                db.Lessons.Add(new Lesson { Id = Guid.NewGuid(), Name = "English" });
                db.Lessons.Add(new Lesson { Id = Guid.NewGuid(), Name = "Java" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Lesson> Get()
        {
            return db.Lessons.ToList();
        }

        [HttpGet("{name}")]
        public Lesson Get(string name)
        {
            return db.Lessons.FirstOrDefault(x => x.Name == name);
        }

        [HttpPost]
        public IActionResult Post(Lesson lesson)
        {
            if (ModelState.IsValid)
            {
                db.Lessons.Add(lesson);
                db.SaveChanges();
                return Ok(lesson);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Lesson lesson)
        {
            if (ModelState.IsValid)
            {
                db.Update(lesson);
                db.SaveChanges();
                return Ok(lesson);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id) 
        {
            var lessonToRemove = db.Lessons.FirstOrDefault(x => x.Id == id);
            if (lessonToRemove != null)
            {
                db.Lessons.Remove(lessonToRemove);
                db.SaveChanges();
                return Ok(lessonToRemove);
            }
            return BadRequest(lessonToRemove);
        }
    }
}
