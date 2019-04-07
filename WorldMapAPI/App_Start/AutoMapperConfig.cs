using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using WorldMapAPI.DTOs;

namespace WorldMapAPI.App_Start
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize((config) =>
            {
                config.CreateMap<Country, CountryDTO>().ReverseMap();
                config.CreateMap<City, CityDTO>().ReverseMap();
            });
        }
    }
}