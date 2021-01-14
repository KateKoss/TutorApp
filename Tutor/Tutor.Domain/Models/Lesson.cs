using System;
using Tutor.Domain.BaseModels;

namespace Tutor.Domain.Models
{
    public class Lesson : BasePesistentEntity
    {
        public bool IsProceed { get; set; }
    }
}
