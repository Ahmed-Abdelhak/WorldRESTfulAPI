using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WorldMapAPI.DTOs
{
    public class CityDTO
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public int Fk_Country { get; set; }

        public virtual Country Country { get; set; }
    }
}