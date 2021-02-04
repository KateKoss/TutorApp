using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Tutor.Domain.Models;

namespace Tutor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private ApplicationContext db;

        public StudentController(ApplicationContext applicationContext)
        {
            db = applicationContext;
            if (!db.Students.Any())
            {
                db.Students.Add(new Student()
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Kate",
                    LastName = "Kos",
                    PhoneNumber = "0939483628"
                });
                db.Students.Add(new Student()
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Alex",
                    LastName = "Alex",
                    Email = "fake@gmail.com",
                    PhoneNumber = "0935533585"
                });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return db.Students.ToList();
        }

        [HttpGet("{id}")]
        public Student Get(Guid id)
        {
            return db.Students.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post(Student student)
        {
            if (ModelState.IsValid)
            {
                db.Students.Add(student);
                db.SaveChanges();
                return Ok(student);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Student student)
        {
            if (ModelState.IsValid)
            {
                db.Students.Update(student);
                db.SaveChanges();
                return Ok(student);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var studentsToRemove = db.Students.FirstOrDefault(x => x.Id == id);
            if (studentsToRemove != null)
            {
                db.Students.Remove(studentsToRemove);
                db.SaveChanges();
                return Ok(studentsToRemove);
            }

            return BadRequest("Student not found.");
        }
    }
}
