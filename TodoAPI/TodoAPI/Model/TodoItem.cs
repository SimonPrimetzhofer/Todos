using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoAPI.Model
{
    public class TodoItem {
        [Key]
        public string Id { set; get; }
        [Required]
        public string Description { set; get; }
        public string FurtherText { set; get; }
        [Required]
        public string Priority { set; get; }
        public DateTime dueDate { set; get; }
        [Required]
        public bool Done { set; get; }
        [Required]
        public int UserId { set; get; }
    }
}
