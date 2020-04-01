using System;

namespace Portfolio.Data
{
    public class Item
    {
        private DateTime from;

        private DateTime to;

        public string Title { get; set; }

        public bool HasDates { get; private set; }

        public bool Current { get; set; }

        public DateTime From 
        { 
            get => from; 
            set 
            {
                HasDates = true; 
                from = value;
            }
        }

        public DateTime To
        {
            get => to;
            set
            {
                HasDates = true;
                to = value;
            }
        }

        public string Location { get; set; }

        public string Description { get; set; }
    }
}