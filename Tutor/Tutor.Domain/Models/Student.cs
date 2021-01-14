using System;
using System.ComponentModel.DataAnnotations;
using Tutor.Domain.BaseModels;

namespace Tutor.Domain.Models
{
    public class Student : PersonEntity
    {
        public Guid Id { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string PhoneNumber { get; set; }
    }
}
