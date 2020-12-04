using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoAPI.Model
{
    public class TodoUser {
        [Key]
        public int Id { set; get; }
        [Required]
        public string Firstname { set; get; }
        [Required]
        public string Lastname { set; get; }
    }
}
