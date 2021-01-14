using System;

namespace Tutor.Domain.BaseModels
{
    public class BasePesistentEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
